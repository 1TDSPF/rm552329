//Diferença entre let/var/const
/*
var nome = "Isabella";
if(nome == "Isabella"){
   var nome = "Henrique"
}

console.log(nome);*/

/*
const PI = 3.14;
PI = 3.15
console.log(PI)*/

//Recuperando um elemento button que está no index.html
/*const btn = document.getElementById("meu-btn");
console.log(btn.textContent);

//Atrelando o evento de click ao button que foi recuperado
//btn.addEventListener("EVENTO", "FUNÇÃO DE CALLBACK");
btn.addEventListener("click", function(){
   
   //Função matemática que é a math
   // random = gera números aleatórios entre 0 e 1. Ex: 0.2323232
   //Floor - arrendonda o numero para baixo
    //ceil - arrendonda o numero para cima
     //round - arrendonda o numero para aleatoriamente
   let r,g,b;
   r = Math.random(Math.random() * 255);
   g = Math.random(Math.random() * 255);
   b = Math.random(Math.random() * 255);


   //this.setAttribute("nome do atributo", "Valor do atributo")
   this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);
*/
   //DESAFIO
   //Recupere o elemento tit-sec e atrele ele um evento de mouse a sua escolha
   //Altere a cor de fundo e a cor do texto quando o evento ocorrer
   /*
   const h2Element = document.getElementById("meu-tit");
  // console.log(h2Element);
  h2Element.addEventListener("click", function(){
   this.setAttribute("style", `background-color:red;color:#fff;`)
  })
  })*/
  const h2Element = document.querySelector(".tit-sec")
  h2Element.addEventListener("click", function(){
   this.setAttribute("style", `background-color:red;color:#fff;`)
  });


   