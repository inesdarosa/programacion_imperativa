// C10A Ejercitacion Mesa de Ejercicio

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction",
                "la vida es bella"]

console.log(peliculas[4])

// función para pasar a mayúsculas 

const enMayuscula = arreglo => {

    for (i = 0; i < arreglo.length; i++) {

        arreglo[i] = arreglo[i].toUpperCase()
    }

    return arreglo
}

enMayuscula(peliculas)
console.log(peliculas)

console.log('--------------------------------')

let peliculasDos = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

console.log('--------------------------')

// Esta función guarda el array2 en el array1:
/*
const dosArraysAlternativa = (array1, array2) => {

    
    for (let i = 0; i < array2.length; i++) {
        
        array1.push(enMayuscula(array2)[i])
        
    } return array1
}

dosArraysAlternativa(peliculas, peliculasDos)
console.log(peliculas)*/

console.log('--------------------------')

// Esta función guarda el array2 en el array1 convirtiendo el array2 en
// mayúscula y elimina el último elemento que guarda en una variable

const dosArraysAlternativa = (array1, array2) => {

    let ultimoElemento = array2.pop()
    console.log(ultimoElemento)
    for (let i = 0; i < array2.length; i++) {
        
        array1.push(enMayuscula(array2)[i])
        
    } return array1
}

dosArraysAlternativa(peliculas, peliculasDos)
console.log(peliculas)


console.log('--------------------------')

