function openModal()
{
    document.getElementById("modal").style.display = "block";
}

function closeModal()
{
    document.getElementById("modal").style.display = "none";
}

let current = 0;

function nextLight()
{
    const red = document.getElementById("red");
    const yellow = document.getElementById("yellow");
    const green = document.getElementById("green");

    red.style.background = "gray";
    yellow.style.background = "gray";
    green.style.background = "gray";

    if(current === 0)
    {
        red.style.background = "red";
    }
    else if(current === 1)
    {
        yellow.style.background = "orange";
    }
    else
    {
        green.style.background = "green";
    }

    current++;

    if(current > 2)
    {
        current = 0;
    }
}

let percent = 0;

function addProgress()
{
    if(percent < 100)
    {
        percent += 5;
        document.getElementById("progress").value = percent;
    }
}