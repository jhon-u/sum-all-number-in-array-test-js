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

module.exports = sumItems;