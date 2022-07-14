const prompt = require("prompt-sync")();

function migratoryBirds(arr) {
    let birdsMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (birdsMap.has(arr[i])) {
            birdsMap.set(arr[i], birdsMap.get(arr[i]) + 1)
        } else {
            birdsMap.set(arr[i], 1);
        }
    }
    var numarr = [];
    var highVal = Math.max(...birdsMap.values());
    var MinVal = Math.min(...birdsMap.values());
    //this is to check if more than one key have the same occurrence
    let prev = 1000000;
    birdsMap.forEach((value, key, map) => {
        if (value >= highVal && key < prev) {
            highVal = value;
            prev = key;
            numarr.push(key);
        }

        if (value <= MinVal) {
            MinVal = value;
            numarr.push(key);
        }
    });

    return numarr;
}

var size = prompt('Enter the size of array : ');
let arr = [];
for (let i = 0; i < size; i++) {
    arr.push(prompt());
}

let ans = migratoryBirds(arr);
console.log('The most and least birds : ' , ans);