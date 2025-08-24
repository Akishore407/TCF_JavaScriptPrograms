// Get elements from the HTML
const counter = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

// Starting counter value
let count = 0;

// Function to update the counter display
function updateCounter() {
    counter.textContent = count;
    
    // Add animation effect
    counter.classList.add('counter-animate');
    setTimeout(() => {
        counter.classList.remove('counter-animate');
    }, 200);
    
    // Change color based on value
    if (count > 0) {
        counter.style.color = '#27ae60'; // Green for positive
    } else if (count < 0) {
        counter.style.color = '#e74c3c'; // Red for negative
    } else {
        counter.style.color = '#667eea'; // Blue for zero
    }
}

// Function to increase counter
function increaseCounter() {
    count++;
    updateCounter();
}

// Function to decrease counter
function decreaseCounter() {
    count--;
    updateCounter();
}

// Function to reset counter
function resetCounter() {
    count = 0;
    updateCounter();
}

// Add event listeners to buttons
increaseBtn.addEventListener('click', increaseCounter);
decreaseBtn.addEventListener('click', decreaseCounter);
resetBtn.addEventListener('click', resetCounter);

// Keyboard support (optional enhancement)
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        increaseCounter();
    } else if (event.key === 'ArrowDown') {
        decreaseCounter();
    } else if (event.key === 'r' || event.key === 'R') {
        resetCounter();
    }
});

// Initialize the counter display
updateCounter();