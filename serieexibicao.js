import retornaSerieDia from "./seriefuncoes/seriefuncoes.js";
import dias from "./serieodia/seriedias.js";

let data = new Date()
let diaSemana = data.getDay()
let dia = dias;

let serieDoDia = retornaSerieDia(diaSemana);

console.log(serieDoDia);
console.log(dia);
