// class User {

//     public name: string; // default modificator
//     protected age: number;
//     private pass: number;

//     public constructor(name: string, age: number, pass: number) {
//         this.name = name;
//         this.age = age;
//         this.pass = pass;
//     }
// }

// class User { // Minimization of Class properties
//     constructor(
//         public name: string,
//         protected age: number,
//         private pass: number
//     ) {}
// }

// const rita = new User('Rita', 28, 1234);

// rita.name;	    // "Rita"
// rita.name = 'Kira';
// rita.pass;  // Property 'pass' is private and only accessible within class 'User'
// rita.age;	// Prop 'age' is protected and only accessible within class 'User' and its subclasses