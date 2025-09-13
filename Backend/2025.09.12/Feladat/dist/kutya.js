class Kutya {
    id;
    nev;
    fajta;
    nem;
    eletkor;
    kepUrl;
    constructor(dog) {
        this.id = dog.id || null;
        this.nev = dog.nev;
        this.fajta = dog.fajta;
        this.nem = dog.nem;
        this.eletkor = dog.eletkor;
        this.kepUrl = dog.kepUrl || null;
    }
    get Id() {
        return this.id;
    }
    set Id(id) {
        this.id = id;
    }
    dog() {
        const dog = {
            id: this.id,
            nev: this.nev,
            fajta: this.fajta,
            nem: this.nem,
            eletkor: this.eletkor,
            kepUrl: this.kepUrl,
        };
        return dog;
    }
    tablazat(data) {
        const table = document.createElement("table");
        document.body.appendChild(table);
        const thead = document.createElement("thead");
        table.appendChild(thead);
        const tr = document.createElement("tr");
        thead.appendChild(tr);
        const fejlec = ["Id", "Név", "Fajta", "Nem", "Élekor", "Kép"];
        for (let fejl of fejlec) {
            const th = document.createElement("th");
            th.innerHTML = fejl;
            tr.appendChild(th);
        }
        const tbody = document.createElement("tbody");
        table.appendChild(tbody);
        for (let ku of data) {
            console.log(ku);
            const tr = document.createElement("tr");
            tbody.appendChild(tr);
            this.maketd(String(ku.id), tr);
            this.maketd(ku.nev, tr);
            this.maketd(ku.fajta, tr);
            if (ku.nem == true) {
                const nem = "lány";
                this.maketd(nem, tr);
            }
            else {
                const nem = "fiú";
                this.maketd(nem, tr);
            }
            this.maketd(String(ku.eletkor), tr);
            const td = document.createElement("td");
            const image = document.createElement("img");
            image.src = String(ku.kepUrl);
            td.appendChild(image);
            tr.appendChild(td);
        }
    }
    maketd(elem, tr) {
        const td = document.createElement("td");
        td.innerText = elem;
        tr.appendChild(td);
    }
}
class Maci {
}
export default Kutya;
export { Maci };
