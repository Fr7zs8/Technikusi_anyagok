function osszead(a,b){
    return a+b;
}

let osszead2 = function(a, b){
    return a+b;
}

let osszead3 = (a, b) => {
    return a+b;
}

let negyzet = (n) => {return n*n}

let negyezet2 = n => n*n;

console.log(typeof(negyezet2)); //function
console.log(typeof(negyezet2(2))); //Number

let alkalmazott = {
    nev: "Tóth Géza",
    eletkor: 28,
    beoztas: "pék"
};

console.log(alkalmazott);
console.log(typeof(alkalmazott));
console.log(alkalmazott.nev);
console.log(alkalmazott["nev"]);
console.log(alkalmazott[1]); //Nem jó index alapján
console.log("Hello Világ");


let a = [2,9,11,-2,4];
console.log(typeof(a));
console.log(a);
console.log(a[3]); //index működik

const c = 3;
//c = 2;

const obj = {
    nev: "Béla",
    nem: "férrfi"
};

obj.nev = "Jani";

function gombnyomas(szin){
    document.body.style.backgroundColor = szin;
}

document.getElementById("btn").addEventListener("click", () => gombnyomas('#00ff00'));

