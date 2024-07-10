const fs = require('fs');

fs.rename('test.txt', 'test2.txt', err =>{
    console.log(err)
});