/**Deberás crear una función llamada loopDePares que reciba como parámetro
 * un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
 * En caso de que el número de la iteración sumado con el número pasado 
 * por parámetro sea par, mostrará en la consola: “El número X es par”. */

const loopDePares = numero => {

    for (let i = 0; i < 101; i++) {

        
        if ((i + numero) % 2 === 0) {

            console.log(`El numero ${i + numero} es par`)
        } else {
            console.log(i)
     
        }
    }
} 

loopDePares(7)


/**Deberás crear una función llamada loopDeImpares que reciba como parámetros 
 * un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola 
 * cada número del loop. Luego, modificar el código para que, en caso de que 
 * ese número sumado con el número pasado por parámetro sea impar, muestre en 
 * la consola la palabra pasada por parámetro.*/
 

const loopDeImpares = (numero, palabra) => {

    for (let i = 0; i < 101; i++) {

        if ((i + numero) % 2 !== 0) {

            console.log(palabra)
        } else {
            console.log(i)
        }
    }
}

loopDeImpares(3, 'impar')


/**Deberás crear una función llamada sumatoriaque reciba un número como parámetro y
 que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.*/

 const sumatoriaque = numero => {
    let resultado = 0
    for (let i = 0; i < numero + 1; i++) {
        resultado += i
        
    } return resultado
 }

 let sumaNumeros = sumatoriaque(8)
 console.log(sumaNumeros)


 /**Deberás crear una función llamada nuevoArregloque reciba un número como
 parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que
 le hayas pasado.*/

const nuevoArregloque = numero => {

    arreglo = []
    for (let i = 1; i < numero + 1; i++) {

        arreglo.push(i)
    } return arreglo
}

let arregloNuevo = nuevoArregloque(4)
console.log(arregloNuevo)


/**Deberás crear una función llamada split que reciba un string y simule el comportamiento
 de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte.
 Importante: no podésusarelString.split()*/

const split = string => {

    let arreglo = []
    for (let i = 0; i < string.length; i++) {

        arreglo.push(string[i])

    } return arreglo
}

let arregloSplit = split('hola')
console.log(arregloSplit)


/** crear una función llamada arrayHandler que reciba dos arreglos de igual largo
 como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento
 de array 2}” */

const arrayHandler = (array1, array2) => {

    if (array1.length === array2.length) {

        for (let i = 0; i < array1.length; i++) {
            
            console.log(`soy ${array1[i]} y soy ${array2[i]}`) 
        }
    }
}


let arregloManipulado = arrayHandler([1,2,3,4], ['h','o','l','a'])
arregloManipulado
  

/**crear una función llamada palindromo que indique si una palabra es palíndroma
 o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no */


const palindromo = string => {

    nuevaString = ''
    for (let i = (string.length - 1); i > -1; i--) {

        nuevaString += string[i]

    } if (nuevaString === string) {
        return true
    } else {
        return false
    }
}

let isPalindromo = palindromo('anilin')            
console.log(isPalindromo)





