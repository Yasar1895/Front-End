document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  let isValid = true;

  // Clear errors
  document.getElementById('usernameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';

  // Username validation
  if (username.length < 3) {
    document.getElementById('usernameError').textContent = 'Username must be at least 3 characters';
    isValid = false;
  }

  // Email validation (basic)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email';
    isValid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    // Optionally: this.submit(); // to actually send the form
  }
});
