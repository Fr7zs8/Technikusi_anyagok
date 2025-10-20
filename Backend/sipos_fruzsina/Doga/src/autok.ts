export interface Iautok{
    id: number | "",
    rendszam: string | "",
    tipus: string | "",
    evjarat: number | "",
    szin: string | ""

}

export class Autok implements Iautok{
    id: number | ""
    rendszam: string | ""
    tipus: string | ""
    evjarat: number | ""
    szin: string | ""

    constructor(id:number, rendszam:string, tipus:string, evjarat:number, szin:string){
        this.id = id || "";
        this.rendszam = rendszam || "";
        this.tipus = tipus || "";
        this.evjarat = evjarat || "";
        this.szin = szin || ""
    }
}
