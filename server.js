const { createServer } = require('https');
const { parse } = require('url');
const { readFileSync } = require('fs');
const next = require('next');

const getLocalAddress = () => {
  const ifacesObj = {};
  ifacesObj.ipv4 = [];
  ifacesObj.ipv6 = [];
  const interfaces = os.networkInterfaces();

  for (const dev in interfaces) {
    interfaces[dev].forEach(function (details) {
      if (!details.internal) {
        switch (details.family) {
          case 'IPv4':
          case 4:
            ifacesObj.ipv4.push({ name: dev, address: details.address });
            break;
          case 'IPv6':
          case 6:
            ifacesObj.ipv6.push({ name: dev, address: details.address });
            break;
        }
      }
    });
  }
  return ifacesObj;
};

const os = require('os');
const localAddress = getLocalAddress().ipv4[0].address;

// 各種設定
const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// 鍵
const httpsOptions = {
  key: readFileSync('./certificates/key.pem'),
  cert: readFileSync('./certificates/cert.pem'),
};

console.log(`ready - started server on https://localhost:${port}`);
console.log(`ready - started server on https://${localAddress}:${port}`);

// サーバ起動
app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
  });
});
