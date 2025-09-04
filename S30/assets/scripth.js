console.log("Hola Mundo")

//Reto 1

let me = {
    nombre: "Mayara",
    edad: 17,
    genero: "femenino",
    cellphone: "987654321",
    dni: "71146019",
}

console.log(me.nombre);
console.log(me.edad);
console.log(me.genero);
console.log(me.cellphone);
console.log(me.dni);

//Reto2

me.hobbies = ["Estar con mi gato", "Ver series y videos de youtube", "Dibujar a lapiz"]

me.cellphone = "918273645"

console.log(me);

//Esta es la forma correcta de solo copiar los datos de un objeto a otro sin que se mantengan vinculados

let me2 = {...me}; 

me2.nombre = "Marely";
me2.edad = 18;
console.log("ME2");
console.log(me2);

console.log("ME2");
console.log(me2);

//PRACTICA

let heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

//Reto 3

console.log(heroes.members[1].name);
console.log(heroes.members[1].powers[2]);
console.log(heroes.members[2].powers[4]);

