interface Vehicle{

    name: string;
    speed: number;
    gears?: number;

    applyBreak(value: number): void;
}

class Car implements Vehicle{

    name: string;
    speed: number;
    gears?: number;

    private _keycode: string;

    public get keycode(): string {
        return this._keycode;
    }

    public set keycode(value: string) {
        this._keycode = value;
    }

    // multiple declarations
    constructor();
    constructor(name: string);
    constructor(name: string, speed: number);
    constructor(name: string, speed: number, gears: number);


    // one implementation of the interface
    constructor(name?: string, speed?: number, gears?: number){
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }

    applyBreak(value: number): void {
        
        this.speed -= value;
    }

}

let car1 = new Car(); //compiler => constructor() in the declarios; // runtime => implementation


let car2 = new Car("BMW", 200);
let car3 = new Car("Audi", 100, 5);
//let car4 = new Car("BMW");

console.log("car 3", car3);
car3.applyBreak(50);
console.log("car 3", car3);

car3.keycode = "1234";
console.log("car 3 keycode", car3.keycode);


