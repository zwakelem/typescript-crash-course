export class Customer {
    // private _firstName: string;  
    // private _lastName: string;

    constructor(private _firstName: string, private _lastName: string) {}

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

}

