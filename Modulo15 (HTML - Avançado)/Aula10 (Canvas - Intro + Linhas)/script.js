let tela = document.getElementById('tela')

let ctx = tela.getContext('2d')
ctx.moveTo(0, 500)
ctx.lineWidth
ctx.lineTo(100, 0)
ctx.lineTo(250, 250)
ctx.lineTo(400, 0)
ctx.lineTo(500, 500)
ctx.lineWidth = 5
ctx.strokeStyle = 'blue'
ctx.shadowColor = 'black'
ctx.shadowOffsetX = 3
ctx.shadowOffsetY = 4
ctx.shadowBlur = 4
ctx.stroke()
