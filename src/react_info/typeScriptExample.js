// const str: string = 'hello'
// console.log(str)


// const isFeching: boolean = true 
// let int: number = 43 
// int = '43'

// const numberaAraay: number[] = [1,2,3,4,5,6,7]


// let varieble = 42 
// varieble = 'new String'
// let varieble2: any = 42  //!if we use "any", we can change the type
// varieble2= 'new String'



// const user:User = {
// name: "Hayes",
// id: 0,
// };
// interface User {
// name: string;
// id: number;
// }


// function sayName (name: string ): void{ //!if we use "void" then the function returns nothing
//   console.log (name)  
// }
// sayName('Igor')




// type Login = string
// const login: Login = 'admin'
// // const login: Login = 2 


// type ID = string | number
// const id1: ID = 1234
// const id2:  ID = 'string'
// const id3: ID = true



// // !Pick<Type, Keys>
// //? Constructs a type by picking the set of properties Keys from Type.

// interface Todo {
// title: string;
// description: string;
// completed: boolean;
// }

// type TodoPreview1 = Pick<Todo, "title" | "completed">;

// const todo1: TodoPreview = {
// title: "Clean room",
// completed: false,
// };

// todo1;

// // ?^ = const todo: TodoPreview



// // !Omit<Type, Keys>
// //? Constructs a type by picking all properties from Type and then removing Keys.

// interface Todo {
// title: string;
// description: string;
// completed: boolean;
// }

// type TodoPreview = Omit<Todo, "description">;

// const todo: TodoPreview = {
// title: "Clean room",
// completed: false,
// };

// todo;
// //? ^ = const todo: TodoPreview






// //!itarface ///////////////////////////////////////

// interface Rect {
//    readonly id: string 
//    color?: string        //!  color?: - можем не добовлять color 
//    size: {
//        width: number 
//        height: number 

//    }
// }

// const rec1: Rect = {
//    id: '12345',
//    size : {
//        width: 20,
//        height: 30
//    }, 
//    color: 'white'
// }

// const rec2: Rect = {
//    id: '123452',
//    size : {
//        width: 21,
//        height: 33
//    }   
// }

// //!--------------------'extends'-------------------------

// interface ReactWith extends Rect {
//  getArrey: () => number 
// }


// const rec3: ReactWith = {
//     id: '12345string2',
//    size : {
//        width: 21,
//        height: 23
//    },
//    getArrey(): number {
//        return this.size.width * this.size.height
//    }   
// }






// //---------------------------------------------------

// interface Styles {
//    [key:string]: string
// }

// const css: Styles = {
//    border: '1px solid black ',
//    borderRadius: '5px',
//    marginTop: '10px'
// }