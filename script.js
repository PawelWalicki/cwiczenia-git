
var v = 5 // variable
const c = 5 // constant
let l = 5 // let 
console.log(v) // HOISTING wynoszenie
console.log(l)
console.log(c)

v = 6
//c = 6 // błąd
l = 6

/**
 * String => ""
 * Number => NaN
 * Boolean => true, false
 * Undefined => undefined
 * Object => funkcja, tablica, objekt, set, mapa, class, null
 */

let x = 3.14
console.log(x)
x = "napis" 
console.log(x)

x = NaN
console.log(typeof(x))
console.log(typeof(null))
console.log("napis" + 0)
console.log(0 + "napis")
console.log(typeof("napis"))
console.log(Number.MAX_VALUE)
console.log("1"/2)
console.log(1/"2")
console.log("abc"/2)
console.log(2*2)
console.log("2"*2)
console.log("abc"*2) // abcabc
console.log("abc"*"def")
console.log(Infinity)

let name = "Kuba"
let addressCity = "Malicki" // cammelcase
let address_city = "Malicki" // snake case
// let address-city = "Malicki" // kebab case

// Array

let arr = [1,2,3,4,5]
let arr2 = [1,"mama",3,4,3.4,NaN, false] // To jest poprawne, ale brzydkie

let obj = {
    name: "Kuba",
    age: 25,
    grades: [5,4,3,4,5,4]
}

console.log(obj.age)
console.log(obj.name)
console.log(obj.grades)

let arrObj = [
    {
        name: "Kuba",
        age: 25,
        grades: [5,4,3,4,5,4]
    },
    {
        name: "Maciek",
        age: 28,
        grades: [4,4]
    },{
        name: "Piotr",
        age: 20,
        grades: [5,5,4]
    }
]
let less = arrObj.filter(x=>x.grades.length>2)
console.log(less)


// + - * / 

// ** - potęga a**(1/2)
// %  - reszta z dzielenia

console.log(7%2) // 7 - 3*2 == 1

console.log(45 % 25) // 45 - (1*25) = 20