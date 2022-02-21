
/// Foucs on Input
let stuname = document.querySelector("input")
stuname.focus();

/// Text Typing Animation

// Elements & Text 
let header = document.querySelector(".container #txt-header");
let headerContent = header.textContent;
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



/// On Enter Validation And Fetch Data

let btnHdor = document.querySelector("div#btn-hdor");
let mainUrl = "http://localhost:8090/VipCenter/config";



let DeleteHdor = function(e){

  let id = e.target.dataset.id;
  let url = `${mainUrl}/delete.php?id=${id}&action=hdor`;
  fetch(url)
  .then(res =>res.json())
  .then(data => {
    console.log(data);
      if(data.status == 1){
          e.target.parentElement.parentElement.remove();
      }
  });

}
let SearchFunction = function () {

  let name = document.querySelector("input");
  let image = document.querySelector("img.d-lg-block");
  let table = document.querySelector("table tbody");
  let myAlert = document.querySelector("div.alert.alert-danger");
  let actions = document.querySelector("th.actions");

  if (name.value.length >= 9 && !name.value.includes("ى")) {
    
    let url = `${mainUrl}/hdor.php?name=${name.value}`;
    myAlert.classList.contains("d-none") ? null : myAlert.classList.add("d-none");

    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if(data.status == 1){

        table.innerHTML = "";
        table.parentElement.classList.contains("d-none") ? table.parentElement.classList.remove("d-none") : null;
        myAlert.classList.contains("d-none") ? null : myAlert.classList.add("d-none");
        image.style.top = "17px";
        image.style.left = "-50px";
        localStorage.getItem("user-data") !== null ? actions.classList.remove("d-none") : null;

        data.data.forEach(obj => {
         
            if(! localStorage.getItem("user-data")){   
              let row = document.createElement("tr"); 
              let data = `
              <td>${obj.Date}</td>
              <td>${obj.Teacher}</td>
              <td>${obj.Leason}</td>
              <td>${obj.Namee}</td>
              <td>${obj.id}</td>`
              row.innerHTML = data;
              // console.log(row);
              table.appendChild(row);           
            } else {
    
             let row = document.createElement("tr");
              let data = `
              <td>
              <div class="btn btn-danger btn-delete" data-id="${obj.id}">حذف</div>
              </td>
              <td>${obj.Date}</td>
              <td>${obj.Teacher}</td>
              <td>${obj.Leason}</td>
              <td>${obj.Namee}</td>
              <td>${obj.id}</td>`
              row.innerHTML = data;
              table.appendChild(row);


            } // End If Client is User 

        });

        let btnDelete = document.querySelectorAll("div.btn.btn-delete");

        btnDelete.forEach(btn => {

           btn.addEventListener("click", (e) => {
             
            DeleteHdor(e);
          
          })})


      } else {
        table.parentElement.classList.contains("d-none") ? null : table.parentElement.classList.add("d-none");
        myAlert.classList.contains("d-none") ? myAlert.classList.remove("d-none") : null;
        myAlert.innerHTML = "لا يوجد طالب بهذا الإسم الرجاء التأكد من إدخال الإسم ثلاثى صحيح"
        image.style.top = "50px";
        image.style.left = "-90px";
        setTimeout(()=>{myAlert.classList.add("d-none")},2500)
      } // End if Status = 1   
    })
    .catch(error=>{
      console.log(error);
      table.parentElement.classList.contains("d-none") ? null : table.parentElement.classList.add("d-none");
      myAlert.classList.contains("d-none") ? myAlert.classList.remove("d-none") : null;
      myAlert.textContent = "يوجد خطأ بقواعد البيانات";
      image.style.top = "50px";
      image.style.left = "-90px";
      setTimeout(() => { myAlert.classList.add("d-none") }, 2500)
    })

  } else {

    table.parentElement.classList.contains("d-none") ? null : table.parentElement.classList.add("d-none") ;
    myAlert.classList.contains("d-none") ? myAlert.classList.remove("d-none") : null;
    myAlert.innerHTML = "من فضلك ، إكتب إسم الطالب ثلاثى وتأكد من وجود حرف الـ ي بالنقاط"
    image.style.top = "50px";
    image.style.left = "-90px";
    setTimeout(() => { myAlert.classList.add("d-none") }, 2500)
  } // End If Validaion
}

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {

    SearchFunction()


  }

});

btnHdor.addEventListener("click", SearchFunction);
btnDelete.addEventListener("click",(e)=>{console.log(e.target.dataset.id)});



