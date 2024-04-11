class Employee{
    readonly emp_id : number;
    emp_name : string;
    emp_salary : number;
    emp_dept : string;

    constructor( emp_id : number,emp_name : string,emp_salary : number,emp_dept : string){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_salary = emp_salary;
        this.emp_dept = emp_dept;

    }

    // setId(){
    //     this.emp_id = 100;  //readonly property cannot be changed outside a constructor 
    // }

    getEmpDetails():void{
      console.log(`Employee Name is ${this.emp_name} with id being ${this.emp_id} working in department ${this.emp_dept} with a salary of ${this.emp_salary}`)
    }
}

let emp1 = new Employee(101,"Abhishek",10000,"IT");
emp1.getEmpDetails();
let emp2 = new Employee(102,"Atul",20000,"HR");
emp2.getEmpDetails();


