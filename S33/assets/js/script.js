//Reto 1

console.log("SELECCIONAR POR ID")

let mainTitle = document.getElementById("main-title");
console.log(mainTitle);

console.log(mainTitle.innerText);

//Cambiamos el contenido de un Id desde JS
mainTitle.innerText = "TITULO CAMBIADO";
console.log(mainTitle.innerText);

//Reto 2 

console.log("SELECCIONAR POR CLASE");

let mainTexts = document.getElementsByClassName("main-text");
console.log(mainTexts);

console.log(mainTexts[0].innerText);
console.log(mainTexts[2].innerText);

//Cambiando el contenido de uno de los elementos
mainTexts[1].innerText ="Lorem";
mainTexts[2].innerText ="Texto 3";

//Reto 3 SELECCIONA TODOS DE HTML

let titles = document.getElementsByTagName("H2");
console.log(titles);
console.log(titles[2].innerText);

