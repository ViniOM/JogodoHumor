
const valorBtn = document.getElementById('botao');

function alterar() {
    
    if(botao.value == "um") {
        document.getElementById("nome").innerHTML = " Hulk";
        document.getElementById("situacao").innerHTML = " Pistola" 
        document.getElementById("imagem").src = "https://blue-edtech.github.io/Codelab/jogo-do-humor/assets/img/Hulk.png";
        document.getElementById("botao").value = "tres"
    }   
    else if(botao.value == "tres") {
        document.getElementById("nome").innerHTML = " Dr. Hulk";
        document.getElementById("situacao").innerHTML = " Pistola Geek" 
        document.getElementById("imagem").src = "https://blue-edtech.github.io/Codelab/jogo-do-humor/assets/img/Dr.%20Hulk.png"
        document.getElementById("botao").value = "dois"
    }
    else {
        document.getElementById("nome").innerHTML = " Dr. Banner";
        document.getElementById("situacao").innerHTML = " Simples Humano" 
        document.getElementById("imagem").src = "https://blue-edtech.github.io/Codelab/jogo-do-humor/assets/img/Dr.%20Banner.png"
        document.getElementById("botao").value = "um"
    }
}