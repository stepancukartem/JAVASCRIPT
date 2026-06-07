function generateNumber()
{
    document.getElementById("number").innerText =
        Math.floor(Math.random() * 101);
}

const mouseArea =
    document.getElementById("mouseArea");

mouseArea.addEventListener("mousemove", function(e)
{
    mouseArea.innerText =
        `X = ${e.offsetX}, Y = ${e.offsetY}`;
});

function toggleText()
{
    const text =
        document.getElementById("text");

    if(text.style.display === "none")
        text.style.display = "block";
    else
        text.style.display = "none";
}

function removeNews(button)
{
    button.parentElement.remove();
}