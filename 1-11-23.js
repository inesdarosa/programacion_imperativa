
const valores = num => {

    for (i = num + 1; i <= num + 10; i++) {

        console.log(i)

    } 

}

console.log(valores(5))

const detresEnTres = () => {

    for (i = 5; i <= 20; i += 3) {
        console.log(i)
    }

}

console.log(detresEnTres())

const sumatoria = () => {
    
    let num = 0
    for (i = 0; i <= 100; i++) {
    num += i

    }
    return num
}

console.log(sumatoria())

const factorial = num => {
    let resultado = 1
    for (i = 1; i <= num; i++) {

        resultado *= i
        
    }
    return resultado
}

console.log(factorial(4))
