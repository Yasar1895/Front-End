const miniDate = document.getElementById('mini-date');
const bigCalendar = document.getElementById('big-calendar');
const monthYear = document.getElementById('month-year');
const calendarGrid = document.getElementById('calendar-grid');

let currentDate = new Date();

function toggleBigCalendar() {
  bigCalendar.classList.toggle('hidden');
  renderCalendar();
}

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();

  // Set header text
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  monthYear.textContent = `${monthNames[month]} ${year}`;

  // Clear existing days
  calendarGrid.innerHTML = '';

  // Add day names
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dayNames.forEach(day => {
    const dayEl = document.createElement('div');
    dayEl.textContent = day;
    dayEl.style.background = '#f5576c';
    dayEl.style.color = 'white';
    calendarGrid.appendChild(dayEl);
  });

  // Find first day and number of days
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  // Fill blank spaces
  for (let i = 0; i < firstDay; i++) {
    calendarGrid.appendChild(document.createElement('div'));
  }

  // Fill actual dates
  for (let i = 1; i <= totalDays; i++) {
    const dayEl = document.createElement('div');
    dayEl.textContent = i;

    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayEl.classList.add('today');
    }

    calendarGrid.appendChild(dayEl);
  }

  miniDate.textContent = `${monthNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
}

function changeMonth(delta) {
  currentDate.setMonth(currentDate.getMonth() + delta);
  renderCalendar();
}

// Initialize mini calendar
renderCalendar();
