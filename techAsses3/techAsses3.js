function getPositives(arr) {
    let posNum = [];
    let count = 0; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            posNum[count] = arr[i];
            count++;
        }
    }

    return posNum;
}

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var arr2 = getPositives(arr);
console.log(arr2); 
