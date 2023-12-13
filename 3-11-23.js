let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])

let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
 "Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
console.log(grupoDeAmigos[5])


let str = "un string cualquiera"
let arrayAleatorio= ["Digital", "House", "true", "string", "123",
"false", "54", str ]
console.log(arrayAleatorio[arrayAleatorio.length - 1])


let peliculas = ["star wars", "totoro", "rocky", "pulp fiction",
                "la vida es bella"]

console.log(peliculas[4])

// función para pasar a mayúsculas el arreglo de strings

const enMayuscula = arreglo => {

    let arrMayus = []

    for (i = 0; i < arreglo.length; i++) {

        arrMayus.push(arreglo[i].toUpperCase())
    }

    return arrMayus
}

/*peliculas = enMayuscula(peliculas) // acá quedaría el arreglo con el mismo nombre
console.log(peliculas)*/

// ACÁ SE GENERA UN NUEVO ARREGLO CON OTRO NOMBRE

let pelisEnMayusculas = enMayuscula(peliculas)
console.log(pelisEnMayusculas)


let peliculasDos = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]


// esta función, dosArrays, es para unir dos arrays en uno solo y 
// pasarlo a mayúscula usando la funcion enMayuscula

const dosArrays = (array1, array2) => {
    
    let sumaArrays = enMayuscula(array1) + enMayuscula(array2)//esto da un string
    let pelisArray = sumaArrays.split(',')//acá paso el string a objeto array
    return pelisArray 

}

let pelisMayus = dosArrays(peliculas, peliculasDos)
console.log(pelisMayus)


//console.log(typeof(pelisMayus))
//console.log(typeof(peliculas))


console.log('--------------------------')

// esta función, dosArrays1, similar a la enterior es para unir dos arrays en uno solo y 
// pasarlo a mayúscula usando la funcion enMayuscula, pero además elimina el último
// elemento y lo guarda en una variable


const dosArrays1 = (array1, array2) => {
    
    let sumaArrays = enMayuscula(array1) + enMayuscula(array2)//esto da un string
    let pelisArray = sumaArrays.split(',')//acá paso el string a objeto array
    let ultimaPeli = pelisArray.pop()//elimino ultimo elemeno y lo guardo en una
    console.log(ultimaPeli)          //variable
    return pelisArray 

}

let pelisMayusMenosUltima = dosArrays1(peliculas, peliculasDos)
console.log(pelisMayusMenosUltima)    //[8, 10, 6, 9, 10, 6, 6, 8, 4]


const asiaScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]

// la función every hace la comparacion entre los índices de ambos arreglos
//console.log(asiaScores.every(function(v,i) { return v === euroScores[i] }))

// CONSTRUIR MI PROPIA FUNCION DE COMPARACIÓN.
/** crear una función que compare las calificaciones e indique si son iguales
 o diferentes. Te confirman que están en el orden adecuado y que solo traen
 valores numéricos del 1 al 10. */

const compara = (arr1, arr2) => {

    let coincidencias = 0

    if (arr1.length === arr2.length) {
        
        for (i = 0; i < arr1.length; i++) {            
            
            if (arr1[i] === arr2[i]) {

                coincidencias += 1}

                if (coincidencias === arr1.length) {

                    console.log('los arreglos son idénticos')
                
                } else {                
                    console.log('los arreglos son distintos')                
                }
                
            } 
            
    } else {
        console.log('los arreglos son distintos')        
        }
}
 

let comparaArreglos = compara(asiaScores, euroScores)
console.log(comparaArreglos)


/**Creá la función imprimirInverso que tome un array como argumento y que
 imprima en la consola cada elemento en orden inverso (no tenés que invertir el
 array). */

let array = [1, 2, 3, 4, 5]

const inversor = arr => {

    for (let i = arr.length - 1; i > -1; i--) {
        
        console.log(arr[i])        
    } 
 }

inversor(array)


/**Creá la función inversor que tome un array como argumento y devuelva uno
 nuevo invertido. */

 const imprimirInverso = arr => {

    let arrInv = []

    for (let i = arr.length - 1; i > -1; i--) {

        arrInv.push(arr[i])
    } return arrInv
 }

let arrayInverso = imprimirInverso(array)
console.log(arrayInverso)


/** crear una función sumaArray() que acepte un arreglo de
 números (3 elementos) y devuelva la suma de todos ellos */

let arrayNumeros = [20, 4, 6]

const sumArray = array => {
    
    let suma = 0

    for (let i = 0; i < array.length; i++) {
        //suma = suma + array[i]
        suma += array[i]

    } return suma

}

console.log(sumArray(arrayNumeros))

/**En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
 strings de 4 elementos y simule el comportamiento del método Array.join() */


let arrayString = ['a', 'h', 'o', 'r', 'a']

const join = array => {
    let arrayNew = []
    for (let i = 0; i < array.length; i++) {
        arrayNew += array[i]

    } return arrayNew

}

let newArray = join(arrayString)
console.log(newArray)



