// //Diferença entre let/var/const
// /*
// var nome = "Isabella";
// if(nome == "Isabella"){
//    var nome = "Henrique"
// }

// console.log(nome);*/

// /*
// const PI = 3.14;
// PI = 3.15
// console.log(PI)*/

// //Recuperando um elemento button que está no index.html
// /*const btn = document.getElementById("meu-btn");
// console.log(btn.textContent);

// //Atrelando o evento de click ao button que foi recuperado
// //btn.addEventListener("EVENTO", "FUNÇÃO DE CALLBACK");
// btn.addEventListener("click", function(){
   
//    //Função matemática que é a math
//    // random = gera números aleatórios entre 0 e 1. Ex: 0.2323232
//    //Floor - arrendonda o numero para baixo
//     //ceil - arrendonda o numero para cima
//      //round - arrendonda o numero para aleatoriamente
//    let r,g,b;
//    r = Math.random(Math.random() * 255);
//    g = Math.random(Math.random() * 255);
//    b = Math.random(Math.random() * 255);


//    //this.setAttribute("nome do atributo", "Valor do atributo")
//    this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

//    //DESAFIO
//    //Recupere o elemento tit-sec e atrele ele um evento de mouse a sua escolha
//    //Altere a cor de fundo e a cor do texto quando o evento ocorrer
//    /*
//    const h2Element = document.getElementById("meu-tit");
//   // console.log(h2Element);
//   h2Element.addEventListener("click", function(){
//    this.setAttribute("style", `background-color:red;color:#fff;`)
//   })
//   })
//   const h2Element = document.querySelector(".tit-sec")
//   h2Element.addEventListener("click", function(){
//    this.setAttribute("style", `background-color:red;color:#fff;`)
//   });*/

// //declarando um array 
// let frutas =  ["Maça", "Laranja", "Banana", "Uva", "Kiwi", "Caqui"]
// //imprindo o array
// console.log(frutas);

// //para verificar o tamanho do array utilizamos a propriedade length
// console.log("Tamanho do array " + frutas.length);
// //Imprimindo um item especifico do array
// console.log("Pegando um dos itens do array : " + frutas[3]);

// //Interando o array com estruturas de repetição:
// //forEach
// frutas.forEach( (fruta)=>{
   
// console.log("Pegando um dos itens do array com forEach: " + fruta);

// } );

// //Adcionando um item ao final do Array com o metódo push(item);
// frutas.push("Melão")
// console.table(frutas)

// //Adcionando um item ao inicio do Array com o metódo unshift(item);
// frutas.unshift("Melancia")
// console.table(frutas)

// //Remover um item do final do Array com o metódo pop( );
// frutas.pop()
// console.table(frutas)

// //Remover um item do inicio do Array com o metódo shift( );
// frutas.shift()
// console.table(frutas)

// //localizando um determinado item dentro do array com o metódo indexOf(item)
// // let indice = frutas.indexOf("Banana")
// // console.log("Indice onde foi localizado o item : " + indice)
// // console.log("Item que foi localizado no array : " + frutas[indice])

// // //utilizando os metodos, splice(indiceItem, quantidadeRemoções) para remover um item do array passando sua localização através do indice
// // //localizando um determinado item dentro do array com o metódo indexOf(item)
// // let indice = frutas.indexOf("Kiwi")
// // console.log("Item que estava no local antes da remoção : " + frutas[indice])
// // frutas.splice(indice,1);
// // console.log("Item que ficou no local após a remoção : " + frutas[indice])

// //utilizando os metodos, splice(indiceItem, quantidadeRemoções) para remover um item do array passando sua localização através do indice
// //localizando um determinado item dentro do array com o metódo indexOf(item)
// let indice = frutas.indexOf("Banana")
// console.log("Item que estava no local antes da remoção : " + frutas[indice])
// frutas.splice(indice,2);
// console.table(frutas)
// console.log("Item que ficou no local após a remoção : " + frutas[indice])

// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10]
// console.log(nr1);
// console.log(nr2);

// //Concatenando arrays
// let nr3 = [nr1,nr2]
// console.log("Novo array: " + nr3);

// //imprimindo o array concatenado com forEach
// nr3.forEach((nr)=>{
//     nr.forEach((n)=>{      
//    console.log("Item do novo array " + n);
//    })
 
// });

// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10]
// console.log(nr1);
// console.log(nr2);

// //Concatenando arrays com o operador spread(...) - ele pega e espalha dentro dos arrays, colocando um por um

// let nr3 = [...nr1,...nr2];
// //imprimindo o array concatenado com forEach
// nr3.forEach((nr)=>{      
//    console.log("Item do novo array " + nr); 
// });

//Tem uma característica de lista, porém não é uma array
// const imgElements = document.getElementsByTagName("img");
// console.log(imgElements);

// //Convertendo HTMLCollection em arrays
// const imgElementsArray = [...imgElements]
// imgElementsArray.forEach((img)=>{
//    img.setAttribute("width", "5%")
// })
// console.log(imgElementsArray)

//Recupere uma colection de elementos do tipo(a)
//Identifique aquelas que são pertencentes somente ao cabeçalho e adicione o atributo style com a propriedade background-color: #ff0000;


const aElements = [...document.getElementsByTagName("a")];
aElements.forEach((a)=>{
   let textoDoA = a.textContent;
   if(textoDoA == "Item-1" || textoDoA == "Item-2" || textoDoA == "Item-3"){
      a.setAttribute("style", "background-color:#ff0000;")
   }
})