let name = "tefa"

if (name.length < 5) {
    console.log("Que nombre tan cortito");
}

let age = 15;

if (age >= 18) {
    console.log("Esta persona es mayor de edad");
} else {
    console.log("Esta persona es menor de edad");
}

let numero1 = 50;
let numero2 = 10;

if (numero1 > numero2) {
    console.log("El primer numero es el mayor");
} else {
    console.log("El segundo numero es el menor");
}

//RETO 3 Crea un programa que muestre el nombre de un dia de la semana en base a un numero ingresado. 1. Domingo, 2.Lunes

let seman = 1;

switch (seman) {
    case 1:
        console.log("Domingo");
        break;
        
    case 2:
        console.log("Lunes");
        break;

     case 3:
        console.log("Martes");
        break;
    
     case 4:
        console.log("Miercoles");
        break;
    
    case 5:
        console.log("Jueves");
        break;

    case 6:
        console.log("Viernes");
        break;

    case 7:
        console.log("Sabado");
        break;

    default:
        console.log("Valor no Valido");
}
