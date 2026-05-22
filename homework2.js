alert("Робота з об'єктом String");


// ---------------- ЗАВДАННЯ 1 ----------------

function countSpaces(str)
{
    let count = 0;

    for(let i = 0; i < str.length; i++)
    {
        if(str[i] == " ")
        {
            count++;
        }
    }

    return count;
}

let text1 = prompt("Введіть рядок:");

alert("Кількість пробілів: " + countSpaces(text1));


// ---------------- ЗАВДАННЯ 2 ----------------

function upperFirst(str)
{
    return str[0].toUpperCase() + str.slice(1);
}

let text2 = prompt("Введіть рядок:");

alert("Результат: " + upperFirst(text2));


// ---------------- ЗАВДАННЯ 3 ----------------

function countWords(str)
{
    let words = str.trim().split(" ");

    return words.length;
}

let text3 = prompt("Введіть речення:");

alert("Кількість слів: " + countWords(text3));


// ---------------- ЗАВДАННЯ 4 ----------------

function makeShort(str)
{
    let words = str.split(" ");
    let result = "";

    for(let word of words)
    {
        result += word[0].toUpperCase();
    }

    return result;
}

let text4 = prompt("Введіть словосполучення:");

alert("Абревіатура: " + makeShort(text4));


// ---------------- ЗАВДАННЯ 5 ----------------

function isPalindrome(str)
{
    str = str.toLowerCase();

    let reversed = str.split("").reverse().join("");

    return str == reversed;
}

let text5 = prompt("Введіть слово:");

if(isPalindrome(text5))
{
    alert("Це паліндром");
}
else
{
    alert("Це не паліндром");
}


// ---------------- ЗАВДАННЯ 6 ----------------

function parseUrl(url)
{
    let protocol = url.split("://")[0];

    let rest = url.split("://")[1];

    let domain = rest.split("/")[0];

    let path = "/" + rest.split("/").slice(1).join("/");

    return `Протокол: ${protocol}
Домен: ${domain}
Шлях: ${path}`;
}

let url = prompt("Введіть URL:");

alert(parseUrl(url));