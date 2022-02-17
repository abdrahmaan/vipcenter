let header = document.querySelectorAll("h4")[0];
let headerContent = document.querySelectorAll("h4")[0].textContent;
let lastText = "";
current = 0;
header.innerHTML = '';

setInterval(() => {
    if(current < headerContent.length){
      header.innerHTML += headerContent.charAt(current);
      current++;
    }
}, 150);


