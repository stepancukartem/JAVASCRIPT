const products = [

    {
        name: "Pepper",
        image: "icons/Food_C247-128.png"
    },

    {
        name: "Apple",
        image: "icons/Food_C240-128.png"
    },

    {
        name: "Cheese",
        image: "icons/Food_C217-128.png"
    },

    {
        name: "Corn",
        image: "icons/Food_C245-128.png"
    },

    {
        name: "Mushroom",
        image: "icons/Food_C239-128.png"
    },

    {
        name: "Garlic",
        image: "icons/Food_C238-128.png"
    },

    {
        name: "Beef",
        image: "icons/Food_C225-128.png"
    },

    {
        name: "Fish",
        image: "icons/Food_C205-128.png"
    },

    {
        name: "Eggs",
        image: "icons/Food_C203-128.png"
    },

    {
        name: "Coriander",
        image: "icons/Food_C235-128.png"
    }

];

const container = document.getElementById("products");

function addProduct(index){

    const item = products[index];

    container.innerHTML += `

        <div class="card">

            <img src="${item.image}">

            <p>${item.name}</p>

        </div>

    `;
}