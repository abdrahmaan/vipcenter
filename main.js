let data2 = {};



fetch("http://localhost:8090/mahaly/login.php?username=kareem&password=123")
.then(response => response.json())
.then(data => {
if(data.status === 0){

console.log("Check data")

} else {

    data2 = data
    console.log(data2.data[0].username);
    console.log(data2.data[0].passwordd);
    console.log(data2.status);
}


})