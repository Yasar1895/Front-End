const images = [
  "https://wallpapercave.com/wp/wp2343300.jpg",
  "https://wallpapercave.com/wp/1rISBmg.jpg",
  "https://wallpapercave.com/wp/wp3536338.jpg",
  "https://mms.businesswire.com/media/20180115005134/en/635073/5/GoldbergFinal.jpg"
];

let index = 0;
const background = document.getElementById('background');

// Preload images
images.forEach(src => {
  const img = new Image();
  img.src = src;
});

function changeBackground() {
  background.style.opacity = 0;
  setTimeout(() => {
    background.style.backgroundImage = `url(${images[index]})`;
    background.style.opacity = 1;
    index = (index + 1) % images.length;
  }, 1000);
}

// Initial load
background.style.backgroundImage = `url(${images[index]})`;
index++;

// Change every 5 seconds
setInterval(changeBackground, 5000);
