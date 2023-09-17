const progressBar = document.getElementById('progress');
const rangeInput = document.getElementById('rangeInput');
const progressLabel = document.getElementById('progressLabel');

rangeInput.addEventListener('input', () => {
    const progressValue = rangeInput.value;
    progressBar.style.width = `${progressValue}%`;

    // Change color based on percentage thresholds
    if (progressValue < 35) {
        progressBar.style.backgroundColor = 'green'; 
    } else if (progressValue < 65) {
        progressBar.style.backgroundColor = '#ffc107'; 
    } else {
        progressBar.style.backgroundColor = '#dc3545'; 
    }

    progressLabel.textContent = `${progressValue}%`;
});

const toggleButton = document.getElementById('toggleButton');
let isOn = false;

toggleButton.addEventListener('click', () => {
    isOn = !isOn; // Toggle the state

    if (isOn) {
        toggleButton.textContent = 'On';
        toggleButton.classList.remove('btn-danger');
        toggleButton.classList.add('btn-success');
    } else {
        toggleButton.textContent = 'Off';
        toggleButton.classList.remove('btn-success');
        toggleButton.classList.add('btn-danger');
    }
});