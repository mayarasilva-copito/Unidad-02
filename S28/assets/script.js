console.log("Hola Mundo");

function ejemplo() {
    console.log("La funcion ha sido llamada");
    //Codigo de funcion
    console.log("Inicio de los mensajes");
    console.log("Hola");
    console.log(true);
    console.log(8);
    console.log("Tengo Hambre");
    console.log("Fin de los mensajes")
}

//Lamar a la funcion
ejemplo();
ejemplo();

//let name = prompt("Ingresa tu nombre");
//console.log(`El nombre que ingresaste fue: ${name}`);

//let hello = prompt("Ingresa tu edad");
//console.log(`La edad que tienes: ${hello}`);

/*function Numbers(a, b) {
    let result = a + b;

    console.log(`${a} + ${b} = ${result}`);

}
 let num1 = parseInt(prompt("Ingresa el primer numero"));
 let num2 = parseInt(prompt("Ingresa el segundo numero"));

 //Llama a la funcion
 Numbers(num1, num2);
*/

/*function numbers2(a, b) {
    //console.log("La funcion a sido llamada")
    let result = a + b;
    let message = `${a} + ${b} = ${result}`;

    return message;
}
let num3 = parseInt(prompt("Ingresa el primer numero"));
let num4 = parseInt(prompt("Ingresa el segundo numero"));

 // Almacenando el valor de retorno
 let result = numbers2(num3, num4);
 console.log(result);

 //o lo puedes usar directamente
 console.log(numbers2());
 */


let multiply = (a, b) => {
    let result =  a*b;
    let message = `Result: ${result}`;

    return message;
}

let num1 = parseInt(prompt("Ingresa el primer numero"));
let num2 = parseInt(prompt("Ingresa el segundo numero"));
let result = multiply(num1, num2);

console.log(result);