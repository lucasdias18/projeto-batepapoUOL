function abrirMenu() {
    let menu = document.querySelector('.menu');
    // menu.classList.remove('escondido')
    menu.classList.toggle('escondido')
    console.log(menu)
    // document.body.innerHTML += '<div class="menu"></div>';
}



// let nome = prompt("Qual é o seu nome?");
// console.log(nome)
// let dados = {nome};
// console.log(dados)
let requisicao = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", {nome: prompt("Qual é o seu nome?")});

requisicao.then(statusConexao);
requisicao.catch(erro);

function statusConexao() {
    let messages = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages")
    let usuario = document.querySelector('.conversa');
    usuario.innerHTML += messages;
}

// function erro() {
//     nome = prompt("Qual é o seu nome?");
//     dados = {nome}
//     requisicao = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", dados);

//     requisicao.then(statusConexao);
//     requisicao.catch(erro);
// }

function enviarMensagem() {
    
}