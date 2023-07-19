
function h2click() {
    console.log('Executando a função')
}

function changeH1(i) {
    let h2 = document.getElementsByTagName('h2')[0]
    h2.innerText = i.value
}

function hideH1() {
    let h1 = document.getElementsByTagName('h1')[0]
    h1.style.display = 'none'
}