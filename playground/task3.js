const os = require('os');

let userName = os.userInfo().username;
console.log(`Hello, ${userName}!`);