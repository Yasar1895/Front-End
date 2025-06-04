const noteForm = document.getElementById('noteForm');
const noteInput = document.getElementById('noteInput');
const notesList = document.getElementById('notesList');

// Load notes from localStorage or start with an empty array
let notes = JSON.parse(localStorage.getItem('notes')) || [];

// Function to display notes on the page
function displayNotes() {
  notesList.innerHTML = ''; // Clear current list

  notes.forEach((note, index) => {
    const li = document.createElement('li');
    li.className = 'note';

    const noteText = document.createElement('span');
    noteText.className = 'noteText';
    noteText.textContent = note;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
      deleteNote(index);
    };

    li.appendChild(noteText);
    li.appendChild(deleteBtn);
    notesList.appendChild(li);
  });
}

// Function to add a new note
function addNote(note) {
  notes.push(note);
  localStorage.setItem('notes', JSON.stringify(notes));
  displayNotes();
}

// Function to delete a note by index
function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  displayNotes();
}

// Handle form submit
noteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newNote = noteInput.value.trim();
  if (newNote) {
    addNote(newNote);
    noteInput.value = '';
    noteInput.focus();
  }
});

// Initial display
displayNotes();
