
// Button Login
let btnLogin = document.getElementById("#btnlogin");
let user = document.querySelector("input[name='username']");
let myAlert = document.querySelector("div.alert");
let mainUrl = "http://localhost:8090/VipCenter/config";

// Focus
user.focus();

// Function


let fetchUserData = function () {

    let user = document.querySelector("input[name='username']");
    let pass = document.querySelector("input[type='password']");
    let url = `${mainUrl}/login.php?user=${user.value}&pass=${pass.value}`

    if (user.value !== "" && pass.value !== "") {

        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            if(data.status == 1){
                
                localStorage.setItem("user-data",JSON.stringify({username: user.value,pass: pass.value}));
                window.location.href = "index.html";

            } else {
                
                myAlert.classList.contains("d-none") ? myAlert.classList.remove("d-none") : null;
                myAlert.textContent = "لا يوجد مستخدم بهذا الإسم";

            } // End If Status == 1
        })
        .catch(err =>{
            console.log(err);
            myAlert.classList.contains("d-none") ? myAlert.classList.remove("d-none") : null;
            myAlert.textContent = "يوجد خطأ بقواعد البيانات"
        })

        myAlert.classList.contains("d-none") ? null : myAlert.classList.add("d-none");

    } else {

        myAlert.classList.contains("d-none") ? myAlert.classList.remove("d-none") : null;
        myAlert.textContent = "الرجاء التأكد من إدخال إسم مستخدم وكلمة سر صحيحة"
    } // End if Validation
};

// On Enter => Fetch Data
document.addEventListener("keyup",(e)=>{

    if(e.key === "Enter"){
        fetchUserData();
  
}
})

// On Click Login => Fetch Data
btnLogin.addEventListener("click",fetchUserData);
