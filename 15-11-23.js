
 let productos = [
    {
      nombre: "motorola",
      precio: 40,
      cantidad: 5,
      categoria: "telefonia",
    },
    {
      nombre: "notebook",
      precio: 80,
      cantidad: 10,
      categoria: "computacion",
    },
    {
      nombre: "zapatilla",
      precio: 20,
      cantidad: 2,
      categoria: "indumentaria",
    },
    {
      nombre: "Macbook",
      precio: 100,
      cantidad: 7,
      categoria: "computacion",
    },
    {
      nombre: "samsung",
      precio: 60,
      cantidad: 15,
      categoria: "telefonia",
    },
    {
      nombre: "monitor",
      precio: 30,
      cantidad: 5,
      categoria: "computacion",
    },
  ];
  
  /*4) Por ultimo debemos crear una funcion para poder aumentar el precio de una categoria
   especifica que recibiremos por parametros y tambien recibiremos por cuanto queremos
 multiplicar dicho precio*/

 const aumentarPrecio = (array, categoria, multiplicarPrecio) => {

    for (let i = 0; i < array.length; i++) {

        if (array[i].categoria === categoria)

        array[i].precio *= multiplicarPrecio
        
    }

 }

 aumentarPrecio(productos, 'computacion', 2)
 console.log(productos)
 

 //
 
 let numeros = [ 15, 12, 14, 3, 7, 1, 9 ]

// console.log( Math.min(...numeros) )
// console.log( Math.max(...numeros) )

const determinarMenor = (array)=>{

    let menor = array[0] // 1

    for (let i = 1; i < array.length; i++) {
        if( menor > array[i] ){ // {}.precio > {}.precio - {} < {}
            menor =  array[i]
            console.log(menor)
        }
    }

    return menor 

}

let menorNumero = determinarMenor(numeros)
console.log(menorNumero)

let numeros2 = [ 13, 12, 14, 3, 7, 1, 9 ]

const determinarMayor = (array)=>{

    let mayor = array[0] //14

    for (let i = 1; i < array.length; i++) {
        if( mayor < array[i] ){
            mayor =  array[i]
        }
    }

    return mayor 

}
let mayorNumero = determinarMayor(numeros2)
console.log(mayorNumero)

//Obtener en un nuevo array las edades igual a 18.

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5]

const determinarIgual18 = array => {

  let igual18 = []

  for (let i = 0; i < array.length; i++) {

    if (array[i] === 18) {
      igual18.push(array[i])
    }
  } return igual18
}

let dieciocho = determinarIgual18(edades)
console.log(dieciocho)

//Obtener en un nuevo array las edades menores a 18.

const menorDieciocho = array => {

  let menor18 = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 18) {

      menor18.push(array[i])
    }
     
  } return menor18
}


let edadMenorDieciocho = menorDieciocho(edades)
console.log(edadMenorDieciocho)

//Obtener en un nuevo array las edades mayor o igual a 18.

const mayorIgualDieciocho = array => {

  let mayor18 = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 18) {

      mayor18.push(array[i])
    }
     
  } return mayor18
}


let edadMayorIgualDieciocho = mayorIgualDieciocho(edades)
console.log(edadMayorIgualDieciocho)

//Obtener el promedio de edades.

let promedio = array => {

  let prom = 0
  for (let i  = 0; i < array.length; i++) {
    prom += array[i]
    
  } return prom/array.length
}

let promedioEdades = promedio(edades) 
console.log(promedioEdades)

//Incrementar en 1 todas las edades.

let increm = array => {

  let arrayinc = []
  let elemento = 0
  for (let i = 0; i < array.length; i++) {
    elemento = array[i] + 1
    arrayinc.push(elemento)
    
  } return arrayinc

}

let incrementoUno = increm(edades)
console.log(incrementoUno)


const arrayCuentas = [
  {
  titular: "Arlene Barr",
  estaHabilitada: false,
  saldo: 3253.40,
  edadTitular: 33,
  tipoCuenta: "sueldo"
  },
  {
  titular: "Roslyn Torres",
  estaHabilitada: false,
  saldo: 3229.45,
  edadTitular: 27,
  tipoCuenta: "sueldo"
  },
  {
  titular: "Cleo Lopez",
  estaHabilitada: true,
  saldo: 1360.19,
  edadTitular: 34,
  tipoCuenta: "corriente"
  },
  {
  titular: "Daniel Malone",
  estaHabilitada: true,
  saldo: 3627.12,
  edadTitular: 30,
  tipoCuenta: "sueldo"
  },
  {
  titular: "Ethel Leon",
  estaHabilitada: true,
  saldo: 1616.52,
  edadTitular: 34,
  tipoCuenta: "sueldo"
  },
  {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: "corriente"
  }
 ]


//  a. Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

const cuentaMenores = array => {

  let newCuentas = []

  for (let i = 0; i < array.length; i++) {

    if (array[i].edadTitular < 30) {

      newCuentas.push(array[i])
    }
  } return newCuentas
}

let cuentasMenoresDeTreinta = cuentaMenores(arrayCuentas)
console.log(cuentasMenoresDeTreinta)

console.log('---------------------------------')

// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a
// 30.

