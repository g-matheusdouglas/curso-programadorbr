
let a = {
    nome: 'Matheus',
    nota: 8.5
}

let b = JSON.stringify(a)

let a2 = '{"nome": "Igor", "nota": 7.8}' //IMPORTANTE para funcionar tem que está com aspas simples do lado de fora e com aspas duplas em todo nomes dentro do objeto string

let b2 = JSON.parse(a2)

console.log(a)
console.log(b)

console.log(a2)
console.log(b2)

console.log(b2.nome)