//concatenacion es usando los textos unidos con +, como se hace habitualmente pero
// con la interpolacion uso las variables y los tildes para atrás y no las comillas

//interpolacion de variables

let variable1 = 'jorge'
let variable2 = 'perez'

console.log(`hola ${variable1} ${variable2} como estas`)

function test2 (x, y) {
    return x*2
    /*console.log(x)
    return x/2*/
}

test2(10, 0)

function test2(x, y) {
    return x*y
}

let test = test2(10);
console.log(test)

//conversor de pulgadas a cm

function conversion (pulgadas) {
    return pulgadas*2.55 + ' cm'

}

let cm = conversion(10)
console.log(cm)

// crea una funcion string y convierte en url: pepito devuelto
// http://www.pepito.com

function convertir_url(texto) {
    return `http://www.${texto}.com`
}

let url = convertir_url('ines')
console.log(url)

function convertir(frase) {
    return `¡${frase}.com!`
}

let conver = convertir('está lloviendo')
console.log(conver)

//funcion para calcular edad de perros

function edad_perros (edad) {
    return edad*7 + ' años'

}

let perro = edad_perros(10)
console.log(perro)

// valor de la hora de trabajo

function hora_trabajo(sueldo) {
    return sueldo/40 + ' soles'
}

let costo_hora = hora_trabajo(1200)
console.log(costo_hora)

//calculo de indice de masa corporal, altura en m y peso en kg

function calculadorIMC(altura, peso) {
    return peso/(altura^2)
}

let imc = calculadorIMC(170, 80)
console.log(imc)

// Brenda Maraver, Daniela Lotero, Isabella Llinas, Karen Rodriguez, Antony Francia
