#!/usr/bin/node
const transformKeys = require('../objectKeyTransformation').transformKeys;
const inputObject = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

const transformFunction = (key) => key.toUpperCase();
const transformedObject = transformKeys(inputObject, transformFunction);

console.log(transformedObject);
