const btnAbrir = document.querySelector(".abrir")
const menu = document.querySelector(".menu-navegação")
const btnTop = document.querySelector(".back-to-top")

btnAbrir.addEventListener('click', () => {
    menu.classList.add("abrir-menu")
})

menu.addEventListener('click', () => {
    menu.classList.remove("abrir-menu")
})

document.addEventListener('click', (event) => {
    // Verifica se o clique ocorreu fora do menu e do botão de abrir
    if (!menu.contains(event.target) && !btnAbrir.contains(event.target)) {
        menu.classList.remove("abrir-menu");
    }
});

/* ajustando configuração do botão de subir */
window.addEventListener('scroll', () => {
    if(window.scrollY > 200) { // Quando rolar mais que 200px
        btnTop.classList.add("show")
    }else{
        btnTop.classList.remove("show")
    }
})

 // Volta para o topo ao clicar no botão
 btnTop.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({top: 0, behavior: 'smooth'})// rolagem suave até o topo
 })