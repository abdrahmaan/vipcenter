let mainHeader = `<header style="height: 60px; z-index:5; background-color: #21325E;">
<div class="container d-flex align-items-center justify-content-between px-2" style="height: 60px;">
   <a href="index.html"><img src="assests/imgs/logo2.png" style="max-width:90px; cursor: pointer"></img></a>
    <nav class="row justify-content-center align-items-center d-none d-lg-block">
        <ul class="d-flex align-items-center justify-content-center" style="height: 100%;">
            <li class="ms-3"><a id="home" class="px-1 text-light" href="index.html">الرئيسية<img class="ms-1" src="assests/badge-wc.svg"></img></a></li>
            <li class="ms-3"><a id="hdor" class="px-1 text-light" href="Hdor.html">الحضور و الغياب<img class="ms-1" src="assests/icon-hdor.svg"></img></a></li>
            <li class="ms-3"><a id="examresults" class="px-1 text-light" href="ExamResults.html">نتائج الإمتحانات<img class="ms-1" src="assests/icon-exam.svg"></img></a></li>
                <li class="ms-4"><a class="px-2 text-light" href="Login.html">تسجيل الدخول <img class="ms-1" src="assests/icon-login.svg"></img></a></li>
            </ul> 
        </nav>
        <p class="d-block d-lg-none" style="padding:0; margin: 0; color: white;">Menu</p>
    </div>
</header>`;

let userHeader = `
<header style="height: 60px; background-color: #21325E; z-index: 5">
<div class="container d-flex align-items-center justify-content-between px-2" style="height: 60px;">
    <a href="index.html"><img src="assests/imgs/logo2.png" style="max-width:90px; cursor: pointer"></img></a>
    <nav class="row justify-content-center align-items-center d-none d-lg-block">
        <ul class="d-flex align-items-center justify-content-center" style="height: 100%;">
            <li class="ms-3"><a id="home" class="px-1 text-light" href="index.html">الرئيسية<img class="ms-1" src="assests/badge-wc.svg"></img></a></li>
            <li class="ms-3"><a id="hdor" class="px-1 text-light" href="Hdor.html">الحضور و الغياب<img class="ms-1" src="assests/icon-hdor.svg"></img></a></li>
            <li class="ms-3"><a id="examresults" class="px-1 text-light" href="ExamResults.html">نتائج الإمتحانات<img class="ms-1" src="assests/icon-exam.svg"></img></a></li>
            <li class="ms-3">                 
                    <div class="dropdown-toggle btn bg-info" data-bs-toggle="dropdown">
                    الإضافات
                    <img class="ms-1" src="assests/icon-adds.svg"></img>
                    </div>
                    <ul class="dropdown-menu text-center">
                      <li><a class="dropdown-item " href="NewEntry.html">حضور طالب <img class="ms-1" src="assests/icon-newhdor.svg"></img></a></li>
                      <li><a class="dropdown-item" href="ExamCorrect.html">نتيجة إمتحان <img class="ms-1" src="assests/icon-newresult.svg"></img></a></li>
                      <li><a class="dropdown-item" href="NewStudient.html">طالب جديد <img class="ms-1" src="assests/icon-newstu.svg"></img></a></li>
                      <li><a class="dropdown-item" href="NewTeacher.html">مدرس أو مادة جديدة <img class="ms-1" src="assests/icon-newteacher.svg"></img></a></li>
                    </ul>
            </li>
            <li id ="btn-logout" class="ms-4"><a class="px-2 text-light" href="">تسجيل الخروج <img class="ms-1" src="assests/icon-logout.svg" ><img/></a></li>
        </ul> 
    </nav>
    <p class="d-block d-lg-none" style="padding:0; margin: 0; color: white;">Menu</p>
</div>
</header>
`

let userObj = localStorage.getItem("user-data");

if(userObj === null){

let myDiv = document.createElement("div");
myDiv.classList.add("w-100");
myDiv.style.cssText = "min-width: 100vw;" ;
myDiv.innerHTML = mainHeader
document.body.prepend(myDiv);
} else {
    let myDiv = document.createElement("div");
    myDiv.classList.add("w-100");
    myDiv.style.cssText = "min-width: 100vw;" ;
    myDiv.innerHTML = userHeader
    document.body.prepend(myDiv);
}




//////////// Functions


let logout = document.querySelector("#btn-logout");
// Clear User Obj from Local Storage
logout.addEventListener("click", (e)=>{
e.preventDefault();
localStorage.removeItem("user-data");
window.location.href = "index.html";
console.log("Hello");
});