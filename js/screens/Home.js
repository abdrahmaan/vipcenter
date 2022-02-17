
/// Text Typing Animation
let header = document.querySelector("h2.text-warning");
let headerContent = header.textContent;
let current = 0;

header.innerHTML = "";

setTimeout(() => {
    setInterval(() => {
        if (current < headerContent.length) {
            header.innerHTML += headerContent.charAt(current);
            current++
        }

    }, 90);
}, 400);


// ******************//

/// Add Class To Nav Button
setTimeout(() => {
    let btnHome = document.querySelector("#home");
    console.log(btnHome);
    btnHome.classList.add("active");
}, 100);



    


let data = localStorage.getItem("user-data");



