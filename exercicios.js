const dataHoje = new Date();
const dataNatal = new Date('2030-12-25T00:00');

const timeHoje = dataHoje.getTime();
const timeNatal = dataNatal.getTime();

const tempoFalta = timeNatal - timeHoje;

const segundos = tempoFalta / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

if(horas > 1)
{
    console.log("Faltam "+horas.reduce(2)+" horas para o Natal de 2030");
}
else
{
    console.log("Falta "+horas.reduce(2)+" hora para o Natal de 2030");
}