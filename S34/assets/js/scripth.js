//METODOS DE ARRAY
//nombreArray.metodo()

//Reto 1

let fruits = ["manzana", "naranja", "pera", "mango",];
console.log(fruits);

console.log("push");
//push(x) -> Agrega el elemento x al FINAL del array
fruits.push("fresa");
console.log(fruits);


console.log("pop");
//pop() -> Elimina el ULTIMO elemento del array y lo retorna.
fruits.pop();
console.log(fruits);

//Reto 2

console.log("unshift");
//unshift(x) -> Agrega el elemento x al INICIO del array.
fruits.unshift("uva");
console.log(fruits);


console.log("shift");
//shift() -> Elimina el PRIMER elemento del array y lo retorna.
let deleteItem = fruits.shift();
console.log(`Elemento eliminado con shift: ${deleteItem}`);
console.log(fruits);

//Reto 3

console.log("includes");
// includes(x) -> Preguntar si x es un elemento del array. Retorna a un booleano
console.log(fruits.includes("naranja")); //true
console.log(fruits.includes("kiwi")); //false

console.log("indexOf");
// indexOf(x) -> Retorna el indice del elemento x en el arreglo. Si el arreglo no contiene el elemento, retorna -1
console.log(fruits.indexOf("naranja")); //1
console.log(fruits.indexOf("kiwi")); //-1

//Reto 4

console.log("join");
// join()I-> Toma todos los elementos del array y los junta en un string. Por defecto usa el caracter coma (,) pero opcionalmente  podemos indicar el caracter que queremos usar.
console.log(fruits.join());
console.log(fruits.join("."));
console.log(fruits.join(" "));
console.log(fruits.join("<3"));
console.log(fruits.join("-"));
console.log(fruits.join("_"));
console.log(fruits.join("()"));
console.log(fruits.join("°-°"));
console.log(fruits.join("#"));
console.log(fruits.join("*"));
console.log(fruits.join("+"));
console.log(fruits.join("~"));
console.log(fruits.join("°_°"));

console.log("===========");
fruits

//Reto 5 

console.log("slice")
// slice(inicio, fin) -> Retorno una COPIA del arreglos (NO MODIFICA EL ARREGLO ORIGINAL). Corta los elementos desde el indice "inicio". Opcionalmente se le puuede indicar el indice de "fin", este indice es exclusivo. Si no se le indica el fin, por defecto corta hasta el final.

// Corta el arreglo desde el indice 2 hasta el final
console.log(fruits.slice(2));

// Corta el arreglos desde el indice 2 hasta el indice 4, sin tomar este ultimo
console.log(fruits.slice(2, 4));

//Reto 6

console.log("splice");
// splice

//Corta hasta el indice 2 exclusivo 
//fruits.splice(2)
//console.log(fruits);

//Desde el indice 2 elimina dos elementos
//fruits.splice(2, 2);
//console.log(fruits);

//
fruits.splice(2,2, "sandia", "kiwi", "arándano");
console.log(fruits);

