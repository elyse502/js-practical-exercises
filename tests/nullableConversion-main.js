#!/usr/bin/node
const convertNullableValues = require('../nullableConversion').convertNullableValues;

const input = {
  name: undefined,
  age: null,
  email: "test@example.com",
  score: null,
  country: undefined
};

console.log(convertNullableValues(input));
