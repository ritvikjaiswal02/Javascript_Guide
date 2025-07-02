const print = () => {
  console.log("print press");
};
const test = (callback) => {
  console.log("inside test function");
  callback();
};

test(print);
