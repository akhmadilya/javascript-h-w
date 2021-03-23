// alert('External')

console.log('Message in console')

document.write('<h3>Hello World</h3>')

document.write('<h2>Привет</h2><hr>')

// prompt()

// var/let/const

// var myName = prompt()
var myName = 'Decode'

document.write('<h3>Welcome ' + myName + '!</h3>')

document.write(`<h3> Welcome ${myName}!</h3>`)

var myVar = 1234;

document.write(`<h5>Var: ${myVar}</h5>`)

let myLet = 87569;

document.write(`<h5>Var: ${myLet}</h5>`)

const myConst = 2021

// myConst = 111

document.write(`<h5>Const: ${myConst}</h5>`)

document.write(`<p>10+20=${10+20}</p>`)
document.write(`<p>140-89=${140-89}</p>`)
document.write(`<p>34*11=${34*11}</p>`)
document.write(`<p>144/12=${144/12}</p>`)
document.write(`<p>7%2=${7%2}</p> <hr></hr>`)


let num1 = +(prompt('Enter your number'))

document.write(`<p>10+${num1}=${10+num1}</p>`)
document.write(`<p>140-${num1}=${140-num1}</p>`)
document.write(`<p>34*${num1}=${34*num1}</p>`)
document.write(`<p>144/${num1}=${144/num1}</p>`)
document.write(`<p>7%${num1}=${7%num1}</p> <hr></hr>`)

document.write(`<p>Math.pow(3, 4)}=${Math.pow/num1}</p>`)
document.write(`<p>Math.sqrt(49)=${Math.sqrt(49)}</p>`)

console.log(Math)