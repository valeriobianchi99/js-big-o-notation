// Given a staircase of n steps, count the number of distinct ways to clim to the top. You can clim 1 or 2 steps at a time
// example n=4, climbingStaircase(4) = 5 | (1,1,1,1) (1,1,2) (1,2,1) (2,1,1) (2,2)

function climbingStaircase(n){
    if(n<=2) return n
    return climbingStaircase(n-2)+climbingStaircase(n-1)
}

console.log(climbingStaircase(3))
console.log(climbingStaircase(4))
console.log(climbingStaircase(5))
console.log(climbingStaircase(6))
console.log(climbingStaircase(7))
console.log(climbingStaircase(8))

// BigO = O(n)