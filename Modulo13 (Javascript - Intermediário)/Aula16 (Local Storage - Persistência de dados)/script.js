/* 
onload = function() {
    let nome = this.localStorage.getItem('nome')
    let h2 = document.getElementById('nome')
    h2.innerHTML = nome 
}

function atualizar(e) {
    let valor = e.value
    let h2 = document.getElementById('nome')
    h2.innerHTML = valor
    localStorage.setItem('nome', valor)
} */

// let a = {nome: 'Matheus', n1: 8.5}

// localStorage.setItem('aluno', JSON.stringify(a))

let a = localStorage.getItem('aluno')
console.log(JSON.parse(a))

localStorage.clear()
