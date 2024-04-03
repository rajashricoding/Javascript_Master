const dice = document.querySelector(".dice");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
let chance= 6;
const random = ( ) => {
    return Math.floor(Math.random( ) * 6);
}

btn.addEventListener("click", ( ) => {
    let ans = dice.innerText= random() + 1;
    container.innerHTML=" ";
   
  
    for(let i=0;  i < ans; i++){
        let div = document.createElement("div");
        div.classList.add("box");
        container.appendChild(div);
     }
})