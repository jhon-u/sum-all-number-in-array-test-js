const sumItems = function(array) {
  let result = 0;
  for (let item of array) {
    if (Array.isArray(item)) {
      result += sumItems(item);
    } else {
      result += item;
    }
  }

  return result;
};

// TEST CODE
console.log(sumItems([1, 2, 3, 4, 5]));
console.log(sumItems([[1, 2, [[3], 4]], 5, []]));
console.log(sumItems([[[[[[[[[[[[[1]]]]]]]]]]]]]));

module.exports = sumItems;