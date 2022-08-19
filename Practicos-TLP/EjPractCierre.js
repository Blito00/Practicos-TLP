// 1
let x = parseInt(55) //cambie el valor de los parametros para realizar una multiplicacion o division, dependiendo de que operacion quiera realizar.
let z = parseInt(55)
let multi = (x*z)
let div = (z/x)
function resultado (x,z) {
    if (x<z) {
        console.log(`El resultado de la multiplicacion es: ${multi}`)
        return div
    } else if (x>z) {
        console.log(`El resultado de la division es: ${div}`)
        return multi
    }
}
resultado(multi,div)  


//2
function tipoDat(valor){
    let dato=typeof valor
    
    return console.log(dato)   
}
let valor="Taller de Programacion" //cambiar el valor para recibir un resultado diferente.
tipoDat( valor)

// 3
let a = parseInt(4)
let b = parseInt(4)
let c = parseInt(6) 
let d = parseInt(8)
let e = parseInt(10)
let f = parseInt(12)

function numeros (a,b,c,d,e,f) {
    let suma = (a+b)
    let resta = (suma - c)
    let multiplicacion = (resta*d)
    let division = (multiplicacion/e)
    let potencia = (division**f)
    return `El resultado es: ${potencia}`
}
numeros()
console.log(numeros(4,4,6,8,10,12))


// 4

miArray = ["Cristian", "lenovoThinkpad@gmail.com", "22", "Rojo", "Francia" ]

function extraer (miArray) {
    let ultimaPos = miArray.at(-1)
    let ultimaPos2 = miArray.at(-2)
    let ultimaPos3 = miArray.at(-3)

    const newArray = []
    newArray.push(ultimaPos,ultimaPos2,ultimaPos3)
    return console.log(newArray)

}
extraer(miArray)

// 5

array = [23, "Leonardo", "Medialuna", 12, "Sillon", 77, "Blanco", "Polonia"]

function orden (arr){
    return arr.sort()
}
console.log(orden(array))

// 6
primeraDiv = ["Boca", "Racing", "Aldosivi", "Velez", "River"] 
b= "River" 
 function eliminar (primeraDiv,b){
      for (i=0;i < primeraDiv.length;i++) {
        if (primeraDiv[i] === b){
                primeraDiv.splice(i,1)
            }
        } return primeraDiv
}
console.log(eliminar(primeraDiv,b))

// 7
