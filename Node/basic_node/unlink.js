const fs = require('fs');


fs.unlink('test.txt', err => console.log(err));