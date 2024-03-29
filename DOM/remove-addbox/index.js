const boxs = document.querySelectorAll(".box");
const leftdiv =document.querySelector(".left");
const rightdiv =document.querySelector(".right");

boxs.forEach((box) => {
    box.addEventListener("click", ( ) => {
       if(box.classList.contains("red")){
        let div= document.createElement("div");
        div.classList.add("newbox1");
        leftdiv.appendChild(div);
        box.remove();
       }
       else{
        let div= document.createElement("div");
        div.classList.add("newbox2");
        rightdiv.appendChild(div);
        box.remove();
       }
    })
})