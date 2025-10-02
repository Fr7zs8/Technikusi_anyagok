function $(str){
    return document.getElementById(str);
}
function lekeres(){
    $("adatok").innerHTML = ""
    const random = Math.floor(Math.random() * 150)+1;

    const url = `https://pokeapi.co/api/v2/pokemon/${random}/`;

        fetch(url)
        .then(response => response.json())
        .then(adatok => {
            console.log(adatok);
            megjelenites(adatok.stats[0].base_stat, adatok.name, adatok.types[0].type.name, adatok.stats[1].base_stat, adatok.stats[3].base_stat, adatok.stats[5].base_stat, adatok.sprites.other["official-artwork"].front_default)
        })
        .catch()
}

function megjelenites(hp, name, type, attack, defence, speed, image){
    const hpdiv = document.createElement("div");
    hpdiv.id = "hpdiv";
    hpdiv.innerHTML = "Hp: " + hp;
    $("adatok").appendChild(hpdiv);

    const namediv = document.createElement("div");
    namediv.id = "namediv";
    namediv.innerHTML = name;
    $("adatok").appendChild(namediv);

    
    const img = document.createElement("img");
    img.src = image;
    $("adatok").appendChild(img);

    const typediv = document.createElement("div");
    typediv.id = "typediv";
    typediv.innerHTML = type;
    $("adatok").appendChild(typediv);

    const attackdiv = document.createElement("div");
    attackdiv.id = "attackdiv";
    attackdiv.innerHTML = "Attack: "+ attack;
    $("adatok").appendChild(attackdiv);

    const defencediv = document.createElement("div");
    defencediv.id = "defencediv";
    defencediv.innerHTML = "Defence: " + defence;
    $("adatok").appendChild(defencediv);

    const sppeddiv = document.createElement("div");
    sppeddiv.id = "speeddiv";
    sppeddiv.innerHTML = "Speed: "+ speed;
    $("adatok").appendChild(sppeddiv);
}

