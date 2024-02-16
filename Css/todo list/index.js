const input = document.querySelector("input");
const add = document.querySelector(".add");
const list = document.querySelector(".todo_items");
add.addEventListener ("click", ( ) => {
    let inputValue = input.value;
    if (inputValue.length == 0) {
        alert("Please Write Something");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML =`<p> ${inputValue} </p> 
        <button class="remove"> x </button>
        `;
        list.appendChild("li");
        inputValue = " ";
    }
});