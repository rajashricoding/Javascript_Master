const btn = document.querySelector("span");
const nav = document.querySelector("nav");
console.log(nav);
btn.addEventListener("click", ( ) => {
    if(nav.style.display=="none"){
       nav.classList.add("display");
    }
    else{
    nav.style.display="none";
    }
});