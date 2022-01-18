// class Figure {
//     protected name: string;
//     protected angles: number;
//     protected static color: string = '#000'; // Figure.color

//     constructor(name : string, angles: number) {
//         name = this.name,
//         angles = this.angles;
//     }

//     public getInfo() : string {
//         return `Figure : ${this.name}, angles: ${this.angles}, color : ${Figure.color}`;
//     }
// }

// class Square extends Figure {
//     private width: number;
//     private height: number;

//     constructor(name, angles, width, height) {
//         super(name, angles)
//         this.width = width;
//         this.height = height;
//     }

//     public getInfo() : string {
//         // const parentGetInfo = super.getInfo(); // `Figure : ${this.name}, angles: ${this.angles}, color : ${Figure.color}`;
//         // return `${parentGetInfo} square: ${this.getSquareOfSquare()}`;
//         return `The square of ${this.name} is ${this.getSquareOfSquare()}`;
//     }

//     public getSquareOfSquare (): number {
//         return this.width*this.height;
//     }

//     // public getColor(): void {
//     //     console.log(Figure.color);
//     // }
// }