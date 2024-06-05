const fs = require('fs');

fs.writeFile('test.txt', 'Olá NodeJs', err => {
    console.log(err)
});

console.log(__dirname);