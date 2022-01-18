// primitive - value
// obj - link

// class User {
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }
// }
  
// class Admin extends User {
//     usersId: number[];

//     constructor(name: string, usersId: number[]) {
//         super(name);
//         this.usersId = usersId;
//     }
// }

// const admin: Admin = new Admin('Rita', [1, 2, 3, 4]); // link - type - obj

// const user: User = <User>admin;
// const user: User = admin as User;

 // мы преобразовываем не класс, а сссылку на него;