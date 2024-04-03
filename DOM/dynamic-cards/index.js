const data = [
    {
        id:1,
        name:"Arshi",
        Goal:"Developer"
    },
    {
        id:2,
        name: "Nisha",
        Goal:"Developer"
    },
    {
        id:3,
        name: "Nayna",
        Goal:"Developer"
    }
];

const main = document.querySelector("main");
data.map((data) => {
    let card= document.createElement("div");
    card.innerHTML=`<h2>${data.id}</h2>
    <p>${data.name}</p>
    <p>${data.Goal}</p>`
    card.classList.add("card");
    main.appendChild(card);
})