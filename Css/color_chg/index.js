const arr =['pink','orange','green','red','violet','blue','yellow'];
const h1 =document.querySelector("h1");
const button =document.querySelector("button");
const body = document.querySelector("body");
const getRandomnumber = ( ) => Math.floor(Math.random( ) * arr.length);
button.addEventListener("click", ( ) => {
    let randomNum = getRandomnumber();
    document.body.style.backgroundColor = arr[randomNum];
    h1.innerText = arr[randomNum];
    h1.style.color = arr[randomNum];
});