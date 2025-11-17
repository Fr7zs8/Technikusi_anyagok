let AUTOK = [
    {
        rendszam: "ERT-123",
        evjarat: 2001,
        fogyasztas: 5.9
    },
    {
        rendszam: "RCD-946",
        evjarat: 2021,
        fogyasztas: 7.2
    },
    {
        rendszam: "PTP-758",
        evjarat: 2024,
        fogyasztas: 4.7
    }
];

export function listaz(){
    return AUTOK;
}

export function felvesz(ujauto){
    if(ujauto.rendszam == "") return;
    if(AUTOK.find(a => a.rendszam == ujauto.rendszam) != undefined) return;
    //AUTOK.push(ujauto); a state nem mozográ
    AUTOK = [...AUTOK, ujauto]
}

export function torol(rendszam){
    AUTOK = AUTOK.filter(auto => auto.rendszam != rendszam);
}