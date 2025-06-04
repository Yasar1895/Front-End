const passwordInput = document.getElementById('password');
const strengthBarFill = document.getElementById('strength-bar-fill');
const strengthText = document.getElementById('strength-text');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const strength = calculateStrength(password);

  strengthBarFill.style.width = strength.percent + '%';
  strengthBarFill.style.background = strength.gradient;
  strengthText.textContent = strength.text;
  strengthText.style.color = strength.color;
});

function calculateStrength(password) {
  let score = 0;

  if (!password) {
    return { percent: 0, text: '', color: '#fff', gradient: 'linear-gradient(90deg, #ff0000, #ffae00, #00ff00)' };
  }

  // Length points
  if (password.length >= 8) score += 25;
  if (password.length >= 12) score += 15;

  // Letters
  if (/[a-z]/.test(password)) score += 15;
  if (/[A-Z]/.test(password)) score += 15;

  // Numbers
  if (/\d/.test(password)) score += 15;

  // Special chars
  if (/[\W_]/.test(password)) score += 15;

  if (score > 100) score = 100;

  // Colors & text based on score
  if (score >= 80) {
    return {
      percent: score,
      text: 'Strong',
      color: '#00ff00',
      gradient: 'linear-gradient(90deg, #00ff00, #40ff00, #00ff7f)'
    };
  } else if (score >= 50) {
    return {
      percent: score,
      text: 'Medium',
      color: '#ffae00',
      gradient: 'linear-gradient(90deg, #ffae00, #ffaa00, #ffd700)'
    };
  } else if (score > 0) {
    return {
      percent: score,
      text: 'Weak',
      color: '#ff0000',
      gradient: 'linear-gradient(90deg, #ff0000, #ff4040, #ff8080)'
    };
  } else {
    return {
      percent: 0,
      text: '',
      color: '#fff',
      gradient: 'linear-gradient(90deg, #ff0000, #ffae00, #00ff00)'
    };
  }
}
