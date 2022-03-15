const tail = function(words) {
  const array = [];
  let k = 0;
  for (let i = 1; i < words.length; i++) {
    array[k] = words[i];
    k++;
  }
  return array;
};

module.exports = tail;
