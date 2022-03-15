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


module.exports = middle;

