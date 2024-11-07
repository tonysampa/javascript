


function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
    
    if (tipo == 'pista') {
        comprarPista(qtd);        
    } 
    if (tipo == 'superior') {
        comprarSuperior(qtd);        
    } 
    if (tipo == 'inferior') {
        comprarInferior(qtd);        
    } 
    
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) { 
        alert('Quantidade indisponível para tipo pista')
    } else {
        let q = qtdPista;
        q -= qtd;
        document.getElementById('qtd-pista').textContent = q;
        alert('Compra realizada com sucesso!');
        
    }
} 

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) { 
        alert('Quantidade indisponível para tipo pista')
    } else {
        let q = qtdSuperior;
        q -= qtd;
        document.getElementById('qtd-superior').textContent = q;
        alert('Compra realizada com sucesso!');
        
    }
} 

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) { 
        alert('Quantidade indisponível para tipo pista')
    } else {
        let q = qtdInferior;
        q -= qtd;
        document.getElementById('qtd-inferior').textContent = q;
        alert('Compra realizada com sucesso!');
        
    }
} 

