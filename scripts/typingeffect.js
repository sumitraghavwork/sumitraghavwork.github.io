window.onload


var i = 0;
var txt = 'JAVA BACKEND DEVELOPER'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

setInterval(typeWriter,2000);

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("java-typing").innerHTML += txt.charAt(i);
    i++;
    if(i==txt.length) i==0;
    setTimeout(typeWriter, speed);
  }
}