const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const inputArray = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(inputArray), ["Lighthouse", "Labs"]);
  });
});
