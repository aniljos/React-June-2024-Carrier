class Car {
    get keycode() {
        return this._keycode;
    }
    set keycode(value) {
        this._keycode = value;
    }
    // one implementation of the interface
    constructor(name, speed, gears) {
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }
    applyBreak(value) {
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
