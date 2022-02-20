
/// Redirect 404 if Un USER

let user = localStorage.getItem("user-data");

if (user === null) {
    document.body.innerHTML = "";
    document.body.innerHTML = `<div class="container d-flex flex-column justify-content-center bg-info" style="min-height: calc(100vh - 60px)">
    <h4 class="text-dark">Page Not Found 404</h4>
    </div>`
    // window.location.href = "index.html";
}

/**********/


/// Text Typing Effect
let header = document.querySelector("#header-newentry");
let headerContent = document.querySelector("#header-newentry").textContent;
current = 0;
header.innerHTML = "";

setInterval(() => {
    if(current < headerContent.length){
        header.innerHTML += headerContent.charAt(current);
        current++;
    }
}, 100);


/***********/

// Fetch All Teachers In Options



/***********/


/// Validation & Focus
let inputs = document.querySelectorAll("input,select");
let btnAddEntry = document.querySelector("div.btn.btn-success");
let myAlert = document.querySelector("div.alert.alert-danger");
let mainUrl = "http://localhost:8090/VipCenter/config";



// Focus
inputs[0].focus();
// Get Today Data And set Date
var date = new Date();
var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0];
// Set Date
inputs[3].setAttribute("value",dateString);

let NewEntry = () =>{
    if(inputs[0] !== "" && inputs[0].value.length >= 11 && ! inputs[0].value.includes("ى")){

        let inputs = document.querySelectorAll("input,select");

        let url = `${mainUrl}/new_hdor.php?name=${inputs[0].value}&teacher=${inputs[1].value}&leason=${inputs[2].value}&date=${inputs[3].value}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {


                console.log(data);

                if (data.status == 1) {

                    console.log("done");

                    // Alert Setting
                    myAlert.textContent = "تم حضور الطالب بنجاح"
                    myAlert.classList.contains("alert-danger") ? myAlert.classList.replace("alert-danger", "alert-success") : null;
                    myAlert.classList.contains("d-none") ? myAlert.classList.remove("d-none") : null;
                    setTimeout(() => {
                        myAlert.classList.add("d-none");
                    }, 2500);
                    console.log("done");
                    // Inputs After Add Setting 
                    inputs[0].focus();
                    inputs[0].value = "";
    

                }
            })
            .catch(error => {

                console.log(error);
                myAlert.classList.contains("d-none") ? myAlert.classList.remove("d-none") : null;
                myAlert.classList.contains("alert-success") ? myAlert.classList.replace("alert-success", "alert-danger") : null;
                myAlert.textContent = "يوجد خطأ بقواعد البيانات";
                setTimeout(() => {
                    myAlert.classList.add("d-none");
                }, 4000);

            });

    } else {

       myAlert.classList.contains("d-none") ? myAlert.classList.remove("d-none") : null;
       myAlert.classList.contains("alert-success") ? myAlert.classList.replace("alert-success","alert-danger") : null;
        myAlert.textContent = "برجاء التأكد من كتابة إسم الطالب ثلاثى ، والتأكد من كتابة حرف الـ ي بالنقاط" ;
        setTimeout(() => {
            myAlert.classList.add("d-none");
        }, 2500);
        console.log("please Check data");
      
    }
}

document.addEventListener("keyup",(e)=>{
if(e.key === "Enter"){
   NewEntry();
}
})

btnAddEntry.addEventListener("click",NewEntry)