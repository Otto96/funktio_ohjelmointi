// V1
// TEHT 1

function onPalindromi(sana) {
    var len = sana.length;
    if (len < 2)
        return true;
    else if (sana[0] != sana[len-1])
        return false;
    else 
        return onPalindromi(sana.slice(1, len-1))
}

// console.log("saippuakauppias ", onPalindromi("saippuakauppias")) // returns true
// console.log("abc ", onPalindromi("abc")) // returns false


// TEHT 2

function syt(p, q) {
    if (q == 0)
        return p;
    else 
        return syt(q, p%q);
}

// console.log(syt(102, 68)); // returns 34
// console.log(syt(132,222)); // returns 6


// TEHT 3

function kjl(p, q) {
    if (q == 0 && p != 1)
        return false;
    else if (p == 1)
        return true;
    else 
        return kjl(q, p%q);
}

// console.log(kjl(102,68)); // returns false
// console.log(kjl(35,18)); // returns true

// TEHT 4

function powah(luku, ap, potenssi, x) {
    if (potenssi <= x) {
        return luku;
    } else {
        return powah(luku*ap, ap, potenssi, x+1)
    }
}

// console.log(powah(2,2,2,1)); // 2^2=4
// console.log(powah(2,2,10,1)); // 2^10=1024
// console.log(powah(3,3,3,1)); // 3^3=27

// TEHT 5

function käännä(lista, y){
    var lkm = lista.length;
    if (lkm <= y) {
        return lista;
    } else {
        return 
    }
}

// console.log(käännä([1,2,3], 1));