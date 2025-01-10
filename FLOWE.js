let currentNumber = 1;
const numberElement = document.getElementById('no');
const actionButton = document.getElementById('action-button');
numberElement.addEventListener('click', () => {
    if (currentNumber < 19) {
        numberElement.style.opacity = 0;

    
        setTimeout(() => {
            currentNumber++;
            numberElement.textContent = currentNumber;
            
            numberElement.style.opacity = 1;
        }, 500); 
    } else {
    
        actionButton.style.display = 'block';
    }
});


actionButton.addEventListener('click', () => {
    window.location.href = 'flloo.html'; 
});
