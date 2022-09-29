function isPowerOfTwo(n) {
    if(n<1){
        return false
    }
    while(n>1){ 
        
        if(n%2 !== 0 ){
            return false;
        }
        n = n/2;
    }
    return true;
}

console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(32));
console.log(isPowerOfTwo(1024));

// n = 2^x

// loop wiht input (n) divided by half = O(logn)

// alternative solution

function isPowerOfTwoBitWise(n){
    if(n < 1) {
        return false
    }

    return ( n & (n-1)) === 0;  // in binary every power of two ends with 0;
                                // for ex 4 = 1000 ( that is a power of two ) and 3 = 100 -> so 1000 & 0100 = 0000;
}

// in this case is very powerful = O(1)
