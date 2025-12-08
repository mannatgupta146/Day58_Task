// SECTION 1: OOPS Thinking with Objects
// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
// 	2.	Add one more method to the same object that increases the price by 10 percent.

let laptop = {
	brand: "HP",
	price: 50000,
	start(){
		console.log("Laptop started");
	},
	increase(){
		console.log(this.price * 110/100)
	}
}

laptop.increase()

// 	3.	Now imagine you need 10 laptops with same structure but different data.
// Write down (in words or code) what problems you will face if you keep using plain objects.

class Laptop{
	constructor(brand,price){
		this.brand = brand
		this.price = price
	}

	start(){
		console.log("Laptop started");
	}

	increase(){
		console.log(this.price * 110/100)
	}
}

L1 = new Laptop("hp", 40000)
L2 = new Laptop("dell", 50000)

/*
Problems when using plain objects for 10 laptops:

a. Repetitive code → You must rewrite brand, price, start(), increase() for every laptop.
b. Hard to maintain → If one method changes, you must update it in all 10 objects manually.
c. More chances of errors → Copy-paste mistakes will happen easily.
d. No structure → Objects become messy, unorganized, and difficult to manage as project grows.
*/

// ⸻

// SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name
// salary
// Add a method showDetails that prints name and salary.
// 	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.

class Employee{
	constructor(name, salary){
		this.name = name
		this.salary = salary
	}
	showDetails(){
		console.log(`${this.name} salary is ${this.salary}`)
	}
}

E1 = new Employee("a",40000)
E1.showDetails()

E2 = new Employee("b",50000)
E2.showDetails()

E3 = new Employee("c",60000)
E3.showDetails()

// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?

/*
Class is better because it avoids repeating the same structure again and again. 
Instead of writing the same properties and methods for every object, we create a 
single blueprint and reuse it. This makes the code cleaner, reduces mistakes, and 
makes it easier to update or modify behavior in one place.
*/

// ⸻

// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.

class BankAccount{
	constructor(accountHolderName, balance){
		this.accountHolderName = accountHolderName
		this.balance = balance
	}
	deposit(amount){
		this.balance = this.balance + amount
		console.log(this.balance)
	}
}

B1 = new BankAccount('abc', 1000)
B1.deposit(200)

// Observe and explain why the second account is not affected.

/*
Each BankAccount object has its own separate balance stored inside it. 
When we deposit money into B1, only B1's balance changes. 
B2 is a completely different object with its own balance property, 
so it is not affected by operations on B1.
*/

// ⸻

// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.
// 	12.	Call the method normally and observe the output.
// 	13.	Store the method in a separate variable and call it.
// 	14.	Modify the code so that this works correctly again.

let profile = {
	username: "xyz",
	printName: function(){
		console.log(this.username);
	}
}

profile.printName()

// let p = profile.printName()
// p()

let p2 = profile.printName.bind(profile);
p2();    

// Observe what happens to this and explain why.

/*
When the method is called normally, this refers to the profile object. 
But when the method is stored in a separate variable, it loses its object 
context and this becomes undefined. Using bind(profile) fixes this by 
forcing the function to always use profile as its this value.
*/

// ⸻

// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.

function Vehicle(type, wheels) {
    this.type = type;
    this.wheels = wheels;

    // this.describe = function () {
    //     console.log(`This ${this.type} type vehicle has ${this.wheels} wheels`);
    // };
}

Vehicle.prototype.describe = function () {
    console.log(`This ${this.type} type vehicle has ${this.wheels} wheels`);
};

V1 = new Vehicle("Bike", 2)
V2 = new Vehicle("Car", 4)
V3 = new Vehicle("Truck", 6)

V1.describe();
V2.describe();
V3.describe();

// 	18.	Explain why the prototype approach is preferred.

/*
When the method is inside the constructor, every object gets its own copy, 
wasting memory. Using the prototype creates only one shared method for all 
objects, making the code more efficient and easier to maintain.
*/

// ⸻

// SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
// 	20.	Create two different objects with brand Values.
// 	21.	Use call to execute showBrand for both objects.
// 	22.	Explain what problem call is solving here.

// ⸻

// SECTION 7: apply Method Practice
// 	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
// 	24.	Create an object with a name property.
// 	25.	Use apply to call introduce using the object and an array of arguments.
// 	26.	Explain in simple words how apply differs from call.

// ⸻

// SECTION 8: bind Method Practice
// 	27.	Create a function greet that prints “Hello” followed by this.name.
// 	28.	Bind this function to an object and store the returned function in a variable.
// 	29.	Call the bound function later and observe the output.
// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.