
var sound = document.getElementById('music');
var duracion = sound.duration;
console.log(duracion);


function reproducir(){
  sound.play();
}
function detener(){
  sound.pause();
}
function silencio(){
  sound.mute();
}

// volume buttons
function volDn() {
    sound.volume= sound.volume - 0.1;
}
function volUp() {
      sound.volume= sound.volume + 0.1;
}
//adelantar retrasar
function atras() {
    sound.currentTime= sound.currentTime - 5;
}
function adelante() {
      sound.currentTime= sound.currentTime + 5;
}
