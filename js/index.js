
const botaoTrailer = document.querySelector(".botao-trailer");
const fecharmodal = document.querySelector(".fechar-modal");
botaoTrailer.addEventListener("click", () => {
    let abrir = document.querySelector(".modal");
    abrir.classList.add("modal-aberto");

})

fecharmodal.addEventListener("click", () => {
    let fechar = document.querySelector(".modal");
    fechar.classList.remove("modal-aberto");
    
})