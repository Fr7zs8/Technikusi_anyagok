let data = [
    {
        nev: "József Attila halála",
        evszam: "1937",
        helyszin: "Balatonszárszó"
    },
    {
        nev: "Honfoglalás kezdete ",
        evszam: "895",
        helyszin: "Alföld"
    },
    {
        nev: "Jókai Mór halála",
        evszam: "1904",
        helyszin: "Budapest"
    }
]

export function listaz(){
    return data;
}

export function felvesz(ujEsemeny){
    if(ujEsemeny.nev == "") return;
    if(data.find(e => e.nev == ujEsemeny.nev) != undefined) return;
    data = [...data, ujEsemeny]
}

export function torol(nev){
    data = data.filter(esemeny => esemeny.nev != nev)
}

export default data;