
const array = [-5, 2, 4, 6, 10];


function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length);
}

function search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    if(target === arr[middleIndex]){
        return middleIndex
    }
    if(target < arr[middleIndex]) return search(arr, target, leftIndex, middleIndex - 1)
    else return search(arr, target, middleIndex + 1, rightIndex)
}



console.log(recursiveBinarySearch(array, 10)); // 4
console.log(recursiveBinarySearch(array, 6)); // 3
console.log(recursiveBinarySearch(array, 20)); // -1

// Big-O = O(logn)