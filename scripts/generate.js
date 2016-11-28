'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

require('../url.map.js');
const currentURLMap = Object.assign({}, global.URLMap);

const URLs = process.argv.slice(2);
URLs.forEach(url => {
  const md5 = crypto.createHash('sha256').update(url).digest('base64');
  const shortenedURL = `/${md5.slice(0, 7)}`;
  currentURLMap[shortenedURL] = url;
  console.log(`${url} ==shorten=> http://u.ant.design${shortenedURL}`);
});

fs.writeFileSync(
  path.join(process.cwd(), './url.map.js'),
  `(typeof window !== 'undefined' ? window : global).URLMap = ${JSON.stringify(currentURLMap, null, 2)};`
);

console.log('\nURLs had been shortened, please commit and push it to GitHub!');
