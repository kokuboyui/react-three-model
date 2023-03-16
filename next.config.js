const path = require('path');
const chalk = require('chalk');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// next startで実行する場合プラグインをimportしてると表示できない
// next export時のみ読み込みする
const withExportImages = require('next-export-optimize-images');
const webpack = require('webpack');

// exportエラー用
const modules = [];
const withTM = require('next-transpile-modules')(modules, {
  debug: false,
  resolveSymlinks: true,
});

const { NODE_ENV, debug } = process.env;

const isDebugMode = !!debug;
const isProduction = NODE_ENV === 'production';
const trailingSlash = isProduction;

const sassOptions = {
  includePaths: [path.join(__dirname, 'src/styles')],
};

const env = {
  isProduction,
  isDebugMode,
};

console.log(chalk.bgRed.underline(`NODE_ENV:${NODE_ENV}`));

const nextConfig = {
  compiler: {
    removeConsole: isProduction,
  },
  reactStrictMode: true,
  trailingSlash,
  env,
  sassOptions,
  webpack: (config, { dev, isServer }) => {
    config.plugins = config.plugins || [];

    // polyfillの追加
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./client/polyfills.js')
      ) {
        entries['main.js'].unshift('./client/polyfills.js');
      }

      return entries;
    };

    if (dev && !isServer) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const wdrPath = path.resolve(__dirname, './src/scripts/wdyr.ts');
        const entries = await originalEntry();

        if (entries['main.js'] && !entries['main.js'].includes(wdrPath)) {
          entries['main.js'].push(wdrPath);
        }
        return entries;
      };
    }

    // config.resolve.alias["@public"] = path.resolve(__dirname, "public");

    // シェーダー読み込み用のローダー
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: [{ loader: 'raw-loader' }, { loader: 'glslify-loader' }],
      exclude: /node_modules/,
    });

    // 必要なThree.jsのモジュールを読み込む
    // config.plugins.push(
    //   new webpack['NormalModuleReplacementPlugin'](
    //     /three.module.js/,
    //     path.resolve('src/libs/three-min.js')
    //   )
    // );

    return config;
  },
};

// next start時はwithExportImagesを削除
const nextPlugins = [withBundleAnalyzer, withTM, withExportImages];

module.exports = () => {
  return nextPlugins.reduce((config, plugin) => plugin(config), nextConfig);
};
