#!/usr/bin/node
/* task 1 writeme js */

const fs = require('fs');
fs.writeFileSync(process.argv[2], process.argv[3]);
