const container = document.getElementById('container');
const selectSizeButton = document.getElementById('selectSize');

function createEtchASketch(size) {
  // Clear the container
  container.innerHTML = '';

  // Set CSS custom property for size
  container.style.setProperty('--size', size);

  // Create the cells
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
  }
}

selectSizeButton.addEventListener('click', function() {
  let size = prompt('Please type a value between 1 and 100');

  if (size !== null) {
    size = parseInt(size);
    if (!isNaN(size) && size > 0 && size <= 100) {
      createEtchASketch(size);
    } else {
      alert('Invalid input! Please enter a number between 1 and 100.');
    }
  }
});
