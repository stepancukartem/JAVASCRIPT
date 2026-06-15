let colors = [
{
    name:"YELLOWGREEN",
    type:"RGB",
    code:"154,205,50"
},
{
    name:"DARKCYAN",
    type:"RGB",
    code:"0,139,139"
},
{
    name:"ORANGERED",
    type:"HEX",
    code:"#FF4500"
}
];

loadCookie();
showColors();

function addColor()
{
    const name =
    document.getElementById("name")
    .value
    .trim()
    .toUpperCase();

    const type =
    document.getElementById("type")
    .value;

    const code =
    document.getElementById("code")
    .value
    .trim();

    const error =
    document.getElementById("error");

    error.textContent = "";

    if(!/^[A-Z]+$/.test(name))
    {
        error.textContent =
        "Color can only contain letters";
        return;
    }

    if(colors.some(c=>c.name===name))
    {
        error.textContent =
        "Color already exists";
        return;
    }

    if(type==="RGB")
    {
        const rgb =
        /^(\d{1,3}),(\d{1,3}),(\d{1,3})$/;

        if(!rgb.test(code))
        {
            error.textContent =
            "RGB format: 255,255,255";
            return;
        }
    }

    if(type==="RGBA")
    {
        const rgba =
        /^(\d{1,3}),(\d{1,3}),(\d{1,3}),(0|0?\.\d+|1)$/;

        if(!rgba.test(code))
        {
            error.textContent =
            "RGBA format: 255,255,255,0.5";
            return;
        }
    }

    if(type==="HEX")
    {
        const hex =
        /^#[0-9A-Fa-f]{6}$/;

        if(!hex.test(code))
        {
            error.textContent =
            "HEX format: #FF4500";
            return;
        }
    }

    colors.push({
        name,
        type,
        code
    });

    saveCookie();
    showColors();

    document.getElementById("name").value="";
    document.getElementById("code").value="";
}

function showColors()
{
    const div =
    document.getElementById("colors");

    div.innerHTML="";

    colors.forEach(color=>{

        const card =
        document.createElement("div");

        card.className="color-card";

        let bg;

        if(color.type==="HEX")
            bg=color.code;
        else
            bg=`${color.type.toLowerCase()}(${color.code})`;

        card.style.background=bg;

        card.innerHTML=
        `<div>${color.name}</div>
         <div>${color.code}</div>`;

        div.appendChild(card);
    });
}

function saveCookie()
{
    const date = new Date();

    date.setHours(date.getHours()+3);

    document.cookie =
    "colors="+
    encodeURIComponent(JSON.stringify(colors))
    +
    ";expires="+
    date.toUTCString()+
    ";path=/";
}

function loadCookie()
{
    const cookie =
    document.cookie
    .split("; ")
    .find(row =>
    row.startsWith("colors="));

    if(cookie)
    {
        colors =
        JSON.parse(
        decodeURIComponent(
        cookie.split("=")[1]
        ));
    }
}