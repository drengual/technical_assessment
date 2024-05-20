function sumArray(arr) {
    let sum = 0;

// start of code
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
// end of code
    
    return sum;
}

let array_of_numbers = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum = sumArray(array_of_numbers);
console.log(sum);
