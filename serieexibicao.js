import retornaSerieDia from "./seriefuncoes/seriefuncoes.js";
import serie from "./seriedados/seriedados.js";

let data = new Date()
let diaSemana = data.getDay()

let serieDoDia = retornaSerieDia(serie, diaSemana);

console.log(serieDoDia);