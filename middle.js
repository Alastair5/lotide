const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
    if (Array.isArray(array1) && Array.isArray(array2)) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  const final = eqArrays(array1, array2);
  if (final) {
    console.log(`🟢🟢🟢 Assertion Passed: ${array1} === ${array2}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
};

function middle(array) {
  let index = Math.floor(array.length / 2)
  let result = [];
  if (array.length <= 2){
    return [];
  }
  else {
    if (array.length % 2 === 0) {
      result.push(array[index - 1], array[index]);
      return result;
    }
    else {
      result.push(array[index]);
      return result
    }
  }
};


