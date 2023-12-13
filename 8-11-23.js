// LISTA DE CLIENTES DE BANCO

let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ]

// FUNCIÓN PARA CONSULTAR LOS DATOS DE UN CLIENTE

let consultarClienteFn = function (titular) {

    for (let i = 0; i < this.clientes.length; i++) {
  
    if (this.clientes[i].titularCuenta.toLowerCase() === titular.toLowerCase()) {
  
        return this.clientes[i] 
      } 
    } return 'No se encuentra en la base'
  }

// FUNCIÓN QUE DEVUELVE EL SALDO LUEGO DE DEPOSITAR DINERO

let depositoFn = function (titular, dinero) {

    for (let i = 0; i < this.clientes.length; i++) {
      
      if (this.clientes[i].titularCuenta.toLocaleLowerCase() === titular.toLocaleLowerCase()) {
        this.clientes[i].saldoEnPesos += dinero

        return `Depósito realizado, nuevo saldo es: ${this.clientes[i].saldoEnPesos}`
      }  
    } return 'No se encuentra en la base'
  
  }

// FUNCIÓN QUE MUESTRA SALDO LUEGO DE EXTRACCIÓN DE DINERO

let extraccionFn = function (titular, dinero) {

    for (let i = 0; i < this.clientes.length; i++) {
  
      if (this.clientes[i].titularCuenta.toLocaleLowerCase() === titular.toLocaleLowerCase()) {
  
        this.clientes[i].saldoEnPesos -= dinero 
        if (this.clientes[i].saldoEnPesos >= 0) {
  
          return `Extracción realizada correctamente, su nuevo\
saldo es: ${this.clientes[i].saldoEnPesos}`
  
        } else {
          return 'Fondos insuficientes'
  
        }   
      }
    } return 'No se encuentra en la base'
  }


// OBJETO LITERAL

let banco = {

  clientes : arrayCuentas,
  consultarCliente : consultarClienteFn,
  deposito : depositoFn,
  extraccion : extraccionFn
}

console.log(banco.consultarCliente("JACKI Shurmer"))
console.log(banco.deposito("Ansel ARDley", 100))
console.log(banco.extraccion("Ansel ARDley", 100))

console.log('-----------------------')
/* otra opción para la funciones de arriba MIRAR INTEGRACION 1*/
/*
let deposito = function (titular, cantidad) {

  let cliente = this.consultarCliente(titular)
  clientes.saldoEnPesos += cantidad
  return `Deposito realizado, su nuevo saldo es ${clientes.saldoEnPesos}`

}*/

//SIGUEN EJERCICIOS

/**Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
 parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
 parámetro la propiedad que fue pasada como string.*/

let arrayObj = [ { nombre: 'Lean', edad: 27 },  { nombre: 'Eze', edad: 49} ]


 const propiedadUnica = (array, propiedad) => {

  let newArrayObj = []
  let obj = {}
    for (let i = 0; i < array.length; i++) {

      obj = {}
      obj[propiedad] = array[i][propiedad]
      newArrayObj.push(obj)

    } return newArrayObj
  } 

let nuevoArreglo = propiedadUnica(arrayObj, 'edad')
console.log(nuevoArreglo)


console.log('----------------------------')

/**Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
 ● Nombre
 ● Número de legajo
 ● Lista de notas
 Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
 nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
 todos los métodos y propiedades que puedan hacer falta para que el programa funcione
 correctamente de la manera solicitada. */


let arrayEstudiantes = [
  {
    nombre: 'Juan',
    legajo: 23,
    notas: [4, 6, 4, 4, 4, 2, 3, 4, 6, 6]
  },
  {
    nombre: 'Ana',
    legajo: 12,
    notas: [6, 7, 9, 8, 10, 4, 3, 7, 8, 7]
  },
  {
    nombre: 'Pepe',
    legajo: 7,
    notas: [2, 5, 6, 7, 7, 4, 5, 7, 8, 8]
  },
  {
    nombre: 'Estela',
    legajo: 14,
    notas: [0, 8, 9, 9, 8, 4, 5, 8, 8, 7]
  },
  {
    nombre: 'Carlos',
    legajo: 11,
    notas: [5, 5, 8, 9, 9, 6, 3, 5, 9, 9]
  },
]

let alumno = {
  estudiante: arrayEstudiantes,
  promedioAprobacion: function(nombre, nota) {

    for (let i = 0; i < this.estudiante.length; i++) {

      if (this.estudiante[i].nombre === nombre) {

        let acc = 0
        for (let j = 0; j < this.estudiante[i].notas.length; j++) {

          acc += this.estudiante[i].notas[j]

        } if ((acc + nota)/(this.estudiante[i].notas.length +1) > 5) {
          return 'estás aprobado'
        } else {
          return 'no estás aprobado'
        }
      }  
    } return 'no es estudiante'
  }
}

console.log(alumno.promedioAprobacion('Juan', 5))
