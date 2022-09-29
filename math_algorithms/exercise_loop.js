let v, g;

for (v=0; v<=4; v++){
    console.log("v="+v);
    g=10;
    switch(v){
        case 0: console.log("è nullo");
        
        case 1: do {
            console.log(g+" ");
            g=g-2;
        } while ( v<= g);
        case 4: console.log("g="+g + " v="+v); break;
    }
}