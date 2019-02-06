const assert = require('assert');
const calci = require('../script/calci');



describe("Calculator", function() {
    console.log('mocha test succeeded!');
    let actual = calci.add(5, 5);
    let expected = 10;
    assert.equal(actual, expected);
});