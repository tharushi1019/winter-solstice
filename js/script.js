// Create snowflakes
function createSnowflakes() {
    const snowfall = document.querySelector('.snowfall');
    const numberOfSnowflakes = 50;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        // Random snowflake properties
        const size = Math.random() * 5 + 2 + 'px';
        const startPositionX = Math.random() * window.innerWidth + 'px';
        const animationDuration = Math.random() * 3 + 2 + 's';
        const opacity = Math.random() * 0.6 + 0.4;

        snowflake.style.width = size;
        snowflake.style.height = size;
        snowflake.style.left = startPositionX;
        snowflake.style.animationDuration = animationDuration;
        snowflake.style.opacity = opacity;

        snowfall.appendChild(snowflake);

        // Remove snowflake after animation
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
            createSingleSnowflake();
        });
    }
}

function createSingleSnowflake() {
    const snowfall = document.querySelector('.snowfall');
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    
    const size = Math.random() * 5 + 2 + 'px';
    const startPositionX = Math.random() * window.innerWidth + 'px';
    const animationDuration = Math.random() * 3 + 2 + 's';
    const opacity = Math.random() * 0.6 + 0.4;

    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.left = startPositionX;
    snowflake.style.animationDuration = animationDuration;
    snowflake.style.opacity = opacity;

    snowfall.appendChild(snowflake);

    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
        createSingleSnowflake();
    });
}

// Intersection Observer for fade-in sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialize snowfall
document.addEventListener('DOMContentLoaded', createSnowflakes);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const backToTopBtn = document.querySelector('#back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add falling stars effect
function createStar() {
    const header = document.getElementById('main-header');
    const star = document.createElement('span');
    star.className = 'star';
    star.textContent = '❄';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDuration = (Math.random() * 2 + 2) + 's';
    header.appendChild(star);

    // Remove star after animation
    star.addEventListener('animationend', () => {
        star.remove();
    });
}

// Create stars periodically
setInterval(createStar, 1000);