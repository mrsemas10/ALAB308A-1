//Part 1: Stack Overflow

// Declare a global counter variable
let counter = 0;

//Create a simple function that increments the variable calls itself recursively
function incrementCount() {
    counter++;
    incrementCount();
}

// surround the initial function call in a try/catch block
try {
    incrementCount();
} catch(err) {
    console.log('the error is: ' + err);
    console.log('the max size is: ' + counter);
} 

//Part 2: Trampolines

// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
function flattenArray(arr) {
    let flattened = []; 
    arr.forEach(item => {
        if (Array.isArray(item)) { 
            flattened.push(...flattenArray(item)); 
        } else {
            flattened.push(item); 
        }
    });
    return flattened; 
}

// Once your recursive function is complete, trampoline it.
const trampoline = fn => (...args) => {
    let result = fn(...args);
    while (typeof result === 'function') {
        result = result()
    }
    return result;
}

// console.log(flattenArray);
// console.log(trampoline);

const trampflatArray = trampoline(flattenArray)

let nestedArray = [1, [2, 3], [4, [5, 6]], [7, 8]];

let flatArray = trampflatArray(nestedArray);
console.log(flatArray); 

//Part 3: Deferred Execution

// Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.

const primeNumbers = document.getElementById('prime-numbers');

function isPrime(num){
    for (let i=2; i<num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}
// console.log(primeNumbers);

// Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.

function listPrime(n){
    for(let i=1; i<=n; i++) {
        if (isPrime(i)) {
            const newLine = document.createElement('p');
            newLine.innerHTML = `<p>Prime number: ${i} </p>`;
            primeNumbers.appendChild(newLine);
        }
    }  
}
// Once complete, use the alert() method to alert the user that the calculation is finished.
let n = 60;

listPrime(n);
setTimeout(()=> {
    window.alert('Calculation finished.')}
    , 2000);

