function map(arr, func) {
    return arr.reduce((acc, item) => [...acc, func(item)], []);
}

function double(n) {
    return n * 2;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = map(numbers, double);

console.log(doubledNumbers);