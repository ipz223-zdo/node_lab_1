const fs = require("fs");

fs.appendFile('playground/task2.txt', '\nHello, World!', (err) => {
    console.log(err);
});