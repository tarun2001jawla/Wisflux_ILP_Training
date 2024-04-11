class MathUtility {
  static readonly PI: number = 3.14159;

  static calculateCircleArea(radius: number): number {
    return this.PI * radius * radius;
  }

  static calculateCircleCircumference(radius: number): number {
    return 2 * this.PI * radius;
  }
}

// Accessing static property and methods
console.log(MathUtility.PI);
console.log(MathUtility.calculateCircleArea(5));
console.log(MathUtility.calculateCircleCircumference(5));

//trying to access static property and methods using instance of class
const mathUtility = new MathUtility();

// console.log(mathUtility.PI); // ERROR
// console.log(mathUtility.calculateCircleArea(5)); // ERROR
// console.log(mathUtility.calculateCircleCircumference(5)); // ERROR
