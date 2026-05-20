console.log("Практична робота JavaScript");

// ---------------- ЗАВДАННЯ 1 ----------------

const currentYear = 2026;

let birthYear = +prompt("Введіть рік народження:");
let age = currentYear - birthYear;

alert(`Ваш вік: ${age}`);

let flashSize = +prompt("Введіть обсяг флешки у ГБ:");

let files = Math.floor((flashSize * 1024) / 820);

alert(`Поміститься файлів: ${files}`);


// ---------------- ЗАВДАННЯ 2 ----------------

let number = prompt("Введіть число від 0 до 9:");

switch(number)
{
    case "0":
        alert(")");
        break;

    case "1":
        alert("!");
        break;

    case "2":
        alert("@");
        break;

    case "3":
        alert("#");
        break;

    case "4":
        alert("$");
        break;

    case "5":
        alert("%");
        break;

    case "6":
        alert("^");
        break;

    case "7":
        alert("&");
        break;

    case "8":
        alert("*");
        break;

    case "9":
        alert("(");
        break;

    default:
        alert("Неправильне число");
}

let year = +prompt("Введіть рік:");

if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))
{
    alert("Рік високосний");
}
else
{
    alert("Рік не високосний");
}

let day = +prompt("Введіть день:");
let month = +prompt("Введіть місяць:");
let yearDate = +prompt("Введіть рік:");

let daysInMonth = 31;

switch(month)
{
    case 4:
    case 6:
    case 9:
    case 11:
        daysInMonth = 30;
        break;

    case 2:
        daysInMonth = ((yearDate % 400 == 0) || (yearDate % 4 == 0 && yearDate % 100 != 0)) ? 29 : 28;
        break;
}

day++;

if(day > daysInMonth)
{
    day = 1;
    month++;
}

if(month > 12)
{
    month = 1;
    yearDate++;
}

alert(`Наступна дата: ${day}.${month}.${yearDate}`);


// ---------------- ЗАВДАННЯ 3 ----------------

let start = +prompt("Введіть початок діапазону:");
let end = +prompt("Введіть кінець діапазону:");

let sum = 0;

for(let i = start; i <= end; i++)
{
    sum += i;
}

alert(`Сума чисел: ${sum}`);

let num = prompt("Введіть число:");

alert(`Кількість цифр: ${num.length}`);

let positive = 0;
let negative = 0;
let zeros = 0;
let even = 0;
let odd = 0;

for(let i = 0; i < 10; i++)
{
    let value = +prompt(`Введіть число ${i + 1}`);

    if(value > 0)
        positive++;
    else if(value < 0)
        negative++;
    else
        zeros++;

    if(value % 2 == 0)
        even++;
    else
        odd++;
}

alert(
`Позитивні: ${positive}
Негативні: ${negative}
Нулі: ${zeros}
Парні: ${even}
Непарні: ${odd}`
);

let days = ["Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота","Неділя"];

let index = 0;

do
{
    let next = confirm(`${days[index]}. Хочете побачити наступний день?`);

    if(!next)
        break;

    index++;

    if(index >= days.length)
        index = 0;

} while(true);


// ---------------- ЗАВДАННЯ 4 ----------------

function factorial(n)
{
    if(n == 1)
        return 1;

    return n * factorial(n - 1);
}

let factorialNumber = +prompt("Введіть число для факторіалу:");

alert(`Факторіал: ${factorial(factorialNumber)}`);


function createNumber(a,b,c)
{
    return Number("" + a + b + c);
}

alert(`Число: ${createNumber(1,4,9)}`);


function rectangleArea(width, height = width)
{
    return width * height;
}

alert(`Площа квадрата: ${rectangleArea(5)}`);
alert(`Площа прямокутника: ${rectangleArea(5,8)}`);


function showTime(h,m = "00",s = "00")
{
    return `${h}:${m}:${s}`;
}

alert(showTime(12));
alert(showTime(12,30));
alert(showTime(12,30,45));


function reverseNumber(n)
{
    if(n < 10)
        return String(n);

    return String(n % 10) + reverseNumber(Math.floor(n / 10));
}

let reverse = +prompt("Введіть число:");

alert(`Навпаки: ${reverseNumber(reverse)}`);


function sumDigits(n)
{
    if(n == 0)
        return 0;

    return (n % 10) + sumDigits(Math.floor(n / 10));
}

let digitNumber = +prompt("Введіть число:");

alert(`Сума цифр: ${sumDigits(digitNumber)}`);