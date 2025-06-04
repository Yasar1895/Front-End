const form = document.getElementById('subscribe-form');
const emailInput = document.getElementById('email');
const messageDiv = document.getElementById('message');

// Put your Google Apps Script Web App URL here
const SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE';

form.addEventListener('submit', e => {
  e.preventDefault();
  messageDiv.textContent = '';
  messageDiv.className = 'message';
  const email = emailInput.value.trim();

  if (!email) {
    messageDiv.textContent = 'Please enter a valid email.';
    messageDiv.classList.add('error');
    return;
  }

  form.querySelector('button').disabled = true;

  fetch(SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `email=${encodeURIComponent(email)}`
  })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        messageDiv.textContent = 'Thank you for subscribing!';
        messageDiv.classList.add('success');
        form.reset();
      } else {
        messageDiv.textContent = 'Error: ' + data.message;
        messageDiv.classList.add('error');
      }
    })
    .catch(() => {
      messageDiv.textContent = 'Error submitting form.';
      messageDiv.classList.add('error');
    })
    .finally(() => {
      form.querySelector('button').disabled = false;
    });
});
