/**
 * @param {number[]} number
 * @param {number} target
 * @return {number[]}
 */
let twoSum = (number, target) => {
  for (let index = 0; index < number.length; index++) {
    const element = number[index];

    for (let j = 0; j < number.length; j++) {
      const num = number[j];

      if (index !== j && element + num === target) {
        return [index, j];
      }
    }
  }
};

console.log(twoSum([3, 2, 3], 6));
