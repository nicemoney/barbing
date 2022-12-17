let menubar = document.querySelector(".menubar");
let ibtn = document.querySelector(".ibtn");
let nice = false;

menubar.style.left = "-400px"

function togglebtn() {
    if (nice == false) {
        menubar.style.left="85%"
        nice = true;
    }
    else if (nice == true) {
        menubar.style.left="-400px"
        nice = false;
    }
}
menubtn.onclick = togglebtn;