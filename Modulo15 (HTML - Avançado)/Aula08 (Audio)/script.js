song = document.getElementById('podcast');

function play() {
    song.play();
}

function pause() {
    song.pause();
}

function recromeça() {
    song.pause();
    song.currentTime = 0;
}

function avançar() {
    song.currentTime += 15;
}

function retroceder() {
    song.currentTime -= 15;
}

function aumentar_vel() {
    song.playbackRate += 0.1;
}

function diminuir_vel() {
    song.playbackRate -= 0.1;
}