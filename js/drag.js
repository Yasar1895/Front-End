const draggables = document.querySelectorAll('.draggable');
const dropzone = document.getElementById('dropzone');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', draggable.id);
  });
});

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropzone.style.borderColor = '#ffd700';
});

dropzone.addEventListener('dragleave', () => {
  dropzone.style.borderColor = '#fff';
});

dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData('text/plain');
  const draggedEl = document.getElementById(id);
  dropzone.appendChild(draggedEl);
  dropzone.style.borderColor = '#fff';
});
