const select = document.getElementById('colorful-select');
const container = document.querySelector('.menu-container');

select.addEventListener('change', () => {
  const selectedOption = select.options[select.selectedIndex];
  const color = selectedOption.getAttribute('data-color') || '#6a82fb';

  // Update container border color to highlight selected color
  container.style.border = `6px solid ${color}`;

  // Animate the border with a quick shake effect
  container.classList.remove('shake');
  void container.offsetWidth; // trigger reflow to restart animation
  container.classList.add('shake');

  // Reset select background to white (clean and consistent)
  select.style.background = 'white';
});
