import { Customer } from "./Customer";


let myCustomer = new Customer("John", "Doe")
myCustomer.firstName = "Susan";

console.log(`Hi ${myCustomer.firstName} ${myCustomer.lastName}`);

