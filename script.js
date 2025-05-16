// Load saved background color from localStorage
function loadPreferences() {
    const savedColor = localStorage.getItem('bgColor');
    if (savedColor) {
        document.body.style.background = savedColor;
    }
}

// Save background color to localStorage
function setBackgroundColor(color) {
    document.body.style.background = color;
    localStorage.setItem('bgColor', color);
    triggerAnimation();
}

// Trigger CSS animation on button
function triggerAnimation() {
    const btn = document.querySelector('.btn');
    btn.classList.add('animate-pulse');
    setTimeout(() => {
        btn.classList.remove('animate-pulse');
    }, 500); // Match animation duration
}

// Load preferences on page load
window.onload = loadPreferences;