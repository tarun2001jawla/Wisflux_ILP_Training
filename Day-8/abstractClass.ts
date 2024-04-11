abstract class Vehicle {
   _speed: number;
  constructor(speed: number) {
    this._speed = speed;
  }
  get speed(): number {
    return this._speed;
  }
  set speed(speed: number) {
    this._speed = speed;
  }

  abstract brake() : void;
  abstract accelerate() : void;
}
// let car = new Vehicle();  // error : cannot create an instance of an abstract class

class Bike extends Vehicle {
  constructor(speed: number) {
    super(speed);
  }
  brake() {
    this.speed -= 10;
  }
  accelerate() {
    this.speed += 15;
  }
}

const bike = new Bike(50);
console.log("Initial Speed:", bike.speed); 

bike.accelerate();
console.log("After Acceleration:", bike.speed); 0

bike.brake();
console.log("After Braking:", bike.speed);


class SuperCar extends Vehicle {
    _model : number;
    _brand : string;
    _fuel : string;

    constructor(speed: number,model:number,brand:string,fuel:string) {
        super(speed);
        this._brand = brand;
        this._model = model;
        this._fuel = fuel;
      }
      brake() {
        this.speed -= 10;
      }
      accelerate() {
        this.speed += 50;
      }
      get model() : number {
        return this._model;
      }
      set model(model : number) {
        this._model = model;
      }
};
const superCar = new SuperCar(50,2020,"BMW","Petrol");
console.log("Initial Speed:", superCar.speed); 

superCar.accelerate();
console.log("After Acceleration:", superCar.speed); 

superCar.brake();
console.log("After Braking:", superCar.speed);

console.log("Model:", superCar.model);
superCar.model = 2021;
console.log("Model:", superCar.model);

