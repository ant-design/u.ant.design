'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

require('../url.map.js');
const currentURLMap = Object.assign({}, global.URLMap);

function generateUrl(target) {
  const md5 = crypto.createHash('sha256').update(target).digest('base64');
  return md5.slice(0, 7);
}

function slugify(shortName) {
  return shortName.replace(/[^A-Za-z-]/g,'-');
}

function addUrl(target, shortName) {
  if(!shortName) {
    shortName = generateUrl(target);
  }
  currentURLMap[`/${shortName}`] = target;
  console.log(`${target} ==shorten=> http://u.ant.design/${shortName}`);
}

const URLs = process.argv.slice(2);
if(URLs.length === 2 && !URLs[1].startsWith('http')) {
  addUrl(URLs[0], slugify(URLs[1]));
} else {
  URLs.forEach(url => addUrl(url));
}

fs.writeFileSync(
  path.join(process.cwd(), './url.map.js'),
  `(typeof window !== 'undefined' ? window : global).URLMap = ${JSON.stringify(currentURLMap, null, 2)};`
);

console.log('\nURLs had been shortened, please commit and push it to GitHub!');
