/*const obj = {
    name: "Alice",
    greet: () => {
        console.log(`Hello, ${this.name}`); // Bug: Arrow function doesn't bind `this`
    }
};
*/
//corrected code using regular funcion 
const obj = {
    name: "Alice",
    greet() {
        console.log(`Hello, ${this.name}`); // Bug: Arrow function doesn't bind `this`
    }
};

obj.greet();

