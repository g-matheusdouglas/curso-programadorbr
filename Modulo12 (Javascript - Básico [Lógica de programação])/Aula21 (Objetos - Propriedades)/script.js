
var aluno = { 
    nome: 'Igor',
    notas: [7.5, 5.0]
}

var novaProp = 'LastName'

aluno.matricula = 12345
aluno[novaProp] = 'Oliveira'

console.log(aluno)


var aluno2 = new Object()

aluno2.matricula = 23456
aluno2.nome = 'Matheus'
aluno2.notas = [~8, 7.5, 9]


console.log(aluno2)