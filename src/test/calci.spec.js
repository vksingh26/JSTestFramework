const assert = require('assert');
const calci = require('../script/calci');

let actual = calci.add(5, 5);
let expected = 10;
assert.equal(actual, expected);
console.log('test succeeded!')