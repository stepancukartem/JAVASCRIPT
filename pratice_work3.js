alert("Практична робота №3");


// ---------------- ЗАВДАННЯ 1 ----------------

let time = {
    hours: 10,
    minutes: 59,
    seconds: 58,

    showTime()
    {
        let h = String(this.hours).padStart(2, "0");
        let m = String(this.minutes).padStart(2, "0");
        let s = String(this.seconds).padStart(2, "0");

        return `${h}:${m}:${s}`;
    },

    addSecond()
    {
        this.seconds++;

        if(this.seconds >= 60)
        {
            this.seconds = 0;
            this.minutes++;
        }

        if(this.minutes >= 60)
        {
            this.minutes = 0;
            this.hours++;
        }

        if(this.hours >= 24)
        {
            this.hours = 0;
        }
    },

    removeSecond()
    {
        this.seconds--;

        if(this.seconds < 0)
        {
            this.seconds = 59;
            this.minutes--;
        }

        if(this.minutes < 0)
        {
            this.minutes = 59;
            this.hours--;
        }

        if(this.hours < 0)
        {
            this.hours = 23;
        }
    },

    writeTime()
    {
        document.write("<h2>Поточний час: " + this.showTime() + "</h2>");
    }
};

alert("Початковий час: " + time.showTime());

time.addSecond();

alert("Після додавання секунди: " + time.showTime());

time.removeSecond();

alert("Після віднімання секунди: " + time.showTime());

time.writeTime();


// ---------------- ЗАВДАННЯ 2 ----------------

let car = {
    producer: "BMW",
    model: "M5",
    year: 2022,
    speed: 120
};

function showCarInfo(car)
{
    alert(
`Виробник: ${car.producer}
Модель: ${car.model}
Рік випуску: ${car.year}
Середня швидкість: ${car.speed} км/год`
    );
}

function calculateTime(car, distance)
{
    let time = distance / car.speed;

    let rest = Math.floor(time / 4);

    return time + rest;
}

showCarInfo(car);

let distance = +prompt("Введіть відстань у км:");

alert(
    `Час для подолання відстані: ${calculateTime(car, distance)} год`
);