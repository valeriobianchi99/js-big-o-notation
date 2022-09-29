// N of moves to move all disks on one rod (from A to C)

/*
            -|-         |           |
          ---|---       |           |  
_________----|----______|___________|_______
             A          B           C
*/


function towerOfHanoi(n, fromRod, toRod, usingRod){
 if(n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
 }
 towerOfHanoi(n-1, fromRod, usingRod, toRod);
 console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
 towerOfHanoi(n-1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, 'A', 'C', 'B') // shift 3 disks from A to C using B

// BigO = 2^n - 1 (2^n as n increases) = O(2^n)