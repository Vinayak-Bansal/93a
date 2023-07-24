function addUser() {
    username=document.getElementById("user_name").value;
    localStorage.setItem("user_name" , username);
    window.location="kwitterroom.html"
}
var name_of_var = "6"