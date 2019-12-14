var typewriter = document.getElementById("typewriter");
var i = 0;
var txt = 'I am Andy, your personal instructor ';
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        typewriter.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();