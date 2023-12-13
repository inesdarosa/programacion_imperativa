/*
let miNombre = "Inés"
console.log(miNombre)


let frase = 'Breaking Bad Rules!'
console.log(frase.slice(9, 12))
console.log(frase.slice(9))
console.log(frase.slice(13))
console.log(frase.slice(-13))
console.log(frase.slice(-10))

let frase = 'Aguante Python!';
console.log(frase.replace('Python', 'JS'));
console.log(frase.replace('Py', 'JS'));


const noParesDeContarImparesHasta = num => {

    let contador = 0

    for (i = 0; i <= num; i++) {

        if (i % 2 !== 0) {

            contador++

        }

    }
    return contador

}

console.log(noParesDeContarImparesHasta(10))

*/

const tablaDeMultiplicar = numero => {

    let resultado = 1
    for (i = 1; i <= 10; i++) {
        resultado = numero*i
        console.log(`${numero} * ${i} = ${resultado}`)

    }

}

console.log(tablaDeMultiplicar(5))

/*
let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];

let fraseNueva = arrayFrase.join(' ')
console.log(fraseNueva)


let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];


let alumnoEgresado = estudiantes.pop()
console.log(alumnoEgresado)


estudiantes.push({nombre: "Juan", promedio: 5, curso: "iOS"})
console.log(estudiantes)

estudiantes.push({nombre: "Miguel", promedio: 2, curso: "Android"})
console.log(estudiantes)


let alumnoDeBaja = estudiantes.shift()
console.log(alumnoDeBaja)
console.log(estudiantes)


estudiantes.unshift({nombre: "Mariana", promedio: 9, curso: "Full Stack"}, 
{nombre: "Francisco", promedio: 2, curso: "Android"})

console.log(estudiantes)


const dominio = string => {

    const prefijo = 'http://www.'
    return prefijo + string

}

console.log(dominio('digitalhouse.com.ar'))

let texto = 'ines'
console.log(texto.length)


const reemplazoFastFast = (string, string_to_change, string_final) => {

    return string.replace(string_to_change, string_final)
}

console.log(reemplazoFastFast('Ahora me queda todo claro','todo','nada'))


const menciona = (texto, palabra) => {

    return texto.includes(palabra)

}

console.log(menciona('ahora si que puedo ir', 'despues'))


let frase = 'Hola!, soy Carli'

console.log(frase.slice(-5))
*/

