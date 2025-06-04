// Sample cryptocurrency data (simulate API data)
const cryptocurrencies = [
  { name: "Bitcoin", symbol: "BTC", price: 27150.43, change: +2.54 },
  { name: "Ethereum", symbol: "ETH", price: 1824.22, change: -1.27 },
  { name: "Binance Coin", symbol: "BNB", price: 314.75, change: +0.89 },
  { name: "Cardano", symbol: "ADA", price: 0.42, change: -0.65 },
  { name: "Solana", symbol: "SOL", price: 21.36, change: +3.14 },
  { name: "Ripple", symbol: "XRP", price: 0.48, change: +1.21 },
  { name: "Polkadot", symbol: "DOT", price: 6.12, change: -2.35 },
  { name: "Dogecoin", symbol: "DOGE", price: 0.065, change: +0.42 },
];

// Utility to format numbers as USD currency
function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

// Create crypto card HTML elements dynamically
function createCryptoCard(crypto) {
  const card = document.createElement("div");
  card.className = "crypto-card";

  // Animate floating effect with delay for each card
  card.style.animation = `floatUpDown 6s ease-in-out infinite`;
  card.style.animationDelay = `${Math.random() * 3}s`;

  const changeClass = crypto.change >= 0 ? "positive" : "negative";
  const changeSign = crypto.change >= 0 ? "+" : "";

  card.innerHTML = `
    <div class="crypto-name">${crypto.name}</div>
    <div class="crypto-symbol">${crypto.symbol}</div>
    <div class="crypto-price">${formatPrice(crypto.price)}</div>
    <div class="crypto-change ${changeClass}">${changeSign}${crypto.change.toFixed(2)}%</div>
  `;
  return card;
}

// Populate crypto cards
function loadCryptos() {
  const container = document.getElementById("crypto-list");
  cryptocurrencies.forEach((crypto) => {
    const card = createCryptoCard(crypto);
    container.appendChild(card);
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadCryptos();
});
