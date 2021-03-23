// while (condition) {}

// let username = prompt('Enter username:')
let username = 'decode'

let attempts = 0
let fail = false

while (username != 'decode') {
    username = prompt('Please enter again:')
        // attempts = attempts + 1
    attempts += 1

    if (attempts === 3) {
        fail = true
        document.write('<h3>FAIL</h3>')
        break
    }

}
if (fail == false) {
    document.write('<h3>Welcome decode!</h3>')
}



document.write(`<p> Failed: ${attempts}</p>`)


let counter = 0

while (5 > counter) {
    document.write('<p>JavaScript</p>')
    counter++
}

let imgSrc = 'https://cdn.wallpapersafari.com/48/29/r4Y73E.jpg'

let imgCounter = 0




document.write('<div class="wrap">')

while (4 > imgCounter) {

    document.write(`
    <div class="photo-item">
        <img src='${imgSrc}'>
    </div>
    `)


    imgCounter++

}

document.write('</div>')

//for (start; condition; action) {}
//for (start; end; step) {}


let sumEven = 0
let sumOdd = 0
for (let i = 0; i <= 24; i++) {
    if (i % 2 == 0) {
        //document.write(`<p>Iteration: ${i}</p>`)
        sumEven += i
    } else {
        sumOdd += i
    }
}

document.write(`<p>Sum Even numbers: ${sumEven}</p>`)
document.write(`<p>Sum Odd numbers: ${sumOdd}</p>`)

// for (let i = 0; i < 5; i ++) {
//     document.write(`<p>First: $</p>`)
// }

for (let i = 1; i < 4; i++) {
    for (let j = 1; j <= i; j++) {
        document.write('*')
    }
    document.write('<br>')
}

document.write('<hr>')

for (let i = 1; i < 4; i++) {
    for (let j = 1; j <= i; j++) {
        document.write('*')
    }
    document.write('<br>')
}