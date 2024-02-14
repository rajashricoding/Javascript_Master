const h1 =document.querySelector("#head");
/*function changetext() {
    h1.innerText = "Sign in";
}*/
const input =document.querySelector("#in");
const label =document.querySelector("#label");
function changein() {
    input.setAttribute("placeholder", "User name");
    label.innerText = "Enter user name";
    h1.innerText = "Sign up";
}