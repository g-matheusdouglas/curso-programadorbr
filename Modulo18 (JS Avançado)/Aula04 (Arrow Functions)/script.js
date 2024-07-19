

let dobro = () => 2 * this.x ; //Usando Arrow Functions
//Arrow Functions não entende o this.x

let dobro1 = function () {
    return 2 * this.x;
}

let numero = {
    x: 8,
    d: dobro1
}

console.log(numero.d())