const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 5 for [5, 6, 7]", () => {
    const inputArray = [5, 2, 7];
    assert.strictEqual(head(inputArray), 5);
  });
  it('returns Hello for ["Hello", "Lighthouse", "Labs"]', () => {
    const inputArray = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(head(inputArray), "Hello");
  });
});
