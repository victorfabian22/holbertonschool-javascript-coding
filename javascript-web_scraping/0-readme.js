#!/usr/bin/node
/* task 0 readme js */

const fs = require('fs');

if (process.argv.length !== 3) {
  console.error('Usage: node 0-readme.js <file-path>');
  process.exit(1);
}

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
