let usuarios = ['Adriano', 'Marcia', 'Jose'];

function inserirUsuario(nome) {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            usuarios.push(nome); 
            let erro = false;
            if(!erro) {
                resolve();
            }else {
                reject({msg: 'Erro de qualquer coisa'});
            }
        }, 1000);
    })
    return promise;
}

function listarUsuarios() {
    console.log(usuarios);
}

inserirUsuario('Matheus')
    .then(listarUsuarios)
    .catch((error) => {
    console.log(error.msg)
});

inserirUsuario('Gustavo')
    .then(listarUsuarios)
    .catch((error) => {
    console.log(error.msg)
});