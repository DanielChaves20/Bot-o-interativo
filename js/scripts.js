// Pega os elementos do botão "Não" e "Sim" pelos seus respectivos IDs
let botaoNao =document.getElementById("nao");
let botaoSim = document.getElementById("sim");
let mensagemErro = document.getElementById("erro");
// Adiciona um evento ao botão "Não" que será acionado quando o mouse passar sobre ele
botaoNao.addEventListener("mouseover", function() {
// Gera uma nova posição aleatória para o botão "Não" dentro da largura e altura da janela
let posX = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
let posy  = Math.random() * (window.innerHeight - botaoNao.offsetHeight);
botaoNao.style.position = "absolute";
botaoNao.style.left = posX + "px";
botaoNao.style.top = posy + "px";
// Exibe a mensagem de erro, tornando-a visível
mensagemErro.style.display = "block";
})
botaoSim.addEventListener("click",function() {
    alert("òtima escolha! Minha chave pix e meu celular");
});
