"use strict"

function imprimir() {
    x = 7; 'ReferenceErro: x is not defined'
    console.log(x)
}

console.clear()
imprimir()
console.log(window)

'use strict obriga a declaração da variavel'