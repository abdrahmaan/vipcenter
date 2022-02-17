// Header Text Typing Effect]

let header = document.getElementById("header");
let headerContent = header.textContent;
console.log(headerContent);
let current = 0;

header.innerHTML = "";
let headerFunction = setInterval(() => {
    
if(current < headerContent.length){

    header.innerHTML += headerContent.charAt(current);
    current++;
} else   {

    clearInterval(headerFunction);
}

}, 100);