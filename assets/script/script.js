 // Change navbar background color on scroll
 window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Dynamic text swap with animation
const texts = ["English", "Sales", "Services"];
let index = 0;
const dynamicText = document.getElementById('dynamic-text');

setInterval(() => {
    // Remove the animation class
    dynamicText.style.animation = 'none';

    // Trigger reflow to restart animation
    dynamicText.offsetHeight; 

    // Change text
    dynamicText.textContent = texts[index];
    index = (index + 1) % texts.length;

    // Reapply the animation class
    dynamicText.style.animation = 'slide-up-down 1.5s ease-in-out both';
}, 2000);

// Sound control functionality
const soundControl = document.getElementById('sound-control');
const video = document.getElementById('landing-video');
const soundIcon = soundControl.querySelector('i');

soundControl.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
});