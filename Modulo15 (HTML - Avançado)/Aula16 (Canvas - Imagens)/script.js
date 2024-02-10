let tela = document.getElementById('tela')
let ctx = tela.getContext('2d')

let img = new Image()
img.src = './imagens/red-350.png'

img.onload = desenharImg;

function desenharImg() {
    ctx.drawImage(this, 20, 20, this.naturalWidth / 2, this.naturalWidth / 2)
}

