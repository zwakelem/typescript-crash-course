"use strict";
class Customer {
    // private _firstName: string;  
    // private _lastName: string;
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustomer = new Customer("John", "Doe");
myCustomer.firstName = "Susan";
console.log(`Hi ${myCustomer.firstName} ${myCustomer.lastName}`);
