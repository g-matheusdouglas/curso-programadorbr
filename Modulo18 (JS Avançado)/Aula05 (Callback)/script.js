let usuarios = ['Adriano', 'Marcia', 'Jose'];

function inserirUsuario(nome, callback) {
    setTimeout(() => {
        usuarios.push(nome); 
        callback()
    }, 1000);
    ;
}

function listarUsuarios() {
    console.log(usuarios);
}

inserirUsuario('Igor', listarUsuarios);

inserirUsuario('Matheus', listarUsuarios)