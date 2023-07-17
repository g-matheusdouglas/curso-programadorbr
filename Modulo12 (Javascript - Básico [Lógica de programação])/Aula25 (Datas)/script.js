
var d = new Date('09/01/1999');
var dat = new Date()

var dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
var meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

console.log(d.getDate())
console.log(dias[d.getDay()])
console.log(d.getFullYear())

/* set-something serve para colocar ou mudar alguma propriedade da data */
d.setHours(10)

console.log(d)

console.log(dat.getHours())
console.log(dat.getMinutes())
console.log(dat.getMilliseconds())
console.log(meses[dat.getMonth()])

console.log(dat)