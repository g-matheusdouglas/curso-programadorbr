let tela = document.getElementById('tela')
let ctx = tela.getContext('2d')

let x = 250
let y = 250
let raio = 100
let inicio = 0
let fim = 2 * Math.PI

ctx.beginPath()
ctx.lineWidth = 5
ctx.strokeStyle = 'red'
ctx.fillStyle = 'blue'
ctx.arc(x,y, raio, inicio, fim)

ctx.fill()
ctx.stroke()

ctx.beginPath()

ctx.lineWidth = 3
ctx.strokeStyle = 'blue'
ctx.fillStyle = 'red'
ctx.arc(425, 75, 50, 300, 0.5 * Math.PI)

ctx.fill()
ctx.stroke()

ctx.beginPath()

ctx.lineWidth = 3
ctx.strokeStyle = 'blue'
ctx.fillStyle = 'red'
ctx.arc(75, 425, 50, 0, 1 * Math.PI)

ctx.fill()
ctx.stroke()
