
{
    var numero1 = 4 /* Tem um escopo maior vai funcionar além do bloco - isso não vale para funcões pois elas tem um escopo mais fechado */
    let numero2 = 5 /* let e const tem um escopo local - funciona dentro do bloco */
    const numero3 = true /* const é uma CONSTANTE uma vez atribuido não pode ser reatribuido */
    console.log(numero2)
    console.log(numero3)
}

console.log(numero1)