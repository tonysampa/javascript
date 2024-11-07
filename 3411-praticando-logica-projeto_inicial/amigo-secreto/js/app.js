let amigos = [];
function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if(amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;  
    }

    // verifica se já possui o nome na lista
    //let nomeAmigo = amigo.value.split[0];
    if (amigos.includes(amigo.value)) {
        alert(`Nome ${amigo.value} já adicionado!`);
        amigo.value='';
        return;        
    }
    
    let lista = document.getElementById('lista-amigos');

    // atualiza array amigos
    //amigos = document.getElementById('lista-amigos').textContent.split(',');
    amigos.push(amigo.value);
    
    //
    if (lista.textContent=='') {
        lista.textContent= amigo.value;  
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
    amigo.focus;      

}

function sortear() {    
    
    if(amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;  
    }

    let sorteio = document.getElementById('lista-sorteio');
    embaralha(amigos);
    
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i+1]!=null) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i+1] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        }
    }
}

function embaralha(lista) {
    for (let index = lista.length; index; index--) {
        const indiceAleatorio = Math.floor(Math.random() * index);
        
        // atribuição via destructuring
        [lista[index-1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[index-1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
