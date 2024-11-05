let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

const inputEle = document.getElementById('num');
inputEle.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key != null && key == 13) { // codigo da tecla enter
    // colocas aqui a tua função a rodar
    verificarChute();
  }
});

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p','Escolha o Número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
     console.log(chute == numeroSecreto);  
     if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';  
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        //
        document.getElementById('reiniciar').disabled = false;
        document.getElementById('num').disabled = true;
     } else {
       
        if ((chute.trim().length!=0) && (chute > numeroSecreto)) {
            exibirTextoNaTela('p', 'O número secreto é menor ');
            tentativas++;
        } else if (chute.trim().length!=0) {
            exibirTextoNaTela('p', 'O número secreto é maior ');
            tentativas++;
        }
        
        limparCampo();
        document.getElementById("num").focus();
     }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1; 
    document.getElementById('reiniciar').disabled = true; 
    document.getElementById('num').disabled = false;
    document.getElementById('num').focus();
    exibirMensagemInicial();    
}

exibirMensagemInicial();