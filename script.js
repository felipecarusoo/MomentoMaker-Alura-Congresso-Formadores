
function exibirAlerta() {

    const mensagemSecreta = "mas esquece a presenca das cameras e precisa entrar em contato com o prof de programacao que coloca as cameras em loooping e ninguém consegue verificar os acessos. Até que a investigadora, com um instrumento ultramegasofisticado, descobre o romance entre os amantes e revela tudo ao diretor traído.";
    const elemento = document.querySelector(".texto");
    elemento.classList.add("texto-secreto");
    elemento.innerHTML = mensagemSecreta;
    document.querySelector("button").classList.add("remove");
}
