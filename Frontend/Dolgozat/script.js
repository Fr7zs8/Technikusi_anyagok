function $(str){
    return document.getElementById(str);
}

function karakter(){
    const url = "https://randomuser.me/api/"

    fetch(url)
    .then(response => response.json())
    .then(adatok =>{
        $("prof").innerHTML = "";
        const emberek = adatok.results[0]
        const fullname = emberek.name.first + " "+ emberek.name.last;
        const location = emberek.location.country +", "+ emberek.location.city + ", " + emberek.location.street.name + " " + emberek.location.street.number;
        let idvalue = emberek.id.value;
        if(emberek.id.value === null || emberek.id.value === undefined || emberek.id.value === ""){
            idvalue = "-";
        }

        megjelenites(emberek.picture.medium, fullname, location, emberek.email, idvalue);
    })
}

function megjelenites(image, name, address, email, id){

    const alap = document.createElement("div");
    alap.id = "Profil";
    $("prof").appendChild(alap);

    const img = document.createElement("img");
    img.src = image;
    alap.appendChild(img);

    const nameh3 = document.createElement("h3");
    nameh3.innerHTML = name;
    alap.appendChild(nameh3);

    const cim = document.createElement("p");
    cim.innerHTML = "Address: " + address;
    alap.appendChild(cim);

    const emailcim = document.createElement("p");
    emailcim.innerHTML = "E-mail: " + email;
    alap.appendChild(emailcim);

    const idp = document.createElement("p");
    idp.innerHTML = "ID: " + id;
    alap.appendChild(idp);

}

$("btn").addEventListener("click", () => {
    karakter();
})
