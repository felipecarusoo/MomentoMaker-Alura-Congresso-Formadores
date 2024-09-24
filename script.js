
function exibirAlerta() {

    const mensagemSecreta = "A bibliotecaria com medo de perder o emprego para novas tecnologias, apagou o arquivo do computador, mas derrabou milkshake deixando a maior bagunca ao termino do expediente. Seu amante Arthur, conivente da historia, entrou na biblioteca para limpar e eliminar vestigios, nao conseguindo em 100%.";
    const elemento = document.querySelector(".texto");
    elemento.classList.add("texto-secreto");
    elemento.innerHTML = mensagemSecreta;
    document.querySelector("button").classList.add("remove");
}
