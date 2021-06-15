// Object property shorthand
const name = "Andrew";
const userAge = 27;
const user = {
  name,
  age: userAge,
  location: "Philadelphia",
};

console.log(user);

// Object destructuring
const product = {
  label: "Red Notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};
// const { label: lb, price, stock, salePrice = 3 } = product;
// console.log(lb, price, stock, salePrice);

const transaction = (type, { label, price = 0 } = {}) => {
  console.log(type, label, price);
};

transaction("order", product);
transaction("order");
