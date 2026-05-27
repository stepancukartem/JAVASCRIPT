class PrintMachine {
    constructor(fontSize, color, fontFamily) {
        this.fontSize = fontSize;
        this.color = color;
        this.fontFamily = fontFamily;
    }

    print(text) {
        document.write(`
            <p style="
                font-size:${this.fontSize}px;
                color:${this.color};
                font-family:${this.fontFamily};
            ">
                ${text}
            </p>
        `);
    }
}

const printer = new PrintMachine(24, "blue", "Arial");
printer.print("Привіт! Це робота класу PrintMachine.");

class News {
    constructor(title, text, tags, date) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.date = date;
    }

    getDate() {
        const now = new Date();
        const diff = Math.floor((now - this.date) / (1000 * 60 * 60 * 24));

        if (diff < 1) {
            return "сьогодні";
        }
        else if (diff < 7) {
            return `${diff} днів тому`;
        }
        else {
            return this.date.toLocaleDateString();
        }
    }

    print() {
        document.write(`
            <div style="
                border:1px solid gray;
                padding:15px;
                margin:15px;
                border-radius:10px;
                font-family:Arial;
            ">
                <h2>${this.title}</h2>
                <p>${this.text}</p>
                <p><b>Теги:</b> ${this.tags.join(", ")}</p>
                <p><b>Дата:</b> ${this.getDate()}</p>
            </div>
        `);
    }
}

const news1 = new News(
    "Новий телефон",
    "Компанія випустила новий смартфон.",
    ["техніка", "смартфон"],
    new Date()
);

const news2 = new News(
    "Футбольний матч",
    "Команда перемогла у фіналі.",
    ["спорт", "футбол"],
    new Date(2025, 4, 10)
);

news1.print();
news2.print();

class NewsFeed {
    constructor() {
        this.newsArray = [];
    }

    get count() {
        return this.newsArray.length;
    }

    showAll() {
        this.newsArray.forEach(news => news.print());
    }

    addNews(news) {
        this.newsArray.push(news);
    }

    deleteNews(title) {
        this.newsArray = this.newsArray.filter(
            news => news.title !== title
        );
    }

    sortByDate() {
        this.newsArray.sort(
            (a, b) => b.date - a.date
        );
    }

    searchByTag(tag) {
        return this.newsArray.filter(
            news => news.tags.includes(tag)
        );
    }
}

const feed = new NewsFeed();

feed.addNews(news1);
feed.addNews(news2);

document.write(`<h1>Всі новини</h1>`);
feed.showAll();

document.write(`<h2>Кількість новин: ${feed.count}</h2>`);

feed.sortByDate();

document.write(`<h1>Пошук по тегу "спорт"</h1>`);

const sportNews = feed.searchByTag("спорт");

sportNews.forEach(news => news.print());

feed.deleteNews("Новий телефон");

document.write(`<h1>Після видалення новини</h1>`);

feed.showAll();