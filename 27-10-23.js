
// CONDICIONALES: if, ifternario, switch

let edad = 20 
let acceso = edad => {
    if (edad>=18){
        console.log("Puede pasar")
    }else{
        console.log("No puede pasar")
    }
    
}

acceso(16)

let edad = 20 //(el número es a modo de ejemplo, podés cambiarlo o
//crear otras para tener varias pruebas)

let acceso = edad => {
    if(edad < 18 && edad >= 0) {
        console.log("No puede pasar al bar.")
    } else if (edad < 21 && edad >= 0){
        console.log("Puede pasar al bar, pero no puede tomar alcohol.")
    } else if (edad < 0) {
        console.log("Error, edad inválida. Por favor ingrese un número válido.")
    }
     else {
        console.log("Puede pasar al bar y tomar alcohol.")
    }
}

acceso(20)

let edad = 20 //(el número es a modo de ejemplo, podés cambiarlo o
    //crear otras para tener varias pruebas)
let acceso = edad => {
    if(edad <= 0 && edad %2 !== 0) {
        console.log("Error, edad inválida. Por favor ingrese un número válido, sabías que\
        tu edad es impar")
    } else if (edad <= 0 && edad %2 === 0) {
        console.log("Error, edad inválida. Por favor ingrese un número válido")
    } else if (edad < 18 && edad % 2 !== 0){
        console.log("No puede pasar al bar, sabías que tu edad es impar")
    } else if (edad < 18 && edad % 2 ===0) {
        console.log("No puede pasar al bar")
    } else if (edad < 21 && edad % 2 !== 0 && edad >= 0) {
        console.log("Puede pasar al bar, pero no puede tomar alcohol, sabías que tu\
        edad es impar")
    } else if (edad < 21 && edad % 2 === 0 && edad >= 0) {
        console.log("Puede pasar al bar, pero no puede tomar alcohol")
    } else if (edad === 21){
        console.log("Felicitaciones llegaste a la mayoría de edad, sabías\
        que tu edad es impar")
    } else if (edad > 21 && edad % 2 !== 0) {
        console.log("Puede pasar al bar y tomar alcohol, sabías que tu edad es impar")
    } else {
        console.log("Puede pasar al bar y tomar alcohol")
    }
}

acceso(28)

// función que determina el costo según los litros consumidos

let litrosConsumidos = litros => {
    if (litros > 0 && litros <= 25) {
        return 50
    } else if (litros > 25){
        return 25
    }
}

let costo = litrosConsumidos(20)
console.log(costo)

// función que incluye el costo por combustible usado y el tipo de 
// de vehículo

let totalAPagar = (vehículo, litrosConsumidos) => {
    let costo = 0

    if (vehículo === "coche") {
        costo = 86 + litrosConsumidos
    } if (vehículo === "moto" ) {
        costo = 70 + litrosConsumidos
    } if (vehículo === "autobus") {
        costo = 55 + litrosConsumidos
    }
    
    return `deberás pagar ${costo} pesos`
}

let costo_viaje = totalAPagar('autobus', litrosConsumidos(30))
console.log(costo_viaje)


// función de costo del sandwich base

let sandwichBase = tipo_base => {
    
    let costo_base = 0
    
    if (tipo_base === 'pollo') {
        costo_base = 150
    } else if (tipo_base === 'carne') {
        costo_base = 200
    } else if (tipo_base === 'veggie') {
        costo_base = 100
    }

    return costo_base
}

let tipo_s_base = sandwichBase('veggie')
console.log(tipo_s_base)

// función de costo según tipo de pan

let tipo_pan = pan => {
    
    let costo_pan = 0

    if (pan === 'blanco') {
        costo_pan = 50
    } else if (pan === 'negro') {
        costo_pan = 60
    } else if (pan === 's/gluten') {
        costo_pan = 75
    }
    
    return costo_pan
}


// funciones tipo ifternario para describir adicionales del sandwich

let adQueso = queso => queso === 1? 20 : 0
let adTomate = tomate => tomate === 1? 15 : 0
let adLechuga = lechuga => lechuga === 1? 10 : 0
let adCebolla = cebolla => cebolla === 1? 15 : 0
let adMayonesa = mayonesa => mayonesa === 1? 5 : 0
let adMostaza = mostaza => mostaza === 1? 5 : 0

// función que del costo total del sandwich que incluye las funciones que tienen el costo 
// del sandwich basico, tipo de pan y adicionales

let sandwich = (sandwichBase, tipo_pan, adQueso, adTomate, adLechuga, adCebolla, adMayonesa, adMostaza) => {
    let costo_total = 0  
    costo_total = sandwichBase + tipo_pan +adQueso + adTomate + adLechuga + adCebolla + adMayonesa + adMostaza
    return `Su sandwich cuesta ${costo_total} pesos`
}

let costo_sandwich = sandwich (sandwichBase('carne'), tipo_pan('negro'), adQueso(1), adTomate(1),
                                adLechuga(0), adCebolla(1), adMayonesa(0), adMostaza(1))
console.log(costo_sandwich)


// esta función es para generar un número entre 1-10, incluyéndolos,
// de forma randómica, que será un número secreto.
// la función en gral es sacada de la web con mínimas modificaciones.

let numeroRandomico = (min=1, max=10) => {

    let numeroS = 0

    min = Math.ceil(min); // Math.ceil() devuelve el entero mayor o igual
                          // más próximo a un número dado.

    max = Math.floor(max); // Math.floor() redondea un número dado hacia el número 
                           // entero anterior
    numeroS = Math.floor(Math.random() * (max - min + 1) + min);

    return numeroS

  }

let numeroSecreto = numeroRandomico()
console.log(numeroSecreto)

// función para adivinar el número secreto

let acertar_NSecreto = numero => {
    if (numero === numeroSecreto) {
        return 'felicitaciones, has acertado al número secreto'
    } else {
        return `vamo arriba la próxima sale!!, el número era ${numeroSecreto}`
    }
}

console.log(acertar_NSecreto(3))

// esta es otra versión de la función para adivinar el número secreto
// usando el tipo de condicional ifternario

let acertar_NSecreto = numero => numero === numeroSecreto? 'felicitaciones,\
 has acertado al número secreto' : `vamo arriba la próxima sale!!,\
  el número era ${numeroSecreto}`

 console.log(acertar_NSecreto(3))

// función para decidir si abrir o no el paracaídas

 let abrirParacaidas = (velocidad, altura) => {

    let paracaidas =''

    if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
        paracaidas = 'abrir el paracaídas'
    } else {
        paracaidas = 'no abrir el paracaidas'
    }

    return paracaidas

 }

 console.log(abrirParacaidas(1000, 2000))


 // switch, traductor

let stringUno = 'arbol'

switch(stringUno) {
    case 'perro':
        console.log('dog')
        break
    case 'casa':
        console.log('home')
        break
    case 'pelota':
        console.log('ball')
        break
    case 'arbol':
        console.log('tree')
        break
    case 'genio':
        console.log('genius')
        break    
    }


// switch, opinión de películas

let opinion = 're buena'

switch(opinion) {
    case 'muy mala':
        console.log('calificaste la peli como muy mala, que pena')
        break
    case 'mala':
        console.log('calificaste la peli como mala, es una lástima')
        break
    case 'mediocre':
        console.log('calificaste la peli como mediocre, pudo ser peor')
        break
    case 'buena':
        console.log('calificaste la peli como buean, que suerte te gustó')
        break
    case 'muy buena':
        console.log('calificaste la peli como muy buena, que bien que\
         la disfrutaste')
        break
    default:
        console.log('ingresaste un valor inválido')    
    }







    