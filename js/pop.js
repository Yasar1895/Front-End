const showPopupBtn = document.getElementById('showPopup');
const popupOverlay = document.getElementById('popupOverlay');
const closePopupBtn = document.getElementById('closePopup');

showPopupBtn.addEventListener('click', () => {
  popupOverlay.classList.add('show');
});

closePopupBtn.addEventListener('click', () => {
  popupOverlay.classList.remove('show');
});

popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove('show');
  }
});
