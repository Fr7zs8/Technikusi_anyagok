function $(str){
    return document.getElementById(str);
}

let url = `https://potterapi-fedeperin.vercel.app/en/characters/random`;

$("btn").addEventListener("click", () =>{
    fetch(url).then( (value) => value.json()).then((adat) => {
        
        megjelenitAdatokat(adat.fullName, adat.birthdate, adat.image, adat.hogwartsHouse);
    })
})

function megjelenitAdatokat(name, birthdate, image, house){
    const existingDiv = document.getElementById("caracteradatok");
    if (existingDiv) {
        existingDiv.remove();
    }

    const alap = document.createElement("div");
    alap.id = "caracteradatok";
    document.body.appendChild(alap);


    alap.classList.remove(
        "house-border-Gryffindor",
        "house-border-Slytherin",
        "house-border-Ravenclaw",
        "house-border-Hufflepuff"
    );

    if (house) {
        alap.classList.add(`house-border-${house}`);
    }

    const nev = document.createElement("h3");
    nev.innerHTML = name;
    alap.appendChild(nev);

    const szuletesidatum = document.createElement("h4");
    szuletesidatum.innerHTML = birthdate;
    alap.appendChild(szuletesidatum);

    const kep = document.createElement("img");
    kep.src = image;
    alap.appendChild(kep);

    const haz = document.createElement("div");
    haz.classList.add("house-badge");

    if (house) {
        haz.classList.add(`house-${house}`);
        haz.innerText = house;
    } else {
        haz.innerText = "Ismeretlen ház";
    }

    alap.appendChild(haz);
}
