let carro = [
    {
        montadora : "ferrari",
        modelo : "F430",
        ano: 2006,
        cor: "vermelha"


    },
   "BMW"                
];
 
console.log('A ${carro[0].montadora} ${carro.modelo} de cor ${valor.cor});



function escreveAuto(elemento, indece, valor){
    console.log(indece, valor);

}

carro.forEach(escreveAuto);