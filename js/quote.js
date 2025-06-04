const quotes = [
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
];

const colors = [
  "#ff6b6b", "#feca57", "#1dd1a1", "#5f27cd", "#48dbfb", "#ff9f43", "#00d2d3", "#ff6b81"
];

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const body = document.body;

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function setQuote() {
  quoteText.classList.add("fade-out");
  quoteAuthor.classList.add("fade-out");

  setTimeout(() => {
    const randomQuote = quotes[getRandomIndex(quotes)];
    const randomColor = colors[getRandomIndex(colors)];

    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
    body.style.background = randomColor;

    quoteText.classList.remove("fade-out");
    quoteText.classList.add("fade-in");

    quoteAuthor.classList.remove("fade-out");
    quoteAuthor.classList.add("fade-in");
  }, 400);
}

setQuote();

newQuoteBtn.addEventListener("click", () => {
  quoteText.classList.remove("fade-in");
  quoteAuthor.classList.remove("fade-in");
  setQuote();
});
