/* function mudarCor() {
    let h = document.getElementsByTagName('h2')[0]
    h.style.color = 'blue'
} */

var numero = 0

var timer

function AtualizarTexto() {
    let h = document.getElementsByTagName('h2')[0]
    h.innerHTML += ` ${numero}`
    numero++
}


function iniciar() {
    /* let h = document.getElementsByTagName('h2')[0]
    h.innerHTML = 'Novo Titulo' */

    // window.setTimeout(mudarCor, 2000)
    timer = setTimeout(AtualizarTexto, 1000)
}

function parar() {
    clearTimeout(timer);
}