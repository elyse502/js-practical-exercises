#!/usr/bin/node
const sortProducts = require('../sortProducts.js').sortProducts;
const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 199 },
  { name: "Keyboard", price: 49 },
];

console.log(sortProducts(products));
