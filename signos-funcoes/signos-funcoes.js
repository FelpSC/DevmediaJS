const retorna_signo = (signos, data) => { //Arrow Function (retorna_signo)

    let ano = data.getFullYear();

    for ( const signo of signos ){

        let data_inicio_signo =
         new Date(ano + "-" +signo["DataInicio"] + " 00:00:00");
        let data_fim_signo =
         new Date(ano + "-" +signo["DataFim"] + " 23:59:59");

        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and";

        if (tipo_comparacao == "and"){

            if ( data >= data_inicio_signo && data <= data_fim_signo ){
                return signo["Nome"];

            } else if (tipo_comparacao == "or") {

                if (data >= data_inicio_signo || data <= data_fim_signo){

                    return signo["Nome"];
                }


            }

        }

    }

}

export default retorna_signo;
