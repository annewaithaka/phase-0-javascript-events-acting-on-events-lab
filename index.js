// Your code here
function moveDodgerLeft() {
    let dodger = document.getElementById('dodger');
    let leftPosition = parseInt(dodger.style.left) || 0; 
    let newPosition = leftPosition - 1; 
    if (newPosition >= 0) {
      dodger.style.left = `${newPosition}px`;
    } else{
        
    }
  }

  function moveDodgerRight() {
    let dodger = document.getElementById('dodger');
    let leftPosition = parseInt(dodger.style.left) || 0;
    let newPosition = leftPosition + 1; 
    if (newPosition <= 360) {
      dodger.style.left = `${newPosition}px`; 
    }
}