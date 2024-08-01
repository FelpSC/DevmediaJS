import entradaDados from 'readline-sync';
opcoesInicio()

function opcoesInicio (){
    console.log('------------QUIZ DE CONHECIMENTOS GERAI--------------\n');
    var opcoes = entradaDados.question("Selecione uma das opcoes:\n 1 - Inicio Quiz \n 2 - Ranking de Jogadores \n");

    if (opcoes == 1 ){
        inicioQuiz();
    }else if (opcoes == 2){
        rankingJogadores();
    }else{
        console.log("Opcao invalida!");
        opcoesInicio();
    }

}



function inicioQuiz(){
    console.log('------------QUIZ DE CONHECIMENTOS GERAI--------------\n');
    var jogador = entradaDados.question("Insira seu nome\n");
    console.log('Seja bem vindo '+jogador+'! vamos começar\n');



    var perguntas = [
        { id:1, pergunta:'Qual o Nome do Heroi Tagarela?\n', resposta:'DeadPool'},
        { id:2, pergunta:'Qual o Nome do Heroi Amigo da Vizinhanca?\n', resposta:'Homem-Aranha'},
        { id:3, pergunta:'Qual o Nome do Verde Esmeralda?\n', resposta:'Hulk'},
        { id:4, pergunta:'Quem seria o Personagem mais inteligente do MCU?\n', resposta:'Tony Stark'},
        { id:5, pergunta:'Qual o nome do mago Supremo?\n ', resposta:'Strange'},
        { id:6, pergunta:'Qual o Maior Vilao Que os herois ja enfrentaram?\n', resposta:'Thanos'},
        { id:7, pergunta:'Sao quantas as Joias do infinito?\n', resposta:'6'},
        { id:8, pergunta:'Qual o Nome de Wolverine?\n', resposta:'Logan'},
        { id:9, pergunta:'Qual o Maior Telepata do MCU?\n', resposta:'Chavier'},
        { id:10, pergunta:'Quem seria o Deus dos Matelos?\n', resposta:'Thor'},
        { id:11, pergunta:'Quem seria o hospedeiro da Fenix?\n', resposta:'Jean Grey'},
        { id:12, pergunta:'Quem Controla o Metal?\n', resposta:'Magneto'},
        { id:13, pergunta:'Qual o nome dado a uma ilha, por ser um Celestial?\n', resposta:'Ilha de Tiamut'},
        { id:14, pergunta:'Qual o maior Vampiro das Telonas (quadrinhos)?\n', resposta:'Blade'},
        { id:15, pergunta:'Qual o nome do Homem-Aranha?\n', resposta:'Petter Parker'},
        { id:16, pergunta:'o nome do Quarteto eh ...\n', resposta:'Fantastico'},
        { id:17, pergunta:'Qual o nome do Coelho espacial?\n', resposta:'Rocket Raccon'},
        { id:18, pergunta:'Quem eh o melhor amigo do Cap?\n', resposta:'Buck'},
        { id:19, pergunta:'Qual o Nome da Viuva-Negra?\n', resposta:'Natasha Romanov'},
        { id:20, pergunta:'Qual o Maior vilao do Homem-Aranha?\n', resposta:'Venom'},
        { id:21, pergunta:'Quem interpreta o Hulk nas telonas?\n', resposta:'Mark Ruffalo'},
        { id:22, pergunta:'Qual Personagem Mais Forte e Nerfadaco do MCU?\n', resposta:'Feiticeira Escarlate'},
        { id:23, pergunta:'Qual eh o universo do MCU?\n', resposta:'616'},
        { id:24, pergunta:'Quem fundou a Marvel?\n', resposta:'Stan Lee'},
        { id:25, pergunta:'Qual vilao que viaja pelo multiverso?\n', resposta:'Kang'},
        { id:26, pergunta:'Quem eh conhecido nos quadrinhos por ter a missao de matar Thanos?\n', resposta:'Jax'},
        { id:27, pergunta:'Qual o Par Romantico de Peter Quil?\n', resposta:'Gamora'},
        { id:28, pergunta:'Pai de Todos\n', resposta:'Odin'},
        { id:29, pergunta:'Qual o nome do grupo de herois apresentado em Dr Estranho e o multiverso da loucura?\n', resposta:'Os Iluminati'},
        { id:30, pergunta:'Qual Filme iniciou o MCU?\n', resposta:'Homem de Ferro'},

    ];


    var contador = 1;
    var acertos = 0;
    // var pontuacao = acertos;


    function arrayPerguntas(array){
        
        var respostas = entradaDados.question('\n Pergunta de Numero '+contador+'\n'+array.pergunta);
        contador++

        if ( respostas === array.resposta){
            acertos = acertos + 1;
        }else{
            console.log('Resposta Errada; Resposta certa: '+array.resposta);
            acertos = acertos + 0;
        }

    }

    const randomPerguntas = perguntas.sort(() => Math.random() - 0.5);
    const perguntasSelecionadas = randomPerguntas.slice(0, 10);
    perguntasSelecionadas.forEach(arrayPerguntas);

    // Criar uma função aqui !

    if (acertos == 10){
        console.log('Parabéns '+jogador+'! Você teve um total de ' +acertos+'/10 Acertos! Você sabe tudo sobre o MCU');
        opcoesInicio()
        
    }else if (acertos >= 6 && acertos <= 9){
        console.log('Parabéns '+jogador+'! Você teve um total de '+acertos+'/10 Acertos! Faltou Pouco para ter matado todo o Quiz!');
        opcoesInicio()

    }else if( acertos >= 3 && acertos <= 5){
        console.log('Perdeu Alguns Filmes/Séries '+jogador+'? Você teve um total de '+acertos+'/10, Precisa estudar mais do MCU');
        opcoesInicio()

    }else if( acertos == 0 && acertos <= 2){
        console.log(jogador+', some daqui meu! Acertando '+acertos+'/10? Namoral!');
        opcoesInicio()

    }

}

// Função para Criar o Ranking de Jogadores

var ranking = [
    {nome:'felp', pontuacao:'1'},

];



function addRanking (placarRank){
    const addJogador = {
        nome: placarRank.nome,
        pontuacao: placarRank.acertos,
    }

    return addJogador;

}

ranking.push(addRanking);

function rankingJogadores() {
    console.log(ranking);
    opcoesInicio()
}















