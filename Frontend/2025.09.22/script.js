function $(str){
    return document.getElementById(str);
}

function kereses(){
    let kereset = $("input-keresett").value;
    //console.log(kereset);
    kereset = kereset.trim();

    kereset = kereset.toLowerCase();

    if(kereset.indexOf(' ') >0)
        kereset.replaceAll(' ', '+');

    const url = `https://itunes.apple.com/search?term=${kereset}&media=music&limit=200`;

    fetch(url)
    .then(respose => respose.json())
    .then(adatok =>{
        const zenek = adatok.results;
        console.log(zenek);

        zenek.forEach(element => {
            newRow(element.artistName, element.trackName,element.releaseDate.substring(0,4), element.primaryGenreName, idoValtas(element.trackTimeMillis), element.previewUrl);
        });
    })
    .catch();
}

function newRow(eloado, cim, megjelenes, mufaj, hossz, url){
    let tr = document.createElement("tr");

    let eloadotd = document.createElement("td");
    eloadotd.innerHTML = eloado;
    
    let cimtd = document.createElement("td");
    cimtd.innerHTML = cim;
    cimtd.classList.add("cim-td");

    let megjelenestd = document.createElement("td");
    megjelenestd.innerHTML = megjelenes;

    let mufatd = document.createElement("td");
    mufatd.innerHTML = mufaj;

    let hosstd = document.createElement("td");
    hosstd.innerHTML = hossz;

    cimtd.onclick = () =>{
        if($("lejatszo") != null){
            $("lejatszo").remove();
        }

        const lejatszo = document.createElement('audio');
        lejatszo.id = "lejatszo";
        lejatszo.controls = true,
        lejatszo.autoplay = true;

        const src = document.createElement('source');
        src.src = url;

        lejatszo.appendChild(src);
        $("zenelejetszo").appendChild(lejatszo);
    }

    tr.appendChild(eloadotd);
    tr.appendChild(cimtd);
    tr.appendChild(megjelenestd);
    tr.appendChild(mufatd);
    tr.appendChild(hosstd);

    $("zenek").appendChild(tr);

}

function idoValtas(millisec){
    let h = Math.floor(millisec / (60*60*1000))
    millisec = millisec -(h*60*60*1000);
    let m = Math.floor(millisec / (60*1000));
    millisec = millisec -(m*60*1000);
    let s = Math.floor(millisec/1000);
    let ms = millisec%1000;

    let str = "";
    if(h>0)
        str += h.toString().padStart(2, '0') + ":";
    str += m.toString().padStart(2, '0') + ":";
    str += s.toString().padStart(2, '0') + ":";
    str += ms.toString().padStart(3, '0');

    return str;
}


$("btn-kereses").addEventListener("click", kereses);
$("input-keresett").addEventListener('keypress', event =>{
    if(event.key == 'Enter')
        kereses();
});

