const btn = document.getElementById("btn1");
btn.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
});

const button = document.getElementById("btn2");
button.addEventListener("click", function(){
    const mensagemElemento = document.getElementById("mensagem");
    mensagemElemento.innerHTML = "Mensagem exibida!";
})