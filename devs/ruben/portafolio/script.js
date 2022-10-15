//hiding navbar
let prevScrollPos = window.scrollY;

window.onscroll = () => {
    let navBar = document.querySelector('.nav-bar');
    let currentScrollPos = window.scrollY;
    if(prevScrollPos > currentScrollPos) {
        navBar.style.top = "0";
    } else {
        navBar.style.top = "-130px"
    }
    prevScrollPos = currentScrollPos;
}

let navListItem = document.getElementsByClassName("nav-list-item");

let navlist = document.querySelector(".nav-list");


window.onload = () => {
    navlist.style.gridTemplateColumns = "1fr"
    for (let i = 0; i < navListItem.length -1; i++) {
        navlist.style.gridTemplateColumns += " 1fr"
    }
}