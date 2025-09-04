console.log("Hola Mundo");

//Reto 1 

class Person {
    #cell ;
    constructor(firstName, lastName, age, dni, cell) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.dni = dni;
        this.#cell = cell;
    }
    sayHello() {
    console.log("Hola a todos, saludo desde el metodo de la clase Person.")
}
    introduce() {
    console.log(`Hola, me llamo ${this.firstName} ${this.lastName} y tengo ${this.age} años, mi dni es ${this.dni}`);
}
cell(){
    this.#cell;
}
}

let person1 = new Person("Saul", "Sanchez", 23, 71235690, "912345678");

//console.log(person1);

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.dni);
console.log(person1.cell)

console.log("METODOS");

person1.sayHello();
console.log(person1.introduce());

console.log(person1.cell());

class chef1 extends Person {
    constructor(
        firstName, 
        lastName, 
        age, 
        dni, 
        cell,
        restaurant

    ) {
    super(firstName, lastName, age, dni, cell);
    this.restaurant = restaurant;
}
}

console.log("Polimorfismo")
