class Thumbnails {
    constructor(alvo, filmes){
        this.init(alvo, filmes);
    }

    init(alvo, filmes){

        filmes.forEach(filme => {
            this.makeDiv(alvo,filme);

        });
    }

makeDiv(alvo,objeto){
       
    let div = document.createElement("div");
    div.setAttribute("class","item");
    div.style.background = `url('assets/images/${objeto.imagem}')`;
    div.style.backgroundRepeat = "no-repeat";
    div.style.backgroundSize = "cover";  


    
    
}
    
        

   
}

