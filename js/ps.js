const passwordInput = document.getElementById('password');
const toggleBtn = document.getElementById('toggleBtn');
const eyeIcon = toggleBtn.querySelector('.eye');

toggleBtn.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.classList.add('closed');
    toggleBtn.classList.add('animate');
    toggleBtn.setAttribute('aria-label', 'Hide password');
  } else {
    passwordInput.type = 'password';
    eyeIcon.classList.remove('closed');
    toggleBtn.classList.remove('animate');
    toggleBtn.setAttribute('aria-label', 'Show password');
  }
});
