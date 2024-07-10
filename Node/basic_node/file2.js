const fs = require('fs');

fs.appendFile('test.txt', 'Olá NodeJs/n', err =>{
    console.log(err)
})