"use strict";

const arr = [1, 2, 3, 6, 8];

// // arr.pop();
arr.push(10);

arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}



// // console.log(arr);

// /* for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
// }

// for (let index of arr) {
//     console.log(index);
// } */

// arr.forEach(function(value, index, arr) {
//     console.log(`${index}: ${value} внутри массива ${arr}`);
// });

const str = prompt("", "");
const products = str.split(", ");
console.log(products.join('\n'));