const cuentaMayores = array => {

  let newCuentas = []

  for (let i = 0; i < array.length; i++) {

    if (array[i].edadTitular >= 30) {

      newCuentas.push(array[i])
    }
  } return newCuentas
}

let cuentasMayoresDeTreinta = cuentaMayores(arrayCuentas)
console.log(cuentasMayoresDeTreinta)

console.log('--------------------------------')

// Mi versión que unifica las dos funciones anteriores,
// cuentaMenores y cuentaMayores

const cuentaEdad = (array, edad) => {

  let newCuentas = []
  
  if (edad < 30) {

    for (let i = 0; i < array.length; i++) {

      if (array[i].edadTitular < 30) {
  
        newCuentas.push(array[i])
      }
    }

  } else {

      for (let i = 0; i < array.length; i++) {

        if (array[i].edadTitular >= 30) {
    
          newCuentas.push(array[i])
        }
      }
    } return newCuentas
}

let cuentaSegunEdad = cuentaEdad(arrayCuentas, 40)
console.log(cuentaSegunEdad)

console.log('--------------------------------')

// Obtener la cuenta con el titular de la misma más joven.

const cuentaMasJoven = (array)=>{

  let menor = array[0].edadTitular // 1
  let elJoven = {}

  for (let i = 1; i < array.length; i++) {
      if( menor > array[i].edadTitular ){ // {}.precio > {}.precio - {} < {}
          menor =  array[i].edadTitular
          elJoven = array[i]
          //console.log(menor)
      }

  } return elJoven 
}

let masJoven = cuentaMasJoven (arrayCuentas)
console.log(masJoven)

console.log('-------------------------------')
// Obtener un array con las cuentas habilitadas.

const cuentasHabilitadas = array => {

  let habilitadas = []
  for (let i = 0; i < array.length; i++) {

    if (array[i].estaHabilitada === true) {

      habilitadas.push(array[i])
    }
  } return habilitadas
}

let cuentasDelBancoHabilitada = cuentasHabilitadas(arrayCuentas)
console.log(cuentasDelBancoHabilitada)

console.log('-------------------------------')
// Obtener un array con las cuentas deshabilitadas.

const cuentasDeshabilitadas = array => {

  let inhabilitadas = []
  for (let i = 0; i < array.length; i++) {

    if (array[i].estaHabilitada !== true) {

      inhabilitadas.push(array[i])
    }
  } return inhabilitadas
}

let cuentasNoHabilitada = cuentasDeshabilitadas(arrayCuentas)
console.log(cuentasNoHabilitada)

console.log('-----------------------')
 // Obtener la cuenta con el menor saldo.

const menorSaldo = array => {

  let menor = array[0].saldo
  let saldoMin = {}

  for (let i = 1; i < array.length; i++) {

    if (menor > array[i].saldo) {

      menor = array[i].saldo
      saldoMin = array[i]

    }

  } return saldoMin
}

let saldoMenor = menorSaldo(arrayCuentas)
console.log(saldoMenor)

console.log('--------------------------')
// Obtener la cuenta con el mayor saldo

const saldoMayor = array => {

  let mayor = array[0].saldo
  let saldoMax = {}

  for (let i = 1; i < array.length; i++) {

    if (mayor < array[i].saldo) {

      mayor = array[i].saldo
      saldoMax = array[i]

    }

  } return saldoMax
}

let mayorSaldo = saldoMayor(arrayCuentas)
console.log(mayorSaldo)

console.log('-------------------------')
 /**Desarrollar una función llamada generarID que reciba como parámetro el array
 de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id
 con un valor Numérico */

 const generarID = array => {

  for (let i = 0; i < array.length; i++) {

    array[i].ID = i
  } 
 }

 generarID(arrayCuentas)
 console.log(arrayCuentas)


console.log('------------------------')
/**Desarrollar una función llamada buscarPorId que reciba como parámetro el
 array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto
 literal completo), caso contrario retornar null */ 


 const buscarPorId = (array, id) => {

  for (let i = 0; i < array.length; i++) {

    if (array[i].ID === id) {

      return array[i]
    } 
  } return null     
} 

let resultadoId = buscarPorId(arrayCuentas, 7)
console.log(resultadoId)


console.log('------------------')
/**Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el
 array de cuentas y un saldo (Number), deberá retornar un array que se cuyas
 cuentas se encuentren por debajo del saldo enviado por parámetro */

 const filtrarPorSaldos = (array, dinero) => {

  let newArray = []
  for (let i = 0; i< array.length; i++) {

    if(array[i].saldo < dinero) {

      newArray.push(array[i])
    }
  } return newArray
 }

 let arrayNuevo = filtrarPorSaldos(arrayCuentas, 2000)
 console.log(arrayNuevo)

 console.log('-------------------------------')
 /** Desarrollar una función llamada incrementarSaldo que reciba como parámetro
 el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta,
 en caso de encontrar, caso contrario retornar undefined
 a. Reutilizando la función buscarPorId */

 const incrementarSaldo = (array, id, numero) => {

  for (let i = 0; i < array.length; i++) {

    if (array[i].ID === id) {

      //array[i].saldo = array[i].saldo + numero
      array[i].saldo += numero
      return array[i]
    } 
  } return undefined     
} 

let resultadoSaldo = incrementarSaldo(arrayCuentas, 1, 1000)
console.log(resultadoSaldo)

