//Exercicio 1
const botao1 = document.getElementById("btn-cor");
botao1.addEventListener("click", function(){
    let r,g,b;
    r = Math.round(Math.random() *255);
    g = Math.round(Math.random() *255);
    b = Math.round(Math.random() *255);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
//Exercicio 2
const form = document.querySelector('form');
const inputAnimal = document.getElementById('idAnimal');
const listaAnimais = document.getElementById('listaAnimais');
const btnEnviar = document.getElementById('btnEnviar');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const animal = inputAnimal.value.trim();

  if (animal !== '') {
    const novoItem = document.createElement('li');
    novoItem.textContent = animal;
    listaAnimais.appendChild(novoItem);
    inputAnimal.value = '';
  }
});

btnEnviar.addEventListener('click', function() {
  form.dispatchEvent(new Event('submit'));
});

//Exercicio 3
const botao3 = document.getElementById("btn-troca");
const imgElemento = document.querySelector("#img-troca img");
const imagens = ["./esquilo1.jpg", "./esquilo2.jpg"];
let index = 0;

botao3.addEventListener("click", function(){
  index = (index + 1) % imagens.length;
  imgElemento.src = imagens[index];
  imgElemento.alt = "Imagem " + (index + 1);
});

//Exercicio 4
const botao4 = document.getElementById("btn-exibir");
    const mensagemElemento = document.getElementById("mensagem");
    let mensagemVisivel = false;

    botao4.addEventListener("click", function(){
      if (mensagemVisivel) {
        mensagemElemento.style.display = "none";
        mensagemVisivel = false;
      } else {
        mensagemElemento.innerHTML = "APARECI!";
        mensagemElemento.style.display = "block";
        mensagemVisivel = true;
      }
    });
//Exercicio 5
const botao5 = document.getElementById("btn-oculta");
    const imagemElemento = document.getElementById("img-oculta");
    let imagemVisivel = false;

    botao5.addEventListener("click", function(){
      if (imagemVisivel) {
        imagemElemento.style.display = "none";
        imagemVisivel = false;
      } else {
        imagemElemento.style.display = "block";
        imagemVisivel = true;
      }
    });