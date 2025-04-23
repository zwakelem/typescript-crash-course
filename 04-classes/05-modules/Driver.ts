import { Customer } from "./Customer";
import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myCustomer = new Customer("John", "Doe")
myCustomer.firstName = "Susan";

console.log(`Hi ${myCustomer.firstName} ${myCustomer.lastName}`);

// let myShape = new Shape(5, 10); cannot institiate an abstract class
let myCircle = new Circle(5, 10, 15);
// console.log(myShape.getInfo()); 
console.log(myCircle.getInfo());

let rect = new Rectangle(1, 2, 3, 5);
console.log(rect.getInfo());

console.log('--------------------');

let theShapes: Shape[] = [];
// theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(rect);

for(let shape of theShapes) {
    console.log(shape.getInfo());
    console.log(shape.calculateArea());
}
