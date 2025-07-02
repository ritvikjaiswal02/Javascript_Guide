// person , phone , camera , car , car company,price - objects
// key (properties) values(any type) pairs ka collections-objects
const person = {
  name: `ritvik`,
  age: 22,
  phone: `vivo`,
  grade: `8%`,
  height: 165,
};

const car = {
  name: `sx4`,
  color: `black`,
};

const smartphone = {
  name: " vivo",
  price: 40000,
  camera: "18mp",
  ram: "4gb",
};

console.log(smartphone.name);
console.log(person.grade);

// spread operators

// we want
// const smartphone2 = {
//   name: " iphone",
//   price: 40000,
//   camera: "18mp",
//   ram: "4gb",
// };

// const smartphone2 = { ...smartphone, name: `Iphone` };
// console.log(smartphone2);

// Destructuring

const { name, price, ram } = smartphone;
console.log(name, price, ram);
