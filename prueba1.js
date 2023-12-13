let arrayObj = [ { nombre: 'Lean', edad: 27 },  { nombre: 'Eze', edad: 49} ]

//console.log(Object.entries(arrayObj.nombre))

console.log(arrayObj[0].nombre)

let valor = arrayObj[0].nombre
console.log(valor)

const persona = new Object()
persona.nombre = arrayObj[0].nombre

console.log(persona)