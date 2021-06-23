//Comentario
  /*
  Comentario de bloque
  */

// Variables
const a = "hola"
let nombre = "Juan"
var apellido = "Jaramillo"

// Tipos de datos
const string = "esto es un string"
const number = 123
const number_2 = 1.3
var persona = {
  nombre: "Juan",
  apellido: "Jaramillo"
}
const male = false
const saludar = () => {
  
}

const despedir = function () {
  
}
//Funciones
function viajar () {
  console.log("Hola mundo")
}

const saludar_2 = (nombre, apellido) => {
  console.log(nombre + apellido)
}

viajar()
saludar_2("Juan", "Jaramillo")

// Coerción
// Cambio de tipos de datos
let suma = 4 + "7" // concatencación
typeof suma
let multiplicación = 4*"7"
typeof multiplicación
2 + true // true = 1 false = 0
2 + false

const edad = "25"
const edad_number = Number(edad)
typeof edad_number
const cedula = 1722498284
const cedula_string = String(cedula)
typeof cedula_string

// Truthy and Falsy
Boolean(1)
Boolean(0)
let pais
pais = "Ecuador"
typeof pais
Boolean(pais)
Boolean("")
Boolean(["a"])
Boolean({nombre: "juan"})
Boolean(() => {})

//Operadores lógicos
"juan" === "juan"
1 === "1"
2 < 5
5 <= 6
"juan" !== "maria"

// If
let provincia = "sdfds"
if (provincia) {
  console.log("bloque verdadero")
} else {
  console.log("bloque falso")
}

//Arrays
let frutas = ["manzana", "pera", "sandia"]
frutas.push("durazno")
frutas.pop()
frutas[2]

//Recorrer un array
frutas.map((fruta, indice) => {
  console.log(fruta)
  console.log(indice)
  if (fruta === "sandia") {
    return fruta
  } else {
    return "pera"
  }
})

frutas.forEach((fruta, indice) => {
  console.log(fruta)
  console.log(indice)
})

//Objects
const people = {
  nombre: "Juan",
  saludar: () => {
    return ("Hola")
  }
}

class Persona {
  _nombre
  apellido
  constructor (nombre, apellido) {
    this._nombre = nombre
    this.apellido = apellido
  }
  saludar () {
    return `Hola, mi nombre es: ${_nombre}`
  }
}

const alejandro = new Persona("Alejandro", "Llanganate")
alejandro
