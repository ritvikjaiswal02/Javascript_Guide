//for...in - iterate overate keys(propeties) of object or indices of array

const phone = {
  name: "vivo",
  price: 40000,
  color: "blue",
  camera: " 20MP",
};

// for (let key in phone) {
//   console.log(key);
// }

//output is
// // name
// price
// color
// camera

// for (let key in phone) {
//   console.log(key, phone[key]);
// }

// output is
// name vivo
// price 40000
// color blue
// camera  20MP

// for...of- ierate over bvalue of iterable objs like arr,str,maps etc
// let arr89 = [10, 20, 30, 40];
// for (let value of arr89) {
//   console.log(value);
// }

// // output -
// 10
// 20
// 30
// 40

//forEach()- execute function once for each element in array ( cannot used to break loop)
let arr45 = [10, 20, 30];
arr45.forEach((value, index, arr) => console.log(value, index, arr));
