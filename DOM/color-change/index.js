const btn = document.querySelector("button");
const body =document.querySelector("body");
btn.addEventListener("click", ( ) =>{
    if(btn.innerHTML=="On"){
        body.style.backgroundColor= "black";
        btn.innerHTML="Off";
    }
    else{
        body.style.backgroundColor= "white";
        btn.innerHTML="On";
    }
})