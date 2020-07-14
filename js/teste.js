function testeFinal(string, numero){
    let retorno;
    switch(string){
       case "mundojs":
           console.log("MundoJs");
           retorno = numero;
           break;
       case "soma":
           retorno = numero/2 + numero*numero;
           break;
       case "vetor":
           let array = [];
           for(elemento=0; elemento<5; elemento++){
               array[elemento] = numero + elemento*2;
           }
           retorno = array;
           break;
       case "booleano":
           let array2 = [];
           let resultado = 0;
           for(elemento2=0; elemento2<5; elemento2++){
               array2[elemento2] = numero + elemento2*2;
               resultado += array2[elemtento2];
           }
           retorno = resultado > 35;
           break;
       default:
           retorno = -1;
           break;
       }
       return retorno;
   }