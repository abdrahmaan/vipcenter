let menu = document.querySelector("#menu-list");
let nav = document.querySelector("header .container nav")

let menuVisible = false;


let ToggleMenu = function () {

    if (menuVisible) {
        nav.style.height = "0vh";
        menuVisible = false
    } else {
        nav.style.height = "105vh";
        menuVisible = true;
    }

};

menu.addEventListener("click", ToggleMenu);

document.addEventListener("click", () => {
})