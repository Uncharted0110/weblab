const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: null },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: null },
    { title: "To Kill a Mockingbird", author: "Harper Lee", alreadyRead: null },
    { title: "1984", author: "George Orwell", alreadyRead: null }
];

function askReadStatus(index) {
    const book = books[index];
    const userInput = prompt(`Have you read "${book.title}" by ${book.author}? (yes/no)`);

    if (userInput.toLowerCase() === "yes") {
        book.alreadyRead = true;
    } else if (userInput.toLowerCase() === "no") {
        book.alreadyRead = false;
    } else {
        console.log("Invalid input. Please answer with 'yes' or 'no'.");
        return; 
    }
}

function showBooks() {
    console.clear();
    console.log("Your Reading List:");

    books.forEach((book, index) => {
        const status = book.alreadyRead === null
            ? "Status not set yet."
            : (book.alreadyRead
                ? `✔️ You already read "${book.title}" by ${book.author}`
                : `📖 You still need to read "${book.title}" by ${book.author}`);

        console.log(`${index + 1}. ${status}`);
    });
}

function updateReadingList() {
    books.forEach((_, index) => {
        askReadStatus(index);
    });

    showBooks();
}

updateReadingList();
