function login(event)
{
    event.preventDefault();

    const login =
        document.getElementById("login").value;

    alert(`Привіт, ${login}!`);
}

function register(event)
{
    event.preventDefault();

    alert("На пошту надіслано лист підтвердження");
}

function saveForm(event)
{
    event.preventDefault();

    const skills =
        [...document.querySelectorAll('input[type="checkbox"]:checked')]
        .map(x => x.value)
        .join(", ");

    document.getElementById("result").innerHTML = `
    <table border="1">
        <tr><td>Firstname</td><td>${fname.value}</td></tr>
        <tr><td>Lastname</td><td>${lname.value}</td></tr>
        <tr><td>Birthday</td><td>${birthday.value}</td></tr>
        <tr><td>Country</td><td>${country.value}</td></tr>
        <tr><td>City</td><td>${city.value}</td></tr>
        <tr><td>Skills</td><td>${skills}</td></tr>
    </table>
    `;
}

function addColor()
{
    const r = document.getElementById("r").value;
    const g = document.getElementById("g").value;
    const b = document.getElementById("b").value;

    const color = `rgb(${r}, ${g}, ${b})`;

    const div = document.createElement("div");

    div.style.display = "inline-block";
    div.style.margin = "5px";
    div.style.padding = "10px";
    div.style.border = "1px solid black";

    div.innerHTML =
    `<span style="
    display:inline-block;
    width:20px;
    height:20px;
    background:${color};
    "></span> ${color}`;

    document.getElementById("colors").appendChild(div);
}