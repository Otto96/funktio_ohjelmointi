// TEHT 1

var toCelsius = (fahrenheit) => (5/9) * (fahrenheit-32);
var area = (radius) => Math.PI * radius * radius; 
// console.log(toCelsius(67));
// console.log(area(10));



var movies = [ 
		{ 
 			title: 'Harry Potter and the Deathly Hallows: Part 2', 
 			director: 'David Yates', 
 			release: 2011  
 		},
 		{ 
 			title: 'The Lord of the Rings: The Fellowship of the Ring', 
 			director: 'Peter Jackson', 
 			release: 2001  
 		}, 
 		{ 
 			title: 'Titanic', 
 			director: 'James Cameron', 
 			release: 1997 
 		}, 
 		{ 
 			title: 'Avatar', 
 			director: 'James Cameron', 
 			release: 2009 
 		}, 
 		{ 
 			title: 'The Hobbit: An Unexpected Journey', 
 			director: 'Peter Jackson', 
 			release: 2012 
 		}, 
 		{ 
 			title: 'The Matrix', 
 			director: 'Andy Wachowski', 
 			release: 1999 
 		}, 
 		{ 
 			title: 'Inception', 
 			director: 'Christopher Nolan', 
 			release: 2010 
 		}, 
 		{ 
 			title: 'The Town', 
 			director: 'Ben Affleck', 
 			release: 2010 
 		}, 
 		{ 
 			title: 'The Dark Knight Rises', 
 			director: 'Christopher Nolan', 
 			release: 2012 
 		}, 
 		{ 
 			title: 'My Neighbor Totoro', 
 			director: 'Hayao Miyazaki', 
 			release: 1988 
 		}, 
 		{ 
 			title: 'Spirited Away', 
 			director: 'Hayao Miyazaki', 
 			release: 2001 
 		} 
 	];


// TEHT 2

var bmovies = movies.map(x => {
    return [x.title, x.release]; 
});

// console.log(bmovies);


// TEHT 3
 
var cmovies = movies.filter(x => x.release > 2011);
// console.log(cmovies); // palauttaa Hobitin ja Batmanin

// TEHT 4

// Helsingin ilmasto on kovilla.
var sää = [-1,-2,5,6,3,-5,6,7,8,-9,-24,23,4,32,6,4,3,-5,-6,7,21,22,-23,24];

var ka = sää.filter(x => x >= 0);

// console.log(ka.reduce((a,b) => a+b/ka.length));

// TEHT 5

let kalevala = "Mieleni minun tekevi, aivoni ajattelevi lähteäni laulamahan, saa'ani sanelemahan, sukuvirttä suoltamahan, lajivirttä laulamahan. Sanat suussani sulavat, puhe'et putoelevat, kielelleni kerkiävät, hampahilleni hajoovat. Veli kulta, veikkoseni, kaunis kasvinkumppalini! Lähe nyt kanssa laulamahan, saa kera sanelemahan yhtehen yhyttyämme, kahta'alta käytyämme! Harvoin yhtehen yhymme, saamme toinen toisihimme näillä raukoilla rajoilla, poloisilla Pohjan mailla. Lyökämme käsi kätehen, sormet sormien lomahan, lauloaksemme hyviä, parahia pannaksemme, kuulla noien kultaisien, tietä mielitehtoisien, nuorisossa nousevassa, kansassa kasuavassa: noita saamia sanoja, virsiä virittämiä vyöltä vanhan Väinämöisen, alta ahjon Ilmarisen, päästä kalvan Kaukomielen, Joukahaisen jousen tiestä, Pohjan peltojen periltä, Kalevalan kankahilta. Niit' ennen isoni lauloi kirvesvartta vuollessansa; niitä äitini opetti väätessänsä värttinätä, minun lasna lattialla eessä polven pyöriessä, maitopartana pahaisna, piimäsuuna pikkaraisna. Sampo ei puuttunut sanoja eikä Louhi luottehia: vanheni sanoihin sampo, katoi Louhi luottehisin, virsihin Vipunen kuoli, Lemminkäinen leikkilöihin. Viel' on muitaki sanoja, ongelmoita oppimia: tieohesta tempomia, kanervoista katkomia, risukoista riipomia, vesoista vetelemiä, päästä heinän hieromia, raitiolta ratkomia, paimenessa käyessäni, lasna karjanlaitumilla, metisillä mättähillä, kultaisilla kunnahilla, mustan Muurikin jälessä, Kimmon kirjavan keralla.";

var array = 

console.log(array);
// console.log(esiintyvyys);