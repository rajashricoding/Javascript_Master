const boxs = document.querySelectorAll(".box");
const btn = document.querySelector("button");

boxs.forEach((box) => {
    box.addEventListener("click", ( ) => {
       box.classList.add("selected");
    })
})

btn.addEventListener("click", ( ) => {
    boxs.forEach((box) => {
       if(box.classList.contains("selected")){
        box.remove();
       }
    })
})