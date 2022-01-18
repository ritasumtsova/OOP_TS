// abstract class User {
//     protected name: string; //protected abstract name: string = 'user';
//     protected age: number;

//     public constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     abstract sayHi(): void;  // Abstract method
// }

// //const rita = new User('Rita', 28);  // Cannot create an instance of an abstract class


// class Rita extends User {

//     public constructor(name: string, age: number) {
//         super(name, age);
//     }

//     public sayHi() {
//         console.log(`Hi ${this.name}`);
//     }
// }

// const rita = new Rita('Rita', 28);  
// rita.sayHi();