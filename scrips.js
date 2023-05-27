const selectSizeButton = document.getElementById("selectSize");

selectSizeButton.addEventListener('click', function() {
    let size = prompt('Please type a value between 1 and 100');
  
    if (size && !isNaN(size) && size > 0 && size <= 100) {
      createEtchASketch(parseInt(size));
    } else {
      alert('Invalid input! Please enter a number between 1 and 100.');
    }
  });

