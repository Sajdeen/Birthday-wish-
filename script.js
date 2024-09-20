// Function to create balloons
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = `${Math.random() * 100}%`; // Random horizontal position
    balloon.style.animationDuration = `${Math.random() * 3 + 5}s`; // Random speed
    balloon.style.backgroundColor = getRandomColor(); // Random color
    document.getElementById('balloons-container').appendChild(balloon);

    // Remove balloon after animation to keep the DOM clean
    balloon.addEventListener('animationend', () => {
        balloon.remove();
    });
}

// Function to get random colors for balloons
/*function getRandomColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FFBD33'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Generate balloons at regular intervals
setInterval(createBalloon, 100);

// Function to handle fireworks animation and display
function displayFireworks() {
    const fireworks = document.getElementById('fireworks-container');
    fireworks.style.animation = 'fireworks 5s infinite';
}

// Display fireworks
displayFireworks();


