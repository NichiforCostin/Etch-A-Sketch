const container = document.getElementById('container');
const selectSizeButton = document.getElementById('selectSize');
const clearButton = document.getElementById("clearButton");
const eraserButton = document.getElementById("eraserButton");
let isDrawing = false;


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
  
      cell.addEventListener('mousedown', function() {
        isDrawing = true;
        if (eraserButton.classList.contains('active')) {
          cell.style.backgroundColor = 'white';
        } else {
          cell.style.backgroundColor = 'black';
        }
      });
  
      cell.addEventListener('mouseup', function() {
        isDrawing = false;
      });
  
      cell.addEventListener('mouseover', function() {
        if (isDrawing) {
          if (eraserButton.classList.contains('active')) {
            cell.style.backgroundColor = 'white';
          } else {
            cell.style.backgroundColor = 'black';
          }
        }
      });
    }
  }
  
  clearButton.addEventListener('click', function() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(function(cell) {
      cell.style.backgroundColor = 'white';
    });
  
    isDrawing = false;
    eraserButton.classList.remove('active');
  });
  
  eraserButton.addEventListener('click', function() {
    eraserButton.classList.toggle('active');
  });

container.addEventListener('mousedown', function() {
    isDrawing = true;
  });
  
  container.addEventListener('mouseup', function() {
    isDrawing = false;
  });

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