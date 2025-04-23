"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCustomer = new Customer_1.Customer("John", "Doe");
myCustomer.firstName = "Susan";
console.log(`Hi ${myCustomer.firstName} ${myCustomer.lastName}`);
// let myShape = new Shape(5, 10); cannot institiate an abstract class
let myCircle = new Circle_1.Circle(5, 10, 15);
// console.log(myShape.getInfo()); 
console.log(myCircle.getInfo());
let rect = new Rectangle_1.Rectangle(1, 2, 3, 5);
console.log(rect.getInfo());
console.log('--------------------');
let theShapes = [];
// theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(rect);
for (let shape of theShapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
}
