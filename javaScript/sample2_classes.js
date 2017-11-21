function person(fname, lname, age){
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
/*

    not a good practice, please use the prototype as shown below.

    this.walk = function(){
        console.log("walking");
    }
    this.sleep = function(){
        console.log("sleeping");
    }
*/
};




/*
var walk = function(){
    console.log("walking");
};

var sleep = function(){
    console.log("sleeping");
};
*/

person.prototype.walk = function(){
    console.log(this.firstName + " is walking.");
};

person.prototype.sleep = function(){
    console.log(this.firstName + " is sleeping.");
};

var p1 = new person("nepal reddy", "chityala", 25);

//console.log(p1);
//console.log(p1.firstName);
//console.log(p1.walk());

//p1.walk();
//p1.sleep();

function employee(fname, lname, age, empID, emp_salary){
    
    var salary = emp_salary;    // this is a private variable, so we cannot access it directly. we have to create a member method.
    person.call(this, fname, lname, age);
    this.empID = empID;
    this.getSalary = function(){
        return salary;
    }
};

    employee.prototype = person.prototype;  
        /*  to access the new methods added to the person object using the prototype by the employee object we have to write this line. if we don't do this walk and sleep methods will not be accessible by the employee object.
            And most importnantly we have to do the above prototype equals before we create an object.
            It's not a correct approach. It will just refer the properties, not copying.

        */
employee.prototype.getEmpID = function(){
        // console.log(this.empID);
        console.log("Inside employee.");
        return this.empID;
    };

    employee.prototype.walk = function(){
        console.log(this.lastName + " is walking. Inside emp block.");
    };
var emp1 = new employee("sahasra","reddy",24,99,1000);


//console.log(emp1);
//console.log(emp1.firstName);    //access with the variable name used in the object from where we are inheriting the properties.
//console.log(emp1.salary);   // we cannot access the private variables.
console.log(emp1.getSalary());
//console.log(emp1.empID);
emp1.sleep();
emp1.walk();
var empID = emp1.getEmpID();    // we cannot print the return statement directly into the console.log, so we use variable to store that and print that.
console.log(empID);










 

/*

// Encapsulation :  Binding up of data and functions into one single unit is called as the encapsulation.
polymorphism: 
    function overriding
    function overloading
*/