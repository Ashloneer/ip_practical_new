// Basic Calculator using Promises
function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            reject("Both inputs must be numbers");
        }
        
        switch(operation) {
            case '+':
                resolve(num1 + num2);
                break;
            case '-':
                resolve(num1 - num2);
                break;
            case '*':
                resolve(num1 * num2);
                break;
            case '/':
                if (num2 === 0) {
                    reject("Cannot divide by zero");
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject("Invalid operation. Use +, -, *, or /");
        }
    });
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    calculator(num1, num2, operation)
        .then(result => document.getElementById('calculatorResult').innerText = `Result: ${result}`)
        .catch(error => document.getElementById('calculatorResult').innerText = `Error: ${error}`);
}

// Custom Iterator for Array (Squares)
function squareIterator(arr) {
    let index = 0;
    return {
        next() {
            if (index < arr.length) {
                const result = { value: arr[index] ** 2, done: false };
                index++;
                return result;
            } else {
                return { value: undefined, done: true };
            }
        }
    };
}

function displaySquares() {
    const input = document.getElementById('arrayInput').value;
    const numbers = input.split(',').map(Number); // Convert input string to array of numbers

    // Validate if all inputs are numbers
    if (numbers.some(isNaN)) {
        document.getElementById('squareResult').innerText = "Please enter valid numbers";
        return;
    }

    const iterator = squareIterator(numbers);
    let result = '';
    let current = iterator.next();
    
    while (!current.done) {
        result += current.value + ' ';
        current = iterator.next();
    }
    
    document.getElementById('squareResult').innerText = `Squares: ${result}`;
}

// Prime Number Generator
function* primeGenerator(limit) {
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            yield num;
        }
    }
}

function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

function generatePrimes() {
    const limit = parseInt(document.getElementById('primeLimit').value);
    const primes = primeGenerator(limit);
    let primeNumbers = '';

    for (let prime of primes) {
        primeNumbers += prime + ' ';
    }

    document.getElementById('primeResult').innerText = `Primes up to ${limit}: ${primeNumbers}`;
}
