const listaLivros = require('./array');
const trocaLugar = require ('./encontraMenores');

function quickSort(array,esquerda,direita) {
    if (array.length>1){
        let IndiceAtual = particiona(array,esquerda, direita);
        if (esquerda<IndiceAtual-1) {
            quickSort(array,esquerda,IndiceAtual-1)
        }
        if (IndiceAtual<direita) {
            quickSort(array, IndiceAtual, direita)
        }
    }
    return array;
}

function particiona(array,esquerda,direita){
    let pivo = array[Math.floor((esquerda+direita)/2)];
    let atualEsquerda = esquerda;
    let atualDireita  = direita;

    while(atualEsquerda<=atualDireita){
        while(array[atualEsquerda].preco<pivo.preco){
            atualEsquerda++;
        }
        while(array[atualDireita].preco>pivo.preco){
            atualDireita--;
        }
        if(atualEsquerda<=atualDireita){
            trocaLugar(array,atualEsquerda,atualDireita)
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}

console.log(quickSort(listaLivros,0,(listaLivros.length-1)));