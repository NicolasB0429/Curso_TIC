function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
console.log(twice(10));
twice = multiplier(5);
console.log(twice(5));
console.log(twice(10));
    