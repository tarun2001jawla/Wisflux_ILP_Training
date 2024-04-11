class Car {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    get Details(): string {
      return `Car: ${this.year} ${this.make} ${this.model}`;
    }
  }
  
  class Toyota extends Car {
    private hasSunroof: boolean;
    private isFourWheelDrive: boolean;   
    constructor(make: string, model: string, year: number, hasSunroof: boolean, isFourWheelDrive: boolean) {
      super(make, model, year);
      this.hasSunroof = hasSunroof;
      this.isFourWheelDrive = isFourWheelDrive; 
    }
    getSunroof(): boolean {
      return this.hasSunroof;
    }
  
    getFourWheelDrive(): boolean {
      return this.isFourWheelDrive;
    }
  
    get Details() : string {
      return `Toyota: ${this.year} ${this.make} ${this.model} ${this.hasSunroof} ${this.isFourWheelDrive}`;
  
    }
     
  }
  
  const myCar = new Car("Toyota", "Camry", 2015);
  console.log(myCar.getMake());
  console.log(myCar.getModel());
  console.log(myCar.getYear());
  console.log(myCar.Details);
  
  
  const myToyota = new Toyota("Toyota", "Camry", 2015, true, true);
  console.log(myToyota.Details);
  console.log(myToyota.getFourWheelDrive());
  console.log(myToyota.getSunroof());
  
  
  
  
  
  