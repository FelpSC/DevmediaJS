let series = [
  {nome: 'Loki', servico: 'Disney+'},
  {nome: 'Friends', servico: 'HBO'},
  {nome: 'Superman & Lois', servico: 'HBO'},
  {nome: 'WandaVision', servico: 'Disney+'},
];


function retornaSeriesDisney(serie){
	return ( serie == 'Disney+')

}

function retornaSeriesHBO(serie){
	return (serie == 'HBO');
}


let servico = 'Disney';
let retornaSeries = [];

switch(servico){
    
  case'Disney':
          retornaSeries = series.filter(serie => serie.servico === 'Disney+');
          break;
      
  case'HBO':
          retornaSeries = series.filter(serie => serie.servico === 'HBO');
          break;
}

retornaSeries.forEach(serie => {
	console.log(serie.nome);
});