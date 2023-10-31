

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
*/

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