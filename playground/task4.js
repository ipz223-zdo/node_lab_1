const lodash = require('lodash')

console.log("Chunk:" + lodash.chunk([1, 2, 3, 4], 2));
console.log("Concat:" + lodash.concat([1], 2, [4, 2, 3]));
console.log("Difference:" + lodash.difference([1, 2, 3, 4], [2, 3, 5]));
console.log("Drop:" + lodash.drop([1, 2, 3, 4, 5], 3));
console.log("Join:" + lodash.join(['a', 'b', 'c'], '~'));
