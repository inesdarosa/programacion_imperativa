/**A partir del siguiente array de edades nos solicitan realizar lo siguiente */



/** a) Desarrollar una función que ordene internamente de forma ascendente las edades, 
 * la misma deberá retornar él array ordenado */

const edades = [33, 27, 34, 30, 34, 25]

const ordenAscendente = arreglo =>{

    let temporal = undefined

    // cuantas veces 
    for(let i = 0; i < arreglo.length; i++) {

        // hace la magia
        for(let j = 0; j < arreglo.length - 1; j++){
            
            if( arreglo[j] > arreglo[j + 1] ){
                temporal = arreglo[j] 
                arreglo[j] = arreglo[j + 1] 
                arreglo[j + 1] = temporal 
            }

        }


    }

}

ordenAscendente(edades)
console.log(edades)

/** b) Desarrollar una función que ordeneinternamente de forma descendente
 las edades, la misma deberá retornar él array ordenado */

 const ordenDescendente = arreglo =>{

    let temporal = undefined

    // cuantas veces 
    for(let i = 0; i < arreglo.length; i++) {

        for(let j = 0; j < arreglo.length - 1; j++){
            
            if( arreglo[j] < arreglo[j + 1] ){
                temporal = arreglo[j] 
                arreglo[j] = arreglo[j + 1] 
                arreglo[j + 1] = temporal 
            }

        }


    }

}

ordenDescendente(edades)
console.log(edades)


/** ¿Cómo pudieras ordenar el arraya nterior, alfabéticamente? */

const letras = ['C', 'A', 'D', 'E', 'H', 'Z', 'J', 'L']

ordenAscendente(letras)
console.log(letras)


const arrayCuentas =
 [
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
    estaHabilitada: false,
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
    },
 ]

 /** c) Desarrollar una función que ordene internamente de forma ascendente según él
 saldo de cada cuenta, la misma deberá retornar él array ordenado  */

 const ordenAscenSaldo = (arreglo) =>{

    let temporal = undefined

    // cuantas veces 
    for(let i = 0; i < arreglo.length; i++) {

        for(let j = 0; j < arreglo.length - 1; j++){
            
            if( arreglo[j].saldo > arreglo[j + 1].saldo ){
                temporal = arreglo[j] 
                arreglo[j] = arreglo[j + 1] 
                arreglo[j + 1] = temporal 
            }

        }


    }

}

ordenAscenSaldo(arrayCuentas)
console.log(arrayCuentas)

/** c) Desarrollar una función que ordene internamente de forma ascendente según la
 edad del titular de cada cuenta, la misma deberá retornar él array ordenado. */


const ordenAscenEdad = (arreglo) =>{

    let temporal = undefined

    // cuantas veces 
    for(let i = 0; i < arreglo.length; i++) {

        for(let j = 0; j < arreglo.length - 1; j++){
            
            if( arreglo[j].edadTitular > arreglo[j + 1].edadTitular ){
                temporal = arreglo[j] 
                arreglo[j] = arreglo[j + 1] 
                arreglo[j + 1] = temporal 
            }

        }


    }

}

ordenAscenEdad(arrayCuentas)
console.log(arrayCuentas)


console.log('----------------------------')

// Esta función es general, mirar qué propiedad dentro de la función está entre
// corchetes rectos, y cuando se quiere aplicar la función se debe escribir
// la propiedad (el parámetro) entre comillas, por ejemplo 'saldo'

const AscendentePropiedad = (arreglo, propiedad) =>{
    
    let temporal = undefined

    // cuantas veces 
    for(let i = 0; i < arreglo.length; i++) {

        for(let j = 0; j < arreglo.length - 1; j++){
            
            if( arreglo[j][propiedad] > arreglo[j + 1][propiedad] ){
                temporal = arreglo[j] 
                arreglo[j] = arreglo[j + 1] 
                arreglo[j + 1] = temporal 
            }

        }


    }

}

AscendentePropiedad(arrayCuentas, 'saldo')
console.log(arrayCuentas)

console.log('--------------------------------------')

/**ordenar la colección, de menor a mayor, considerando solo la estatura */

let personas = [
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	}
];

const ordenarAltura = arreglo => {

    let temporal = undefined

    for (let i = 0; i < arreglo.length; i++) {// es el número de veces que
        // se comparan los elementos del arreglo

        for (let j = 0; j < arreglo.length - 1; j++) {// es para ir agarrando
            // los elementos que serán comparados

            if (arreglo[j].estatura > arreglo[j + 1].estatura) { // es para
                // comparar la propiedad de los arreglos seleccionados 

                temporal = arreglo[j]
                arreglo[j] = arreglo[j + 1]
                arreglo[j + 1] = temporal
            }
        }
    }
}

ordenarAltura(personas)
console.log(personas)

// Ordenar elementos del arreglo de forma descendente

let likesUsuario = [5, 2, 8, 6, 20, 14, 7, 6, 18, 3, 9, 11, 24, 4, 5]

const ordenLikes = arreglo => {

    let temporal = undefined
    for (let i = 0; i < arreglo.length; i++) {

        for (let j = 0; j < arreglo.length - 1; j++) {

            if (arreglo[j] < arreglo[j + 1]) {

                temporal = arreglo[j]
                arreglo[j] = arreglo[j + 1]
                arreglo[j + 1] = temporal
            }
        }
    }
}

ordenLikes(likesUsuario)
console.log(likesUsuario)


//

let temperatura = [
    {
        dia: 1,
        mes: 1,
        tempMaxima: 35,
        tempMinima: 15
    },
    {
        dia: 15,
        mes: 3,
        tempMaxima: 25,
        tempMinima: 12
    },
    {
        dia: 12,
        mes: 5,
        tempMaxima: 22,
        tempMinima: 9
    },
    {
        dia: 23,
        mes: 7,
        tempMaxima: 20,
        tempMinima: 3
    },
    {
        dia: 27,
        mes: 9,
        tempMaxima: 28,
        tempMinima: 12
    },
    {
        dia: 7,
        mes: 11,
        tempMaxima: 29,
        tempMinima: 7
    }
]

// a) Ordenar por temperatura mínima de menor a mayor.

const ordenAscenden = arreglo => {

    let temporal = undefined
    for (let i = 0; i < arreglo.length; i++) {

        for (let j = 0; j < arreglo.length - 1; j++) {

            if (arreglo[j].tempMinima > arreglo[j + 1].tempMinima) {

                temporal = arreglo[j]
                arreglo[j] = arreglo[j + 1]
                arreglo[j + 1] = temporal
            }
        }
    }
}

ordenAscenden(temperatura)
console.log(temperatura)

// Ordenar por temperatura máxima de mayor a menor

const ordenDescenden = arreglo => {

    let temporal = undefined
    for (let i = 0; i < arreglo.length; i++) {

        for (let j = 0; j < arreglo.length - 1; j++) {

            if (arreglo[j].tempMaxima < arreglo[j + 1].tempMaxima) {

                temporal = arreglo[j]
                arreglo[j] = arreglo[j + 1]
                arreglo[j + 1] = temporal
            }
        }
    }
}

ordenDescenden(temperatura)
console.log(temperatura)