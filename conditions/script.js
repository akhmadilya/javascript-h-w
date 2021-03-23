document.write(`<h3>Math methods</h3>`)

document.write(`<p>Math.floor(2.9): ${Math.floor(2.9)}</p>`)
document.write(`<p>Math.ceil(2.1): ${Math.ceil(2.1)}</p>`)
document.write(`<p>Math.round(2.5): ${Math.round(2.5)}</p>`)

document.write(`<p>Math.random(): ${Math.random()}</p>`)
document.write(`<p>Math.random() *10: ${Math.random() *10}</p>`)

//if (condition) {
//body......
//}

// >, <, >=, <=, ==, ===, !=, !==

// let username = prompt('Enter username')
let username = 'decode'
username = username.toLowerCase()

if (username == 'decode') {
    document.write(`<h3>Welcome ${username}!!!</h3>`)
} else {
    document.write(`<h3>Invalid UserName!!!</h3>`)
}

let randNum1 = Math.floor(Math.random() * 100)
let randNum2 = Math.floor(Math.random() * 100)

document.write(`<p>Random Number 1 = ${randNum1}</p>`)
document.write(`<p>Random Number 2 = ${randNum2}</p>`)

if (randNum1 > randNum2) {
    document.write(`<p>Random Number 1 Max = ${randNum1}</p>`)
} else {
    document.write(`<p>Random Number 2 Max = ${randNum2}</p>`)
}

// and, or 
// && ||

let direction = 'left'
if (direction == 'right' || direction == 'left') {
    document.write('<p> On Right Way</p>')
} else {
    document.write('<p>Error</p>')
}


let motivation = true
let knowledge = true
let aim = true
let hardWork = true
let money = true


if (success) {
    document.write('<h2> Your Success!!!</h2>')
} else {
    document.write('<h2>Your Fail</h2>')
}