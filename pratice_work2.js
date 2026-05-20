alert("Практична робота запущена");

// ---------------- ЗАВДАННЯ 1 ----------------

let numbers = [];

for(let i = 0; i < 20; i++)
{
    numbers.push(Math.floor(Math.random() * 100) + 1);
}

alert("Масив створено:\n" + numbers.join(", "));


// ---------------- ЗАВДАННЯ 2 ----------------

let output = "";

for(let i = 0; i < numbers.length; i++)
{
    output += `[${i + 1}] - ${numbers[i]}\n`;
}

alert(output);


// ---------------- ЗАВДАННЯ 3 ----------------

let hasSeven = numbers.some(num => num % 7 == 0);

if(hasSeven)
{
    alert("У масиві є число кратне 7");
}
else
{
    alert("У масиві немає числа кратного 7");
}


// ---------------- ЗАВДАННЯ 4 ----------------

numbers.sort((a,b) => b - a);

alert("Масив по спаданню:\n" + numbers.join(", "));


// ---------------- ЗАВДАННЯ 5 ----------------

for(let i = numbers.length / 2; i < numbers.length; i++)
{
    numbers[i] = 0;
}

alert("Друга половина масиву = 0:\n" + numbers.join(", "));


// ---------------- ЗАВДАННЯ 6 ----------------

numbers.splice(0,3);

alert("Після видалення перших 3 елементів:\n" + numbers.join(", "));


// ---------------- ЗАВДАННЯ 7 ----------------

let duplicates = numbers.some((item,index) => numbers.indexOf(item) != index);

if(duplicates)
{
    alert("Масив має однакові елементи");
}
else
{
    alert("Однакових елементів немає");
}


// ---------------- ЗАВДАННЯ 8 ----------------

let newArray = numbers.slice(1, numbers.length - 1);

alert("Новий масив без крайніх елементів:\n" + newArray.join(", "));


// ---------------- ЗАВДАННЯ 9 ----------------

let evenCount = numbers.filter(num => num % 2 == 0).length;

alert("Кількість парних чисел: " + evenCount);