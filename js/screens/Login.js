
// Button Login
let btnLogin = document.getElementById("#btnlogin");
// Data Collect 
let user = document.querySelector("input[name='username']");
let pass = document.querySelector("input[type='password']");
let myAlert = document.querySelector("div.alert");

user.focus();

console.log(user.value);
console.log(pass.value);

// Function


let fetchUserData = function () {

    

    localStorage.setItem("user-data", JSON.stringify({
        username: user.value,
        password: pass.value
    }));

    window.location.href = "index.html";
};

// On Enter => Fetch Data
document.addEventListener("keyup",(e)=>{

    if(e.key === "Enter"){

    if(user.value !== "" && pass.value !== ""){
       myAlert.classList.contains("d-none") ? null : myAlert.classList.add("d-none");
       fetchUserData();
    } else {
        myAlert.classList.remove("d-none")
    }
}
})

// On Click Login => Fetch Data
btnLogin.addEventListener("click",fetchUserData);
