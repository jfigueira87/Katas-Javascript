//Katas del 29/07/2024
// KATA #01--Crea una función para felicitar el cumpleaños que pueda darte respuesta en 3 idiomas (español, ingles y aleman) y una tarta si no es ninguno

// function Felicitar(pName,pIdioma){
//     if (pIdioma==="español"){
//         console.log("Feliz cumpleaños " + pName)
//     }
//     else if (pIdioma==="ingles"){
//         console.log("Happy birthday " + pName)
//     }
//     else if (pIdioma==="aleman"){
//         console.log("Alles Gute zum Geburtstag " + pName)
//     }
//     else {
//         console.log("🎂🎂🎂🎂")
//     }
// }

// const personName= prompt("introduce tu nombre para dejarte un mensaje de feliz cumpleaños");
// const idioma=prompt("En que idioma quieres el mensaje (español, ingles o aleman)")

// Felicitar(personName,idioma);


// KATA #02--Crea una funcion que devuelva un número aleatorio entre 1 y 6

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
  
// const numberRandom= getRandomIntInclusive(1, 6);
// console.log("Después de lanzar el dado, te ha tocado el número= "+numberRandom)

//  KATA #03--Crea una función que devuelva la tabla de multiplicar completa del número que le indiquemos


// const numTable = prompt("Te voy a mostrar la table de multiplicar del número que me indiques:")

// for (i=1 ; i<=10; i++){
//     const result=numTable*i
//     console.log(numTable+" x "+i+" = "+result)
// }

//  KATA #04--Crea una función que sea un contador de las ovejas que están dormidas

// const sleepSheep = [true, true, true, false, true, true, true,true, true, false, true, false, true, false, false, 
//                     true, true, true, true, true, false, false, true, true, false]
// let cont=0;
// function contar(){
//     sleepSheep.forEach((e)=>{
//         if (e===true){
//             cont=cont+1
//         }
//     })
//     console.log("Hay "+cont+" ovejas dormidas");
// }

// contar();

// KATA #05--Crea un objeto planeta tierra, que tenga las siguientes propiedades: su distancia del sol, sus vecinos
// (especificando que planeta tiene delante y cuál detrás), una lista de su composición atmosférica, y que también tenga un método
// saludar que devuelva en consola Hola soy el planeta tierra. Más tarde añade con código la propiedad satélite y dale el valor de luna,
// también añade la propiedad planeta habitado con el valor true, y posteriormente eliminalo

// const planetaTierra = {
//     distancia: 150000000,
//     vecinoFront: 'Venus',
//     vecinoBack: 'Marte',
//     composiciónAtmos: ['nitrógeno','oxígeno','argón'],
//     saludar: function (){
//         console.log("Hola, soy el planeta tierra");
//     } 
// }

// planetaTierra.satelite='luna';
// planetaTierra.planetaHabitado='true';

// //console log para comprobar las propiedades
// console.log(planetaTierra);

// delete planetaTierra.planetaHabitado;

// KATA #06--Basándote en la especificaciones del objeto anterior crea la clase planeta y haz instancias de, 
// al menos dos planetas, más abajo te especifico las propiedades: 🪐🐱‍🚀



