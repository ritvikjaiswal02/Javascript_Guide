let arr = ["yo", 9, 8, 6];
let number = [" rj", 38, 88, 44];

// console.log(arr[3]);
// console.log(number[2]);

// for (let i = 0; i < number.length; i++) {
//   console.log(number[i]);
// }

// array methods
//push pop shift unshift length find includes concat  join splice slice findIndex() , from() , isArray()

// arr.push(4000);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift(444);
// console.log(arr);

// console.log(arr.length);

// let found = arr.find((element) => element > 2);
// console.log(found);

// console.log(arr.includes(8));

// let arr1 = [90, 9, 88, 8];
// let arr2 = [22, 44, 55];
// let merged = arr1.concat(arr2);
// console.log(merged);

// join - convert arr to string
// let arr3 = [`poo`, `jkino`, `mooo`];
// let result = arr.join(" ");
// console.log(result);

// splice-add or remove element

let arr4 = [1, 2, 3, 4];

// let si = arr4.splice(2, 1, "hi");
// console.log(arr4);

// slice- return shallow copy of portion of array - start index , end index
// let result = arr4.slice(1, 4);
// console.log(result);

let arr5 = [2, 3, 1, 6];
// console.log(arr5.sort((a, b) => a - b));

// console.log(arr5.findIndex((el) => el > 3));

// let str = "course";
// let arr6 = Array.from(str);
// console.log(arr6);

// console.log(Array.isArray(arr5));

// high order array methods
// map()- create and return new array by appplying function to each element of original array
// filter() - create return new array w element that pass test condition
// reduce()-reduce array to single value by applying function to each element
// map and filter return array while reduce return single value
let arr99 = [1, 2, 3];
let doubled = arr99.map((el) => el * 2);
console.log(doubled);

let evens = arr99.filter((el) => el % 2 == 0);
console.log(evens);

let sum = arr99.reduce((prev, el) => prev + el, 0);
console.log(sum);
// 6
