"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
let myCustomer = new Customer_1.Customer("John", "Doe");
myCustomer.firstName = "Susan";
console.log(`Hi ${myCustomer.firstName} ${myCustomer.lastName}`);
