// Object property shorthand

const name = "asdf";
const age = 23;

const user = {
  name: name,
  //   shorthand when the name of the variable is the same:
  age,
  location: "2e",
};

console.log(user);

// object destructuring:

const product = {
  lavel: "wer",
  price: 2,
  stock: 32,
};

// old way:
// const price = product.price;

// new way:
// correct the lavel name:
const { lavel: label, price } = product;
console.log(label);

// set a default:
const { rating = 5 } = product;
console.log(rating);

const transaction = (type, { lavel = "missing label", price = 0 } = {}) => {
  console.log(type, label, price);
};

transaction("order", product);
