
let lista = document.getElementById('lista')

// let num = parseInt(lista.getAttribute('data-num'))

lista.dataset.n = '4' //set pelo JavaScript

let id = lista.dataset.id
console.log(id)

let num = parseInt(lista.dataset.n)

console.log(lista.dataset.n)

let conteudo = ''

for(let i = 0; i < num; i++) {
    conteudo += `<li>${i}</li>`
}

lista.innerHTML = conteudo