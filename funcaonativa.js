// TRABALHANDO COM ARRAYS E SUAS FUNÇÕES NATIVAS

// HÁ ALGUNS METODOS NATIVOS PARA TRATAR ARRAYS, SÃO ELES O:

// .push()

// PUSH() == INSERIR UM ELEMENTO NO ARRAY (Sempre no final)

// Exemplo

const array = [
  'Doming',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
]

array.push('Sábado'); //COLECAO + FUNCAO (PUSH);

console.log(array);

//VAI SER IMPRIMIDO UM NOVO ALEMENTO JUNTO COM O ARRAY
// const array = [
//   'Doming',
//   'Segunda',
//   'Terça',
//   'Quarta',
//   'Quinta',
//   'Sexta',
//   'Sábado', (NOVO ELEMENTO)
// ]
// ------------------------------------------------------------------------------------------

// REMOVENDO ELEMENTOS 

// splice(), pop() e shift()

// split() : Remove elementos de um Array com base em posição
// Exemplo : 
  
const arraysplice = [
  'Doming',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
]

arraysplit.splice(2,1); //COLECAO + FUNCAO (2,1); (posição no Array + número de elementos)

console.log(arraysplit); // Vai remover "Terça"

// pop() = Remove o primeiro elemento do Array
// shift() = Remove o ultimo elemento do Array

// --------------------------------------------------------------------------------------------------

//.forEach()

//forEach() == Percorre o Array e para cada item ele executa uma função

// EXEMPLO : 

const array2 = [
  {id: 1, nome: 'Felps', cidade:'Floripa'},
  {id: 2, nome: 'Tiago', cidade:'Biguaçu'},
  {id: 3, nome: 'Hagata', cidade:'Palhoça'},
];

function addAlgo(array){
  console.log(array.nome);
}

array2.forEach(addAlgo);

// VAI IMPRIMIR :
// FELPS
// TIAGO
// HAGATA

// ------------------------------------------------------------------------------------------

// .map()

// .map() == Cria um Array com base em outro, bem dizer, ele pega valores de um Array e imprime na tela também em formato de Array

// Exemplo :

const array3 = [ //Array original
  {id: 1, nome: 'Felps', cidade:'Floripa'},
  {id: 2, nome: 'Tiago', cidade:'Biguaçu'},
  {id: 3, nome: 'Hagata', cidade:'Palhoça'},
];

function duplicArray(arraytroc){ // função para imprimir apenas o qu é pedido
  const arrayTrocado = {
    nome: arraytroc.nome,
    cidade: arraytroc.cidade,
  }

  return arrayTrocado;
}

const exibArray = array3.map(duplicArray); //cria uma variavel para ser chamada  com a função .map()

console.log(exibArray); // Imprimi a variavel/ Função .map()

// Vai Imprimir :
// {nome: 'Felps', cidade: 'Floripa'},
// {nome: 'Tiago', cidade: 'Biguaçu'},
// {nome: 'Hagata', cidade: 'Palhoça'},

// ------------------------------------------------------------------------------------------

// .filter()

//.filter() == Filtra os elementos do Array para serem Exibidos na tela

// Exemplo :
const array4 = [ //Array original
  {id: 1, nome: 'Felps', cidade:'Floripa', parente: true},
  {id: 2, nome: 'Tiago', cidade:'Biguaçu', parente: false},
  {id: 3, nome: 'Hagata', cidade:'Palhoça', parente: false},
  {id: 4, nome: 'Adriana', cidade:'São José', parente: true},
  {id: 5, nome: 'Valdomiro', cidade:'Biguaçu', parente: true},
];


function parentesco (parente){ 
  return parente.parente == true; //Parametro de vericação; se "parente for = true".
}

const verificaParente = array4.filter(parentesco);

console.log(verificaParente);

// ------------------------------------------------------------------------------------------


// .reduce()

// .reduce() == reduz o array a um unico valor. Util em caso de calculo de valores

// EXEMPLO: 

const itensCarrinho = [
  { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
  { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
  { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
  { id: 4, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
];

function somarValor (total, itemCarrinho) {
  const valorTotal = itemCarrinho.qnt * itemCarrinho.valor;

  return valorTotal + total; // IensCarrinho(qnt x valor) + 10 (total)
}

const valorAPagar = itensCarrinho.reduce(somarValor, 10); 

console.log(valorAPagar);

// vai imprimir o calculo que é == 170.85

// ------------------------------------------------------------------------------------------


// .sort()

//  .sort() = Ordena o Array de forma alfabética ou númerica

// EXEMPLO:

const nomes = ['Felps', 'Bruno','Tiago','Adriana','Valdomiro'];

console.log(nomes.sort());




