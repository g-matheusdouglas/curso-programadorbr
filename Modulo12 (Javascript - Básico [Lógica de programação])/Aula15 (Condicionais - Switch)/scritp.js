var nota1 = 5.0;
var nota2 = 7.8;

var media = (nota1 + nota2) /2;

var conseito = "";

if(media >= 8) {
    conseito = 'Ótimo';
}
else if(media > 6.5) {
    conseito = 'Bom';
} else {
    conseito = 'Regular';
}

conseito = 'Mais ou Menos'

console.log(media)
console.log(conseito)

switch(conseito) {
    case 'Ótimo':
        console.log('Parabéns, vc é um ótimo aluno!')
        break;
    case 'Bom':
        console.log('Você está quase perfeito!')
        break;
    case 'Regular':
        console.log('Estude mais um pouco!')
        break;
    default:
        console.log('Hove algum erro!')
        break;
}