import { Shape } from "./Shape";

export class Rectangle extends Shape {
    

    constructor(theX: number, theY: number, private _width: number, private _length: number) {
        super(theX, theY);
    }

    set width(value: number) {
        this._width = value;
    }

    get width() {
        return this._width;
    }

    set length(value: number) {
        this._length = value;
    }

    get length() {
        return this._length;
    }

    getInfo(): string {
        return super.getInfo() + ` width=${this._width}, length=${this._length}`;
    }

    calculateArea(): number {
        return this._width * this._length;
    }
}