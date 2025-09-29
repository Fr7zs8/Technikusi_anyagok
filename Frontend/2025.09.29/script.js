function $(str){
    return document.getElementById(str);
}

function kereses(){
    let keresett = $("keresettelem").value;
    keresett.trim();
    keresett.toLowerCase();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${keresett}&appid=ae613c2b697ed18b77812bd6de5afd3b`;

    fetch(url)
    .then(response => response.json())
    .then(adatok => {
        console.log(adatok);
        $("tbody").innerHTML = "";
        Kiiras(adatok.name, kelvinToCelzius(adatok.main.temp), adatok.main.humidity + "%", adatok.weather[0].icon, adatok.weather[0].description, adatok.main.pressure + " hPa", kelvinToCelzius(adatok.main.temp_max), kelvinToCelzius(adatok.main.temp_min), kelvinToCelzius(adatok.main.feels_like) + "-nak érződik");
    })
    .catch()
}

$("btn").addEventListener('click', () => kereses());

function Kiiras(hely, fokot, para, icon, desc, pressure, tempmax, tempmin, fellslike){
    const sortr = document.createElement("tr");
    $("tbody").appendChild(sortr);

    makeRow(sortr, hely);
    makeRow(sortr, fokot);
    makeRow(sortr, fellslike);
    makeRow(sortr, tempmax);
    makeRow(sortr, tempmin);
    makeRow(sortr, para);
    

    const kapetd = document.createElement("td");
    const img = document.createElement("img");
    img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    kapetd.appendChild(img);
    sortr.appendChild(kapetd);

    makeRow(sortr, desc);
    makeRow(sortr, pressure);
    


}

function kelvinToCelzius(kelvin){
    let celzius = Math.round(kelvin - 273);
    return `${celzius} °C`;
}

function makeRow(parent, innerHTML){
    const td = document.createElement("td");
    td.innerHTML = innerHTML;
    parent.appendChild(td);
}


