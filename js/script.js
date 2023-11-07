const progressBar = document.getElementById('progress');
const rangeInput = document.getElementById('rangeInput');
const progressLabel = document.getElementById('progressLabel');

//dark mode
let toggleTheme = document.querySelector("html");
let darkOn = false;

document.getElementById("theme").addEventListener("click", function(){
    darkOn = !darkOn
    if(darkOn){
        toggleTheme.setAttribute("data-bs-theme", "dark");
        document.getElementById("theme").setAttribute("src", "images/light_sun.svg");
        document.getElementById("logo").setAttribute("src", "images/light_chicken.png");
    } else{
        toggleTheme.setAttribute("data-bs-theme", '');
        document.getElementById("theme").setAttribute("src", "images/moon.svg");
        document.getElementById("logo").setAttribute("src", "images/dark-chicken.png");
    }
    
});

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

const toggleVent = document.getElementById('toggleButton');
let ventOn = false;

toggleVent.addEventListener('click', () => {
    ventOn = !ventOn; // Toggle the state

    if (ventOn) {
        toggleVent.textContent = 'On';
        toggleVent.classList.remove('btn-danger');
        toggleVent.classList.add('btn-success');
    } else {
        toggleVent.textContent = 'Off';
        toggleVent.classList.remove('btn-success');
        toggleVent.classList.add('btn-danger');
    }
});

