let alunos = [
    {nome: 'Malu', idade: 17},
    {nome: 'Luana', idade: 17},
    {nome: 'Gustavo', idade: 18},
    {nome: 'Julia', idade: 18}
];

function verificaAlunosMaiores(aluno) {
    return (aluno.idade > 17);
}

function filtraAlunosMaiores(alunos) {
    let alunosFiltro = alunos.filter(verificaAlunosMaiores);
    return alunosFiltro;
}

function retornaNomesAlunos(alunos) {
    let nomes = alunos.filter(aluno => aluno.nome)
    return nomes;
}

function imprimeNomesAlunos (arrayNomes) {
    arrayNomes.forEach(nome => {
        console.log(nome);
    });
}

let alunosMaiores = verificaAlunosMaiores(alunos);
let nomesAlunos = retornaNomesAlunos(alunosMaiores);
imprimeNomesAlunos(nomesAlunos);