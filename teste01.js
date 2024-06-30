import entradaDados from 'readline-sync';

function calcJuros (calcular){

    console.log("Aplicação de Juros");

    var valorDivida = entradaDados.question("Informe o Valor Devido: ");

    if (valorDivida > 0){
        var diasAtraso = entradaDados.question("Informe os Dias de Atraso: ");
        if ( diasAtraso > 0){
            if (diasAtraso >= 10){
                var porcentagem = 10 / 100; //10%
                var totalJuros = Number(valorDivida) + Number(porcentagem * valorDivida);
                var juros = '10%';
            }else{
                var porcentagem = 5 / 100; //5%
                var totalJuros = Number(valorDivida) + Number(porcentagem * valorDivida);
                var juros = '5%'
            }
        
            console.log('Valor original da divida: '+valorDivida);
            console.log('Dias atrasados: '+diasAtraso);
            console.log('Taxa de Juros: '+juros);
            console.log('Valor total com juros: '+totalJuros);

        }else if (diasAtraso == 0){
            console.log('Não há Juros a ser cobrado');
            calcJuros();
        }else{
            console.log('Valor inválido');
            calcJuros();
        }
    }else{
        console.log('Valor inváldio');
        calcJuros();

    }
}

calcJuros();


    
