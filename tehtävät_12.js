// TEHT 1

let vertaa = function() {
    return function(x,y){
        if (x>y)        { return 1;  } 
        else if (y>x)   { return -1; }
        else            { return 0;  }
    }
}();

/**
console.log(vertaa(2,5)); // returns -1
console.log(vertaa(5,2)); // returns 1
console.log(vertaa(5,5)); // returns 0
**/

// TEHT 2

var a = [-10,-12,1,5,14,18,24,17,15,6,-2,-20];
var b = [-11,-13,-1,6,15,19,25,18,16,7,-5,-24];

function aVertailija(f, p, q) {
    var i, laskin = 0;
    for (i; i < 12; i++) {
        if (f(p,q) == -1) {
            return laskin += 1;
        }
    }
return laskin;
}

console.log(aVertailija(vertaa,a,b)); // pitäisi returnaa 7