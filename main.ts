import {Serie} from "./serie.js";
import {series} from "./data.js";

let datos: HTMLElement = document.getElementById("datosSeries")!;
let carta: HTMLElement = document.getElementById("cartaInfo")!;
let average: HTMLElement = document.getElementById("avg")!;

cargarDatos(series);
average.innerHTML = `<p>Seasons average: ${averageCalc(series)}</p> `;

function cargarDatos(series: Serie[]) {
    series.forEach(value => {
        let tr: HTMLElement = document.createElement("tr");
        tr.setAttribute("class", "clickable");
        tr.innerHTML = `
            <th scope="row">${value.getId()}</th>
            <td><a href="${value.getPaginaWeb()}" target="_blank">${value.getNombre()}</a></td>
            <td>${value.getPlataforma()}</td>
            <td>${value.getTemporadas()}</td>
            `
        datos.appendChild(tr);

        tr.onclick = function () {
            cargarCarta(value);
        };
    });
}

function averageCalc(series: Serie[]) {
    let average: number = 0;
    let cant: number = 0;
    series.forEach(value => {
        cant++;
        average += value.getTemporadas();
    });
    return average/cant;
}

function cargarCarta(serie: Serie) {
    carta.innerHTML = `
        <div class="card">
         <div class="card-header"><img src="${serie.getImagen()}" alt="${serie.getNombre()}" width="473" height=" "></div>
         <div class="card-title">${serie.getNombre()}</div>
         <div class="card-body">${serie.getInfo()}</div>
         <div class="card-footer"><a href="${serie.getPaginaWeb()}" target="_blank">${serie.getPaginaWeb()}</a></div>
        </div>
        `
}
