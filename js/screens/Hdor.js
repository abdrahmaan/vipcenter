
/// Foucs on Input
let stuname = document.querySelector("input")
stuname.focus();

/// Text Typing Animation

// Elements & Text 
let header = document.querySelector(".container #txt-header");
let headerContent = header.textContent;
console.log(header);
console.log(headerContent);
currentHeader = 0;
header.innerHTML = "";
//***
let desc = document.querySelector(".container #desc");
let descContent = desc.textContent;
currentDesc = 0;
desc.innerHTML = "";
/// ****

setInterval(() => {
    if(currentHeader < headerContent.length){
      header.innerHTML += headerContent[currentHeader];
      currentHeader++;
    }
}, 100);

setInterval(() => {
    if(currentDesc < descContent.length){
      desc.innerHTML += descContent[currentDesc];
      currentDesc++;
    }
}, 60);

///*****
setTimeout(() => {
let header = document.querySelector("header .container a#hdor");
  header.classList.add("active");
}, 50);



/// On Enter Validation

document.addEventListener("keyup",(e)=>{
  if(e.key === "Enter"){
  
let name = document.querySelector("input");
let alert = document.querySelector("div.alert.alert-danger");



if(name.value.length >= 10 && ! name.value.includes("ى")){

  alert.classList.contains("d-none") ? null : alert.classList.add("d-none") ;
  // Fetch API Here 
  console.log(name.value);
  console.log(name.value.length);

} else {

  alert.classList.remove("d-none");
  alert.innerHTML="من فضلك ، إكتب إسم الطالب ثلاثى وتأكد من وجود حرف الـ ي بالنقاط"

}


  }

})



