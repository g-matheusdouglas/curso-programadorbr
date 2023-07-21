function f(e) {
    console.log('teste');
    console.log(e)
    console.log(this)
}

function f1(e) {
    console.log('teste f1');
    console.log(e)
    console.log(e.target)
    console.log(this)
}

window.onload = function() {
    let h2 = document.getElementsByTagName('h2')[0];
    h2.addEventListener('click', f1);
}