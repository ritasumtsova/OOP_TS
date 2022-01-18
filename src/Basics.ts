// class User {
//     __name: string;
//     __age: number;
//     isAdmin!: boolean;

//     // name: string = 'User';
//     // age: number = 18;

//     // constructor(name: string, age: number) {  // TYPE ANNOTATION
//     //     this.__name = name;
//     //     this.__age = age;
//     // }

//     // constructor(name = 'User', age = 18) { // DEFAULT VALUES
//     //     this.__name = name;
//     //     this.__age = age;
//     // }

//     get name (): string {
//         return this.__name;
//     }

//     set name (name: string) {
//         this.__name = name;
//     }

//     set age (value: string | number) {
//         this.__age = Number(value);
//     }

//     sayHi (): void {
//         console.log(`Hi ${this.name}!`);
//     }
// }
//const rita = new User('Rita', 28);
//console.log(rita1); // User {name: 'Rita', age: 28}

//const rita2 = new User(28);
//console.log(rita2); // User {name: 'Rita', age: 28}