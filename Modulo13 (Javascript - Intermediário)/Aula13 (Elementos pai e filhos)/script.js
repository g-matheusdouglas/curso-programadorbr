window.onload = function() {
    /* let d1 = document.getElementById('d1')
    let h1 = d1.children[0]
    console.log(h1.parentElement) */
    let h1 = document.getElementsByTagName('h2')

    for (let h of h1) {
        console.log(h)
        h.addEventListener('click', qop)
    }

    function qop(e) {
        let t = e.target
        console.log(t.parentElement)
    }
}

