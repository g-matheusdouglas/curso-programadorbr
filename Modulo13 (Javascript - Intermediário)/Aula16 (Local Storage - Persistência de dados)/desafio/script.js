if (localStorage.getItem('lista') != null) {
    var l = JSON.parse(localStorage.getItem('lista'))
} else {
    l = []
}
var lista = l
var campoLista = document.getElementById('lista-tarefas')

for (var i of lista) {
    campoLista.innerHTML += `<li>${i}</li>`
}

function adicionar() {
    let novaTarefa = document.getElementById('tarefa')
    if (lista.indexOf(novaTarefa.value) != -1) {
        window.alert('Tarefa já adicionada!')
    } else {
        lista.push(novaTarefa.value)
        localStorage.setItem('lista', JSON.stringify(lista))
        campoLista.innerHTML = ''
        for (var i of lista) {
        campoLista.innerHTML += `<li>${i}</li>`
        }
    }
    novaTarefa.value = ''
    novaTarefa.focus()
}

function limpar() {
    localStorage.clear()
    campoLista.innerHTML = ''
    lista = []
}
