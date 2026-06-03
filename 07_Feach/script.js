async function fetchDogBreeds() {

    try {

        const response =
            await fetch("https://dog.ceo/api/breeds/list/all");

        const data = await response.json();

        const breeds = Object.keys(data.message);

        const list =
            document.getElementById("breed-list");

        list.innerHTML = "";

        breeds.forEach(breed => {

            const li =
                document.createElement("li");

            li.textContent = breed;

            list.appendChild(li);
        });

    }
    catch(error) {

        console.error("Помилка:", error);

    }
}

async function getNewDogImage() {

    try {

        const response =
            await fetch("https://dog.ceo/api/breeds/image/random");

        const data =
            await response.json();

        document.getElementById("dogImg").src =
            data.message;

    }
    catch(error) {

        console.error("Помилка:", error);

    }
}

getNewDogImage();