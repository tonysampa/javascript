let totalGeral;
limpar();

function adicionar() {
    /*
     * recuperar valores nome do produto, quantidade e valor
     */
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]
    let valorUnitario =  produto.split('R$')[1];    
    let quantidade = document.getElementById('quantidade').value;
    // alert(nomeProduto);
    // alert(valorUnitario);
    // alert(quantidade);

    /*
     * calcular o preço, o nosso subtotal
     */
    let subTotal = quantidade*valorUnitario; 
    // alert(subTotal);

    /*
     * adicionar no carrinho
     */
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
                                <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
                            </section>
                        `;
    
    /*
     * atualizar o valor total
     */
    totalGeral += subTotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    
    document.getElementById('quantidade').value = 0;
    document.getElementById('quantidade').focus;

}

function limpar() {
    /* 
     * Limpar quantidade
     */
    document.getElementById('quantidade').value = 0;
    
    /* 
     * Limpar produtos do carrinho
     */
    document.getElementById('lista-produtos').innerHTML = '';

    /* 
     * Limpar totais
     */
    totalGeral = 0;
    document.getElementById('valor-total').textContent = 'R$ 0,00';

}

/*
                distância
velocidade =   -----------
                  tempo

                 distância km
eficiência =    --------------   --> qtd Litros = distância km / eficiência => 500/10 = 50 l               
                    litro


preço do litro da gasolina

velocidade média

distância=500km
eficiência=10
precoGasolina=6
velocidadeMedia=50

custo_total = distância*eficiência*precoGasolina

function calcularCustoViagem(distancia, eficiencia, precoGasolina, velocidadeMedia) {
    let tempoViagem = distancia / velocidadeMedia;
    let consumoCombustivel = distancia / eficiencia;
    let custoTotal = consumoCombustivel * precoGasolina;
    return let custoTotal;
}
function calcularCustoViagem(distancia, eficiencia, precoGasolina, velocidadeMedia) {
    let tempoViagem = distancia / velocidadeMedia;
    let consumoCombustivel = distancia / eficiencia;
    let custoTotal = consumoCombustivel * precoGasolina;
    return custoTotal;
}
*/