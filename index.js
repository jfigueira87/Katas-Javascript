//Katas del 29/07/2024
//Crea una función para felicitar el cumpleaños que pueda darte respuesta en 3 idiomas (español, ingles y aleman) y una tarta si no es ninguno

function Felicitar(pName,pIdioma){
    if (pIdioma==="español"){
        console.log("Feliz cumpleaños " + pName)
    }
    else if (pIdioma==="ingles"){
        console.log("Happy birthday " + pName)
    }
    else if (pIdioma==="aleman"){
        console.log("Alles Gute zum Geburtstag " + pName)
    }
    else {
        console.log("🎂🎂🎂🎂")
    }
}

const personName= prompt("introduce tu nombre para dejarte un mensaje de feliz cumpleaños");
const idioma=prompt("En que idioma quieres el mensaje (español, ingles o aleman)")

Felicitar(personName,idioma);


// Crea una funcion que devuelva un número aleatorio entre 1 y 6

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
  
// const numberRandom= getRandomIntInclusive(1, 6);
// console.log("Después de lanzar el dado, te ha tocado el número= "+numberRandom)

//Crea una función que devuelva la tabla de multiplicar completa del número que le indiquemos


// const numTable = prompt("Te voy a mostrar la table de multiplicar del número que me indiques:")

// for (i=1 ; i<=10; i++){
//     const result=numTable*i
//     console.log(numTable+" x "+i+" = "+result)
// }

