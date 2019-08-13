function select(nomeArray, alvo){
    let select = document.createElement("select");

    nomeArray.forEach((valor, indice) =>{
        let opcao = document.createElement("option");
        opcao.value = indice;
        opcao.text = valor;
        select.append(opcao);

        
    });

    document.querySelector(alvo).append(select);
}

function combo(elemento, nomeArray, alvo){

    let atr = "class";
    console.log(elemento.indexOf("."));
    if(elemento.indexOf("#")>= 0){
        atr = "id";
        elemento = elemento.split("#");
    }else{
    elemento = elemento.split(".");
    }

    let e = document.createElement(elemento[0]);
    e.setAttribute(atr,elemento[1]);

    let opcao = "";
    switch(elemento[0]){
        case "select" :
            opcao = "option";
            break;
        case "ul" :
            opcao = "li";
            break;

    }
    nomeArray.forEach((valor, indice) =>{
        let o = document.createElement("option");
        o.value = indice;
        o.text = valor;
        e.append(o);

        
    });

    document.querySelector(alvo).append(e);
}

function styleJPG(elemento, imagem, largura, altura){

    let caminho = imagem;
    let caminhoCSS = "url('assets/imagens/"+caminho+"')";

    elemento.style.width = largura;
    elemento.style.height = altura;
    elemento.style.background = caminhoCSS + " no-repeat";
    elemento.style.backgroundSize = "contain";
}