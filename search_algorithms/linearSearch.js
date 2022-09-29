// Find index of element in an array of dimension N; return -1 if not found

const array = [-5, 2, 10, 4, 6];

function linearSearch(arr, target){
 for(let i = 0; i < arr.length; i ++){
    if(arr[i] === target){
        return i;
    }
 }
 return -1;
}


console.log(linearSearch(array, 10)); // 2
console.log(linearSearch(array, 6)); // 4
console.log(linearSearch(array, 20)); // -1

// BigO = O(n)