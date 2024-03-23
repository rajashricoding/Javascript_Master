const box = document.querySelectorAll(".box");
const btn = document.querySelectorAll("button");
btn.forEach( (button) => {
    button.addEventListener("click", ( ) => {
        box.forEach((ele) => {
            ele.style.backgroundColor = button.textContent;
        })
    })
})