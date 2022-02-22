/// Focus on input
let stuName = document.querySelector("input");
stuName.focus();

/// Make TextTyping Animation
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

//****

setTimeout(() => {
  let header = document.querySelector("header .container a#examresults");
  header.classList.add("active");
}, 100);


/// Enter And Click Search Action

let btn = document.querySelector("div#btn-hdor");
let mainUrl = "http://localhost:8090/VipCenter/config";

let DeleteExam = function (e) {
  console.log(e.target.id);

  let id = e.target.id;
  let url = `${mainUrl}/delete.php?id=${id}&action=exam`
  fetch(url)
  .then(resp => resp.json())
  .then(data => {

    if(data.status == 1){
      e.target.parentElement.parentElement.remove();
    }

  })

  } // E-F

let SearchFunction = function () {
  let name = document.querySelector("input");
  let alert = document.querySelector("div.alert.alert-danger");
  let table = document.querySelector("table tbody");
  let head = document.querySelector("table thead");
 
  let url = `${mainUrl}/exams.php?name=${name.value}`;

  if (name.value.length >= 10 && !name.value.includes("ى")) {


    // Hide Alert
    alert.classList.contains("d-none") ? null : alert.classList.add("d-none");

    // Show Table Head IF USER 
    localStorage.getItem("user-data") === null ? head.firstElementChild.firstElementChild.remove() : null;

    //Fetch Data
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      if(data.status == 1){
        // Delete Rows 
        table.innerHTML = "";

        //Show Table 
        table.parentElement.classList.contains("d-none") ? table.parentElement.classList.remove("d-none") : null;
        
        // Hide Alert 
        alert.classList.contains("d-none") ? null : alert.classList.add("d-none");

        data.data.forEach(obj => {
        if(! localStorage.getItem("user-data")){

          let tr = document.createElement("tr");
          let trData = `
          <td>${obj.Date}</td>
          <td>${obj.Stu_degree}</td>
          <td>${obj.Full_degree}</td>
          <td>${obj.Teacher}</td>
          <td>${obj.Leason}</td>
          <td>${obj.Namee}</td>
          <td>${obj.id}</td>
          `;
          tr.innerHTML += trData;
          table.appendChild(tr);

        } else {

          let tr = document.createElement("tr");
          let trData = `
          <td>
          <div id="${obj.id}" class="btn btn-danger btn-delete">حذف</div>
          </td>
          <td>${obj.Date}</td>
          <td>${obj.Stu_degree}</td>
          <td>${obj.Full_degree}</td>
          <td>${obj.Teacher}</td>
          <td>${obj.Leason}</td>
          <td>${obj.Namee}</td>
          <td>${obj.id}</td>
          `;
          tr.innerHTML += trData;
          table.appendChild(tr);

        } // End IF He Is User IN Table Render
        })
        

          //Attach Button's' Delete
          let btnDelete = document.querySelectorAll("div.btn.btn-delete");

          
          //loop on it to Add Action Delete
          btnDelete.forEach(btn => {

              btn.addEventListener("click",(e) =>{
                  DeleteExam(e);
              });
    
            
          });

      } else {

        table.parentElement.classList.contains("d-none") ? null : table.parentElement.classList.add("d-none") ;
        alert.classList.contains("d-none") ? alert.classList.remove("d-none") : null ;
        alert.innerHTML = "لا يوجد طالب بهذا الإسم الرجاء التأكد من كتابة الإسم الثلاثى صحيح"
      } // End If Status == 1
    })
    .catch(err => {
        console.log(err);
        alert.classList.contains("d-none") ? alert.classList.remove("d-none") : null;
        table.parentElement.classList.contains("d-none") ? null : table.parentElement.classList.add("d-none");
        alert.innerHTML = "يوجد خطأ بقواعد البيانات";
      });

  } else {

    alert.classList.contains("d-none") ? alert.classList.remove("d-none") : null;
    table.parentElement.classList.contains("d-none") ? null : table.parentElement.classList.add("d-none");
    alert.innerHTML = "من فضلك ، إكتب إسم الطالب ثلاثى وتأكد من وجود حرف الـ ي بالنقاط";

  } // End If Validation
  }

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {

    SearchFunction();

  }

});

btn.addEventListener("click",SearchFunction);


