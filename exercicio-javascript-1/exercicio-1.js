const btn = document.getElementById("btn-cor");
btn.addEventListener("click", function(){
    let r,g,b;
    r = Math.round(Math.random() *255);
    g = Math.round(Math.random() *255);
    b = Math.round(Math.random() *255);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const botao = document.getElementById("btn-troca");
    botao.addEventListener("click", function(){
      const imgElemento = document.querySelector("#btn-img img");
      imgElemento.src = "./esquilo2.jpg";
      imgElemento.alt = "Nova Imagem";
    });

const button = document.getElementById("btn-exibir");
button.addEventListener("click", function(){
    const mensagemElemento = document.getElementById("mensagem");
    mensagemElemento.innerHTML = "Mensagem exibida!";
})

const botao5 = document.getElementById("btn-oculta");
    const imagemElemento = document.getElementById("imagem-oculta");

    botao5.addEventListener("click", function(){
      imagemElemento.style.display = "none";
    });