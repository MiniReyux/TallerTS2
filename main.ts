import {Serie} from "./serie.js";
import {series} from "./data.js";

let datos: HTMLElement = document.getElementById("datosSeries")!;

cargarDatos(series);

function cargarDatos(series: Serie[]) {
    series.forEach(value => {
        let tr: HTMLElement = document.createElement('tr');
        tr.innerHTML = `
            <th scope="row">${value.getId()}</th>
            <td><a href="${value.getPaginaWeb()}" target="_blank">${value.getNombre()}</a></td>
            <td>${value.getPlataforma()}</td>
            <td>${value.getTemporadas()}</td>
            `
        datos.appendChild(tr);
    });
}

