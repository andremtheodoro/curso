//Json - JavaScript Object Notation//


//==================================================================//

let carro = ["Fiat", "Ford", "GM", "Honda", "Hyundai", "VW"];
const combo = document.createElement("select");


carro.forEach((element,indice)=>{


   // combo.append(`<option value=${indece}>${element}</option>`);
    console.log(element, indice);  

   let opcao = document.createElement("option");  
   opcao.value = indice;
   opcao.text = element;
   combo.append(opcao);

   console.log(opcao);
})

document.querySelector("body").append(combo);


//=====================================================================//


let aerea = ["AA","Azul","Delta","Gol","Latam"];
// <select></select>
const s = document.createElement("select");

aerea.forEach((valor, indice)=>{

let o = document.createElement("option");
o.value = indice;
o.text = valor;
s.append(o);
});

let viagem = document.querySelector("#viagem");
viagem.append(s);
// *********************//

function escreve(x){
    return x;
}

function escreve2(x){
    console.log(x);
} 

let escreve3 = function(x){
  console.log(x);
}

let escreve4 = x =>{
    console.log(x);
}



//console.log(carro[carro.length -1]);

// DRY Don't repeat yourself. não se repita.