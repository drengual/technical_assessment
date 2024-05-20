function averageArray(arr) {
    let n = arr.length;
    let sum = 0;
    let average;

// start of my code

    for(let i = 0; i < n; i++) {
        sum += arr[i];
    }

    average = sum / n;

 // end of my code

    return average;
}

let array_of_numbers = [1, 3, 9, 15, 90];
let avg = averageArray(array_of_numbers);

console.log("The average of array numbers is : ", avg);
