
/* var alunos = new Array('Matheus', 'Igor', 'José', 'Marcos', 'Maria'); */

var alunos = ['Matheus', 'Igor', 'José', 'Marcos', 'Maria', 'Gizele'];

/* 
for (var i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
}
 */

for (var i in alunos) {
    console.log(i)
}

for (var aluno of alunos) {
    console.log(aluno)
}

/* 
var aluno1 = 'Matheus'
var aluno2 = 'Igor'
var aluno3 = 'José'
var aluno4 = 'Marcos'
var aluno5 = 'Maria'
var aluno6 = 'Gizele'

console.log(aluno1)
console.log(aluno2)
console.log(aluno3)
console.log(aluno4)
console.log(aluno5)
console.log(aluno6)
 */

