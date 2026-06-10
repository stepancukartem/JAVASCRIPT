const colors = [
{
    name: "YELLOWGREEN",
    type: "RGB",
    code: "154,205,50"
},
{
    name: "DARKCYAN",
    type: "RGB",
    code: "0,139,139"
},
{
    name: "ORANGERED",
    type: "HEX",
    code: "#FF4500"
}
];

showColors();

function showColors()
{
    const container = document.getElementById("colors");

    container.innerHTML = "";

    colors.forEach(color =>
    {
        const div = document.createElement("div");

        let bgColor;

        if(color.type === "HEX")
            bgColor = color.code;
        else
            bgColor = `${color.type.toLowerCase()}(${color.code})`;

        div.style.display = "inline-block";
        div.style.width = "180px";
        div.style.margin = "10px";
        div.style.padding = "20px";
        div.style.textAlign = "center";
        div.style.backgroundColor = bgColor;
        div.style.color = "white";

        div.innerHTML = `
            <b>${color.name}</b><br>
            ${color.code}
        `;

        container.appendChild(div);
    });
}

function addColor(event)
{
    event.preventDefault();

    const name =
        document.getElementById("colorName")
        .value
        .trim()
        .toUpperCase();

    const type =
        document.getElementById("colorType")
        .value;

    const code =
        document.getElementById("colorCode")
        .value
        .trim();

    if(!/^[A-Za-z]+$/.test(name))
    {
        alert("Назва повинна містити лише літери");
        return;
    }

    if(colors.some(x => x.name === name))
    {
        alert("Така назва вже існує");
        return;
    }

    colors.push({
        name,
        type,
        code
    });

    showColors();

    document.querySelector("form").reset();
}