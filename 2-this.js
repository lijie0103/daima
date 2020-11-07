// // es5
// let obj = {
//     name:'tom',
//     sayname(){
//         console.log(this);
//     }
// } // { name: 'tom', sayname: [Function: sayname] }
// // es6
// let obj = {
//     name:'tom',
//     sayname:() => {
//         console.log(this);
//     }
// } // {}
// // 调用对象中的方法
// obj.sayname();

// let test = function(){
//     console.log(arguments);
// } // [Arguments] {}
// let test = () => {
//     console.log(arguments);
// }
// test();

// let arr = [1,2,3];
// console.log(...arr);

console.log(...'hello'); // h e l l o
console.log([...'hello']); // [ 'h', 'e', 'l', 'l', 'o' ]