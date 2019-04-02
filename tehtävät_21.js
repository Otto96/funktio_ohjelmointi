// TEHT 1
// K-piste norm = 75-99, suur = 100-130, pisteelle pääsy antaa 60 pistettä, 
// joka metri ali/yli vie/antaa 2 pistettä

function laskePisteet(kPiste, lisäpisteet){
    return function (x) {
        if (lisäpisteet == 1.8) {
            return (x-kPiste)*lisäpisteet+60;
        } else {
            return (x-kPiste)*lisäpisteet+60;
        }
    };
} 

let lahtinormi = function(pituus) {
    return (laskePisteet(78,1.8)(pituus));
};
let lahtisuuri = function(pituus) {
    return (laskePisteet(120,2.0)(pituus));
};

/** console.log("Lahti normaali mäki 77m hyppy: ", lahtinormi(77), 
            "\nLahti suuri mäki 140m hyppy: ", lahtisuuri(140));
**/


// TEHT 2

const Auto = (function() {
    
    const suojatut = new WeakMap();
    
    class Auto{
        
        constructor(p_tankki, p_matkamittari){
            this.tankki = p_tankki, 
            suojatut.set(this, {matkamittari: p_matkamittari});
        }
        
        getTankki(){return this.tankki;}
        getMittari(){return suojatut.get(this).matkamittari;}
        
    } 
    
    return Auto;

})();

const aja = function(Auto) {
    return new Auto(this.tankki-10,this.matkamittari+1);
};

const tankkaa = function(Auto) {
    return new Auto(this.tankki==100,this.matkamittari);
};

const lada = new Auto(100,600);

console.log(" Ladan tankissa on ",lada.getTankki(), " litraa bensaa.\n",
            "Matkamittari näyttää ", lada.getMittari(), " km.");

aja(lada);

console.log(" Ladan tankissa on ",lada.getTankki(), " litraa bensaa.\n",
            "Matkamittari näyttää ", lada.getMittari(), " km.");
            
tankkaa(lada);

console.log(" Ladan tankissa on ",lada.getTankki(), " litraa bensaa.\n",
            "Matkamittari näyttää ", lada.getMittari(), " km.");