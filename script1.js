// SECTION 1: Objects and OOPS Thinking (Foundation)
// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

// 	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.

let user1 = {
    name: "Mannat Gupta",
    email: "mannatgupta146@gmail.com",
    login: function(){
        console.log("logged in")
    }
}

let user2 = {
    name: "Mannat Gupta",
    email: "mannatgupta146@gmail.com",
    login: function(){
        console.log("logged in")
    }
}

let user3 = {
    name: "Mannat Gupta",
    email: "mannatgupta146@gmail.com",
    login: function(){
        console.log("logged in")
    }
}

let user4 = {
    name: "Mannat Gupta",
    email: "mannatgupta146@gmail.com",
    login: function(){
        console.log("logged in")
    }
}

let user5 = {
    name: "Mannat Gupta",
    email: "mannatgupta146@gmail.com",
    login: function(){
        console.log("logged in")
    }
}

// 	2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    login(){
        console.log("logged in")
    }
}

U1 = new User("Aarav Sharma", "aarav.sharma01@gmail.com");
U2 = new User("Mannat Gupta", "mannat.gupta16@gmail.com");
U3 = new User("Ishita Verma", "ishita.verma22@gmail.com");
U4 = new User("Rohan Mehta", "rohan.mehta09@gmail.com");
U5 = new User("Saanvi Kapoor", "saanvi.kapoor11@gmail.com");


// 	3.	Create a product object that stores name and price and has a method which returns the final price after discount.

let product = {
    name : "mobile phone",
    price: 34000,
    finalPrice: function(){
        return this.price - 200;
    }
}

console.log(product.finalPrice());

// ⸻

// SECTION 2: Classes and Objects

// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed

class Car{
    constructor(brand,speed){
        this.brand = brand;
        this.speed = speed;
    }

    drive(){
        console.log(`${this.brand} speed is ${this.speed}`)
    }
}

C1 = new Car("bmw","150")
C1.drive()

// 	5.	Create two different car objects from the same class and verify that their data is different.

C2 = new Car("tata","120")
C2.drive()

// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

/*
Problems in a large project:

a. Repetitive code → same properties and methods copied again and again.
b. Hard to update → changing one method means updating it in every object.
c. More chances of errors → inconsistent code across objects.
d. No structure → messy and difficult to manage as objects increase.
*/

// ⸻

// SECTION 3: Constructor and this keyword
// The goal is to clearly understand how this works and when it changes.

// 	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.

class Student{
    constructor(name, rollNo){
        this.name = name;
        this.rollNo = rollNo;
    }

    introduce(){
        console.log(`${this.name} roll no is ${this.rollNo}`)
    }
}

S1 = new Student("Mannat", 15281)
S1.introduce()

// 	8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.
class Student1{
    constructor(name, rollNo){
        name = name;
        rollNo = rollNo;

        /*
        These lines do not store values in the object.
        They only assign the parameter to itself, which has no effect.
        
        Because the object never gets properties name and rollNo,
        this.name and this.rollNo remain undefined.
        */
    }

    introduce(){
        console.log(`${this.name} roll no is ${this.rollNo}`)
    }
}

S1 = new Student1("Mannt", 15281)
S1.introduce()

// undefined roll no is undefined

// 	9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.

let obj = {
    normal: function(){
        console.log(this)
    },
    arrow: ()=>{
        console.log(this)
    }
}

obj.normal()
obj.arrow()

// ⸻

// SECTION 4: Constructor Functions and Prototypes
// The purpose here is to understand how prototypes help share behavior efficiently.

// 	10.	Create a User constructor function (do not use class syntax).
// 	11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype

function u1(){
    this.login = function () {
        console.log("hello");
    };  
}

u11 = new u1()
u11.login()

function u2(){}

u2.prototype.login = function () {
    console.log("hello");
};
    

u22 = new u2()
u22.login()


// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

function Compare(name) {
    this.name = name;
    this.login = function () {
        console.log("log in");
    };
}

Compare.prototype.logout = function () {
    console.log("log out");
};

let comp1 = new Compare("aa");
let comp2 = new Compare("bb");

console.log(comp1.login === comp2.login); 
console.log(comp1.logout === comp2.logout); 

// ⸻

// SECTION 5: call, apply, bind
// The goal is to understand how this can be manually controlled.

// 	13.	Create a function that prints this.name.
// 	14.	Create an object that contains a name property.

// Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it

function Try(a,b,c){
    console.log(this.name, a, b, c)
}

let TryObj = {
    name: "Mannat"
}

Try.call(TryObj, 1, 2, 3)
Try.apply(TryObj, [1, 2, 3])

let func = Try.bind(TryObj, 1, 2, 3)
func()

// 	15.	Borrow a method from one object and run it for another object using call.

let ob1 = {
    name: "Mannat",
    greet: function () {
        console.log("Hello, " + this.name);
    }
};

let ob2 = {
    name: "Gupta"
};

ob1.greet.call(ob2);