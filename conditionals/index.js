// if statements
// if ( condition){
// xecute this part
// }

// let x = 10;
// if (x > 10) {
//   console.log(`x,10 se bada hai`)
// } else {
//   console.log(`x,not bigger`)
// }

let aadhar = true;
let pan = false;
if (aadhar) {
  console.log(`open account w aadhar`);
} else if (pan) {
  console.log(`open account w pan`);
} else {
  console.log(`not open`);
}
// open account w aadhar is the output

// switch
let day = 6;
// if (day == 1) {
//   console.log("monday");
// } else if (day == 2) {
//   console.log("tuesday");
// } else {
//   console.loglog("no day");
// }

// switch(expression){
//     case x:
//         code block
//     break;
//     case y:
//         code
//         break;
//         default;
//         code
//     }

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wedday");
    break;

  case 4:
    console.log("thday");
    break;
  case 5:
    console.log("frday");
    break;
  default:
    console.log("weekend");
}
