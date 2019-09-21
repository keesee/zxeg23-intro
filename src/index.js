var addNumbers = function(x,y) {
    var total = x + y
    return total 
}

var testAddNumbers = addNumbers(5,6)
console.log(testAddNumbers)

// if (true) {
//     console.log('is true')
// } else {
//     console.log('if false')
// }

if (testAddNumbers > 20) {
    console.log('is true')
} else {
    console.log('is false')
}


for (ii=0; ii < 100; ii = ii + 1) {
    var current = ii
    console.log(current)
}