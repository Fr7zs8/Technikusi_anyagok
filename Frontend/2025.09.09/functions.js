//Az osztály != objectum

class Szemely{
    constructor(nev, foglalkozas, szuletesEv){
        this.nev = nev;
        this.foglalkozas = foglalkozas;
        this.szuletesEv = szuletesEv;
    }

    hanyEves(){
        return (new Date().getFullYear()- this.szuletesEv);
    }
}

let sz1 = new Szemely("Kis Piskota", "pék", 1989);
console.log(sz1);

console.log(`${sz1.nev} ${sz1.hanyEves()} éves.`);

class Alkalmazott extends Szemely{
    #belepesikod;

    static bonus = 10; //10%

    constructor(nev, foglalkozas, szuletesEv, fiztes){
        super(nev, foglalkozas, szuletesEv);
        this.fiztes = fiztes;
    }

    setbelepesikod(kod){
        if(typeof(kod)== "number"){
            this.#belepesikod = kod;
        }
    }

    getbelepesiKod(){
        return this.#belepesikod;
    }

    set belepesiKod(kod){
        if(typeof(kod)== "number"){
            this.#belepesikod = kod;
        }
    }

    get belepesiKod(){
        return this.#belepesikod;
    }

    havifiezetes(){
        if(new Date().getMonth == 11){
            return this.fiztes*(1+Alkalmazott.bonus/100);
        }
        return this.fiztes;
    }

} 

let alk = new Alkalmazott("Kab Bea", "titkárnő", 2003, 600000);
alk.setbelepesikod(78654);
alk.belepesiKod = 2456;
//alk.belepesikod = "szexicsaj";

console.log(alk);

console.log(`${alk.nev} ehavi fizetése: ${alk.havifiezetes()} FT`)

