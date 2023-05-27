const container = document.getElementById('container');
const selectSizeButton = document.getElementById('selectSize');
let isDrawing = false;


function createEtchASketch(size) {
  container.innerHTML = '';

  container.style.setProperty('--size', size);


  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
    cell.addEventListener('click', function() {
        cell.style.backgroundColor = 'black';
      });
      cell.addEventListener('mousedown', function() {
        isDrawing = true;
        cell.style.backgroundColor = 'black';
      });
      cell.addEventListener('mouseover', function() {
        if (isDrawing) {
          cell.style.backgroundColor = 'black';
        }
      });
  }

}

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
