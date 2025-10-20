export function fetchAndRenderCars(url) {
    fetch(url)
        .then(res => res.json())
        .then(adatok => {
            for (let a of adatok) {
                RenderTable(a.id, a.rendszam, a.tipus, a.evjarat, a.szin);
            }
        })
        .catch(err => console.error("Hiba az autók lekérésekor:", err));
}

function createRows(parent, adat) {
    const td = document.createElement("td");
    td.textContent = adat;
    parent.appendChild(td);
}


function RenderTable(id, rendszam, tipus, evjarat, szin) {
    const tbody = document.getElementById("tbody");
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    createRows(tr, id);
    createRows(tr, rendszam);
    createRows(tr, tipus);
    createRows(tr, evjarat);
    createRows(tr, szin);

    const tdDelete = document.createElement("td");
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("delete-btn");
    btnDelete.textContent = "Törlés";
    btnDelete.style.cursor = "pointer";

    btnDelete.addEventListener("click", () => {
        deleteCar(id, tr);
    });

    tdDelete.appendChild(btnDelete);
    tr.appendChild(tdDelete);
}


function addNewCar(carData) {
    const url = "http://localhost:3000/api/auto";

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(carData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Sikertelen mentés");
        }
        return response.json();
    })
    .then(data => {
        const ujAuto = data.Succes[data.Succes.length - 1];
        RenderTable(ujAuto.id, ujAuto.rendszam, ujAuto.tipus, ujAuto.evjarat, ujAuto.szin);
        clearAndHideForm();
    })
    .catch(error => {
        console.error("Hiba történt:", error);
    });
}


export function toggleFormVisibility() {
    const form = document.getElementById("formContainer");
    form.classList.toggle("hidden");
}


function clearAndHideForm() {
    const form = document.getElementById("carForm");
    form.reset();
    document.getElementById("formContainer").classList.add("hidden");
}


export function handleFormSubmit(event) {
    event.preventDefault();

    const rendszam = document.getElementById("rendszam").value.trim();
    const tipus = document.getElementById("tipus").value.trim();
    const evjarat = parseInt(document.getElementById("evjarat").value);
    const szin = document.getElementById("szin").value.trim();

    if (!rendszam || !tipus || isNaN(evjarat) || !szin) {
        alert("Kérlek tölts ki minden mezőt helyesen!");
        return;
    }

    const carData = { rendszam, tipus, evjarat, szin };
    addNewCar(carData);
}

function deleteCar(id, rowElement) {
    const url = "http://localhost:3000/api/auto"

    fetch(`${url}/${id}`, {
        method: "DELETE",
    })
    .then(res => {
        if (res.status === 204) {
            // Sor eltávolítása a táblázatból
            rowElement.remove();
        } else {
            throw new Error("Sikertelen törlés");
        }
    })
    .catch(err => {
        console.error("Hiba törléskor:", err);
        alert("Nem sikerült törölni az elemet.");
    });
}
