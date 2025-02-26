let count = 0;

const btnDecrement = document.getElementById("dec");

const increment = () => {
    count++;
    document.getElementById('count').innerHTML = count;
    if (count > 0) {
        btnDecrement.disabled = false;
    }
}

const decrement = () => {
    count--;
    document.getElementById('count').innerHTML = count;
    if (count == 0) {
        btnDecrement.disabled = true;
    }
}

// Quotes functionality
const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "You miss 100% of the shots you don't take. – Wayne Gretzky",
    "It always seems impossible until it's done. – Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt"
];

const showRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = quotes[randomIndex];
    document.getElementById('quote-text').innerHTML = `"${quoteText}"`;
}
showRandomQuote();
