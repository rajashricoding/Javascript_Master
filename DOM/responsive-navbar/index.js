const btn = document.querySelector("span");
const nav = document.querySelector("nav");

btn.addEventListener("click", ( ) => {
    nav.classList.toggle("display");
});