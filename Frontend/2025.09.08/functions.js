const autok = ["Ford", "Audi", "Mazda", "Toyota", "Lada", "Reanault"];

console.log(autok);
console.log(`A tömb elemszáma: ${autok.length}`);

for(let i = 0; i< autok.length; i++){
    console.log(autok[i]);
}

autok.forEach((value) => {
    console.log(value + "asd");
});

autok.push("Chevrolet");
autok.push("BMW");

autok.pop();

console.log(autok);

const szurtautok = autok.filter((value) => {
    return value.toLowerCase().includes("a");
})

console.log(szurtautok);

console.log(autok.sort());
console.log(autok.sort().reverse());

console.log(autok.indexOf("Audi"));
console.log(autok.lastIndexOf("BMW"));

console.log(autok.find((value) => {
    return value == "Audi";
}));

console.log(autok.find((value) => {
    return value == "BMW";
}));

// egy tömböt felvenni 

let szamok = [9, 122, -3, 5, 78];

/*
1; füzünk a tömbhöz véletlen számokat -100 100 között 10 dbot
2; egy uj tömbe válogassuk a pozitiv páos számokat
3; döntsük el hogy tartalmaz e a tömb 100 nál nagyobb számot
4; határozuk meg hogy melyik a legnagyobb elem és irjuk ki
5; füzzünk be uj szamot a szomok tömb elejére

*/

for(let i = 0; i< 10; i++){
    szamok.push(Math.floor(Math.random()*201)-100);
}

console.log(szamok);

const ujtomb = szamok.filter((value) => {
    if(value %2 === 0 && value >= 0){
        return value
    }
})
console.log(ujtomb);
/*
const ujtomb2 = szamok.filter((value) => {
    value>0&& value%2===0
});*/


/*
console.log(szamok.filter((value) =>{
    return value > 100
}).length > 0);
*/

console.log(szamok.find((value) => {
    value > 100
}) != undefined );

/*
szamok.sort((a, b) => a>b? 1:-1 );

function osszehasonlit(a,b){
    if(a> b){
        return 1;
    }
    else{
        return -1;
    }
}

console.log(szamok);
*/

console.log(Math.max(9,3,8,12));

console.log(Math.max(...szamok));

szamok = [143, ...szamok];

console.log(szamok)

let ossszefuzott= [1,2,3].concat([4,5,6]);

let t1 = [1,2,3];
let t2 = [4,5,6];
let összefu = [...t1, ...t2];

//irjunk függvénytamely bárhánydarabszamot összead

function osszead(...szamos){
    let sum = 0;
    szamos.forEach(value => {sum+= value});
    return sum;
}

console.log(osszead(2,3));
console.log(osszead(2,3,5,7));

//ugy megyunk végig a tömb elemein hogy uj tombot hozunk létre

const legujabbszamok = szamok.map(value => value*2+1);
console.log(legujabbszamok);