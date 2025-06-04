const gallery = document.getElementById("gallery");

// Picsum works 100% without API keys and supports direct image URLs
const images = [
  "https://picsum.photos/id/1011/400/300",
  "https://picsum.photos/id/1020/400/300",
  "https://picsum.photos/id/1035/400/300",
  "https://picsum.photos/id/1041/400/300",
  "https://picsum.photos/id/1053/400/300",
  "https://picsum.photos/id/1069/400/300"
];

const colors = ["#FF5733", "#33FFCE", "#FFC300", "#DAF7A6", "#C70039", "#8E44AD"];

images.forEach((src, index) => {
  const card = document.createElement("div");
  card.className = "image-card";

  const img = document.createElement("img");
  img.src = src;
  img.alt = `Gallery Image ${index + 1}`;
  img.style.borderColor = colors[index % colors.length];

  card.appendChild(img);
  gallery.appendChild(card);
});
