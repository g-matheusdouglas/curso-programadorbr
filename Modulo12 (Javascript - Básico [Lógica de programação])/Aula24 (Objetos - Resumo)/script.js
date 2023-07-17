
/* Objeto-03 */

function obj3(n, s) {
    this.nome = n
    this.sobrenome = s
}

var c = new obj3('Matheus', 'Douglas')

/* Objeto-02 */

function obj2(n, s) {
    return {nome: n, sobrenome: s}
}

var b = obj2('Matheus', 'Douglas')

/* Objeto-01 */

var a = {
    nome: 'Matheus',
    sobrenome: 'Douglas'
}

console.log(a)
console.log(b)
console.log(c)