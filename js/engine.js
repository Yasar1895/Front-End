async function searchImages() {
  const query = document.getElementById('searchBox').value;
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (!query.trim()) return;

  // Example with Unsplash API - replace with your key or static images if needed
  const accessKey = 'YOUR_UNSPLASH_ACCESS_KEY';
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=12&client_id=${accessKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    data.results.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo.urls.small;
      img.alt = photo.alt_description || 'image';
      resultsContainer.appendChild(img);
    });
  } catch (error) {
    console.error('Error fetching images:', error);
    resultsContainer.innerHTML = '<p style="color:red;">Error fetching images.</p>';
  }
}
