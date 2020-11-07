// Array.of
// console.log(Array.of(1,2,3,4)); // [ 1, 2, 3, 4 ]
// console.log(Array.of(1,2,3,'a','b',true)); // [ 1, 2, 3, 'a', 'b', true ]

// let arr = [10,6,7,44,66];
// let result = arr.find((item, index, arr) => {
//     return item > 10;
// });
// console.log(result);

let arr = [10,6,7,44,66];
let result = arr.findIndex((item, index, arr) => {
    return item > 10;
});
console.log(result);