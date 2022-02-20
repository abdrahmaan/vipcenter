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



//// Validation And Focus 

let inputs = document.querySelectorAll("input");
let btnAdd = document.querySelector(".btn.btn-primary");
let myAlert = document.querySelector(".alert.alert-danger");
let mainUrl = "http://localhost:8090/VipCenter/config";

// Focus 
inputs[0].focus();

let AddStudient = function (){

  let inputs = document.querySelectorAll("input,select");

  if (inputs[0] !== "" && inputs[0].value.length >= 9 && !inputs[0].value.includes("ى") && inputs[1].value.length == 11 && inputs[2].value !== "") {

    let url = `${mainUrl}/new_stu.php?name=${inputs[0].value}&phone=${inputs[1].value}&saf=${inputs[2].value}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {


        console.log(data);

        if (data.status == 1) {

          console.log("done");

          // Alert Setting
          myAlert.textContent = "تم إضافة الطالب بنجاح"
          myAlert.classList.contains("alert-danger") ? myAlert.classList.replace("alert-danger", "alert-success") : null;
          myAlert.classList.contains("d-none") ? myAlert.classList.remove("d-none") : null;
          setTimeout(() => {
            myAlert.classList.add("d-none");
          }, 2500);
          // Inputs After Add Setting 
          inputs[0].focus();
          inputs[0].value = "";
          inputs[1].value = "";
          

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
    myAlert.classList.contains("alert-success") ? myAlert.classList.replace("alert-success", "alert-danger") : null;
    myAlert.textContent = "الرجاء التأكد من كتابه إسم المدرس ثلاثى , حرف الـ ي مكتوب بالنقاط , رقم تيليفون صحيح";
    setTimeout(() => {
      myAlert.classList.add("d-none");
    }, 4000);
    console.log("please Check data");
  }
}


 document.addEventListener("keyup",(e)=>{
   if(e.key === "Enter"){
     AddStudient();
   }
 });

 btnAdd.addEventListener("click",AddStudient);


