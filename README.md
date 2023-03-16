# nextjs-starter

## :four_leaf_clover:: Features
---
+ [Next.js](https://nextjs.org/)
+ [Sass](https://sass-lang.com/) + CSS Modules
+ [TypeScript](https://www.typescriptlang.org/)
+ [ESLint](https://eslint.org/) + [Stylelint](https://stylelint.io/)
+ [husky](https://github.com/typicode/husky)
+ [Prettier](https://prettier.io/)
+ [Storybook](https://storybook.js.org/)

## :dog: Requirements
------
`Node.js`と`yarn`は下記のバージョンで確認済みです。


| 名前 | バージョン    |
| ---- |----------|
| Node.js | 18.14.2  |
| Yarn | v1.22.19 |


## :turtle: Install

First, clone the repo via git:

```bash
git@github.com:junichi-h/nextjs-starter.git
```

### Install yarn

`npm script`で`yarn`を使用するので、yarnをインストールしてください。

https://classic.yarnpkg.com/ja/docs/install/


**for mac**

```bash
$ brew install yarn
```

**for windows**

```sh
# for Windows (with Chocolatey)
$ choco install yarn
```

[Use installer](https://yarnpkg.com/lang/en/docs/install/#windows-tab)


### 初期設定
`yarn install`が終わったタイミングで、`.config`フォルダががプロジェクト内に作られます。コミット時に`ESLint` / `stylelint` / `Prettier`を実行させるために必要です。

作られない場合は必ず下記コマンドを実行してください。


```sh
yarn prepare
```



下記のエラーが出た場合は[記事](https://qiita.com/nyamogera/items/9a34a0245c042b6f29c6)
を参考にgitのツールを修正してください。

```sh
.git/hooks/pre-commit: line 49: node: command not found
```


### Install dependencies

Using yarn:

```bash
yarn install
```

## :whale: Command
------

## dev

開発サーバーを立ち上げて、各種ファイルをコンパイルをします。


```bash
yarn dev
```

再レンダリングされているのかの確認は、下記を参考にしてください。
[`why-did-you-render`](https://github.com/welldone-software/why-did-you-render)を使用して確認します。

+ [React Developer Toolsとwhy did you renderを使ったレンダリング最適化方法をいまさらだけど整理してみた](https://qiita.com/WebEngrChild/items/aa19500c51efa33dabc6)

## ANALYZE
`production build`時のファイル容量を確認します。

```bash
yarn analyze
```

## lint

`Prettier`と`ESLint`を実行します。

```bash
yarn lint
```

`pages`ディレクトリと`Storybook`のファイルのみ、`export default`でLintエラーが出ません。

## export
最終的にサーバーにアップされるファイルを出力します。

```bash
yarn export
```

## start
最終的にサーバーにアップされるファイルローカルで確認します。

[http://localhost:8888](http://localhost:8888)

```bash
yarn start
```

## svgr
SVGをReactコンポーネントに変換にします。

```bash
yarn svgr
```

`src/ui/`内にディレクトリを作成してください。svg画像はそのフォルダ内の`assets`フォルダに格納します。

追加後`packages.json`の`npm script`に、該当ディレクトリとコンポーネントの書き出し先を記述してください。コマンド実行時に`assets`フォルダ内のsvgファイルを[svgo](https://github.com/svg/svgo)で最適化します。

```bash
svgo -f src/components/ui/ディレクトリ名/assets --config ./svgo.config.js && svgr --filename-case kebab src/components/ui/ディレクトリ名/assets/*.svg --ext tsx --out-dir src/components/ディレクトリ名/icon
```

## storybook起動
http://localhost:6006/ で立ち上がります。


```bash
yarn storybook
```

## generator
以下のコマンドで`page`のコードをgenerateできます。


```bash
yarn generate
```

## :crocodile: Directory
------
src内のディレクトリ構造は下記を参考にしています。

+ [SPA Componentの推しディレクトリ構成について語る](https://zenn.dev/yoshiko/articles/91a3dd575f99a2)
+ [「3種類」で管理するReactのState戦略](https://zenn.dev/yoshiko/articles/607ec0c9b0408d)
+ [フロントエンドアーキテクチャの話: Resource Setの紹介](https://zenn.dev/yoshiko/articles/91a3dd575f99a2)


### srcフォルダ
```text
src
|
+-- components（Component）        # コンポーネントファイルの格納先
|
+-- pages（Component）             # Next.jsのページディレクトリ
|
+-- styles（Component）            # 共通で使用する変数やmixin、関数の置き場
|
+-- global-states（Global State）  # グローバルステートの管理（Recoil）
|
+-- models（Resource Set）         # Modelはドメインモデルをあらわすレイヤー
|
+-- repositories（Resource Set）   # Repositoryは外部との通信を担うレイヤー
|
+-- usecases（Resource Set）       # Usecaseは「ユーザーがしたいと思うひとまとまりの処理」を表現するレイヤー
|
+-- config（Config）               # グローバルな設定、環境変数などはすべてここからエクスポート
|
+-- hooks(Hocks)                  # アプリケーション全体で使用される共通フック
|
+-- libs(Libs)                    # アプリケーション用にあらかじめ設定された異なるライブラリの再エクスポート
|
+-- utils(Libs)                   # 共通で使用するユーティリティ関数
```

+ `Resource Set` というのは、リソースごとに存在する、そのリソースに関連した処理のセット
+ models, repositories, usecasesは実験的なディレクトリ

### componentsフォルダ
`components`フォルダ内は以下の4種類の分類ディレクトリで構成されています。

+ src/components/page
+ src/components/model
+ src/components/ui
+ src/components/functional

依存ルールは下記のとおりです。
+ page ⇒ model, ui, functional
+ model ⇒ ui, functional
+ ui ⇒ functional
+ functional ⇒ ui

uiでmodel内のコンポーネントを読み込んだり、functional内でページのコンポーネントを読み込まないでください。


#### page
pageは**1つのページを表すComponent**を表すディレクトリです。 Next.jsの設定で`pages`ディレクトリは必要ですが、ルーティングの設定をシンプルにするためにこのディレクトリを用意しています。

#### model
modelに分類しているのは**modelに関心を持つComponent**です。

#### ui
uiに分類しているのは**modelに関心を持たない、見た目を伴うComponent**です。コンポーネントの用途や大小は問いません。必要に応じてディレクトリを追加してください。

コンポーネントを追加したら、ショートハンドでアクセスできるように`ui/index.ts`に記述してください。


#### functional
functionalに分類しているのは**modelに関心を持たない、見た目を伴わないComponent**です。

#### 各コンポーネントのファイル構成
```text
index.ts             # indexファイル
component.tsx        # コンポーネントファイル
styles.module.scss   # scssファイル
type.ts              # 型ファイル
```
