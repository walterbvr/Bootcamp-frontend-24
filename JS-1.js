// 1. Find the smallest number in an array
function findSmallestNumber(arr) {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }

    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log(findSmallestNumber([12, 6, 10, 2, 45, 100]));

// 2. Find the least frequent item in an array
function findLeastFrequentItem(arr) {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }

    let countMap = {};
    arr.forEach(item => {
        if (countMap[item]) {
            countMap[item]++;
        } else {
            countMap[item] = 1;
        }
    });

    let leastFrequentItem = arr[0];
    let minCount = countMap[leastFrequentItem];

    for (let key in countMap) {
        if (countMap[key] < minCount) {
            minCount = countMap[key];
            leastFrequentItem = key;
        }
    }
    return leastFrequentItem;
}

console.log(findLeastFrequentItem([3, 'c', 'c', 'a', 2, 3, 'c', 3, 'c', 2, 4, 9, 9]));

// 3. Remove Duplicates in an Array
function removeDuplicates(arr) {
    const countMap = {};
    arr.forEach(item => {
        if (countMap[item]) {
            countMap[item]++;
        } else {
            countMap[item] = 1;
        }
    });
    
    const result = arr.filter(item => countMap[item] === 1);
    return result;
}

console.log(removeDuplicates([7, 9, 1, 'a', 'a', 'f', 9 , 4, 2, 'd', 'd']));

// 4. Concat Arrays in a Matrix
function concatArrays(data) {
    let resultArray = [];
    for (let i = 0; i < data.length; i++) {
        let concatenatedString = '';
        for (let j = 0; j < data[i].length; j++) {
            if (j > 0) {
                concatenatedString += ' ';
            }
            concatenatedString += data[i][j];
        }
        resultArray.push(concatenatedString);
    }
    return resultArray;
}

let data = [
    ["The", "little", "horse"],
    ["Plane", "over", "the", "ocean"],
    ["Chocolate", "ice", "cream", "is", "awesome"], 
    ["this", "is", "a", "long", "sentence"]
]

console.log(concatArrays(data));