import { series } from "./data.js";
var datos = document.getElementById("datosSeries");
cargarDatos(series);
function cargarDatos(series) {
    series.forEach(function (value) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n            <th scope=\"row\">".concat(value.getId(), "</th>\n            <td><a href=\"").concat(value.getPaginaWeb(), "\" target=\"_blank\">").concat(value.getNombre(), "</a></td>\n            <td>").concat(value.getPlataforma(), "</td>\n            <td>").concat(value.getTemporadas(), "</td>\n            ");
        datos.appendChild(tr);
    });
}
