<<<<<<< HEAD
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.
function invert(array) {
    return array.map(number => -number);
 }
console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5])
console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5])
console.log(invert([]), [])
=======
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.
function invert(array) {
    return array.map(number => -number);
 }
console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5])
console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5])
console.log(invert([]), [])
>>>>>>> be01eb10ce8dab6ec59999840e88653fb25ed6a2
console.log(invert([0]), [-0])