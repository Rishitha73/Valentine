// ========================
// Global Variables
// ========================
let userName = '';
let isPlaying = false;
let startDate = new Date('2024-02-14');

// ========================
// DOM Content Loaded
// ========================
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// ========================
// Initialize Website
// ========================
function initializeWebsite() {
    // Name input functionality
    setupNameInput();
    
    // Theme toggle
    setupThemeToggle();
    
    // Smooth scrolling for navigation
    setupSmoothScrolling();
    
    // Typing animation
    startTypingAnimation();
    
    // Gallery lightbox
    setupGallery();
    
    // Love counter
    setupCounter();
    startCounter();
    
    // Surprise modal
    setupSurprise();
    
    // Music player
    setupMusicPlayer();
    
    // Floating hearts on click
    setupFloatingHearts();
    
    // Initialize confetti
    initializeConfetti();
}

// ========================
// Name Input Functionality
// ========================
function setupNameInput() {
    const nameInputContainer = document.getElementById('nameInputContainer');
    const nameInput = document.getElementById('nameInput');
    const submitBtn = document.getElementById('submitName');
    const heroSubtitle = document.getElementById('heroSubtitle');
    
    // Check if name is already stored
    const storedName = localStorage.getItem('valentineName');
    if (storedName) {
        userName = storedName;
        nameInputContainer.classList.add('hidden');
        updateNameDisplay();
    }
    
    submitBtn.addEventListener('click', function() {
        const name = nameInput.value.trim();
        if (name) {
            userName = name;
            localStorage.setItem('valentineName', name);
            nameInputContainer.classList.add('hidden');
            updateNameDisplay();
            triggerConfetti();
        }
    });
    
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
}

function updateNameDisplay() {
    const heroSubtitle = document.getElementById('heroSubtitle');
    if (userName) {
        heroSubtitle.textContent = `To ${userName} ❤️`;
    }
}

// ========================
// Theme Toggle
// ========================
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    // Check stored theme
    const storedTheme = localStorage.getItem('valentineTheme');
    if (storedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.textContent = '☀️';
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            themeIcon.textContent = '☀️';
            localStorage.setItem('valentineTheme', 'dark');
        } else {
            themeIcon.textContent = '🌙';
            localStorage.setItem('valentineTheme', 'light');
        }
    });
}

// ========================
// Smooth Scrolling
// ========================
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================
// Typing Animation
// ========================
function startTypingAnimation() {
    const typingText = document.getElementById('typingText');
    const message = `My Dearest ${userName || 'Love'},\n\nFrom the moment I met you, my life changed in the most beautiful way. Your smile brightens my darkest days, and your laughter is the sweetest melody to my ears.\n\nEvery moment with you feels like a dream come true. You are my best friend, my partner, and my soulmate. I cherish every memory we've created together and look forward to all the adventures that await us.\n\nThank you for being you, for loving me unconditionally, and for making every day special. You are the love of my life, and I am so grateful to have you by my side.\n\nForever and always yours,\nWith all my love ❤️`;
    
    let index = 0;
    let currentText = '';
    
    function type() {
        if (index < message.length) {
            currentText += message.charAt(index);
            typingText.textContent = currentText;
            index++;
            setTimeout(type, 50);
        } else {
            // Remove the blinking cursor after typing is complete
            setTimeout(() => {
                typingText.style.setProperty('--after-display', 'none');
            }, 1000);
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 1000);
}

// ========================
// Gallery Lightbox
// ========================
function setupGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.getAttribute('data-title');
            
            lightboxImg.src = img.src;
            lightboxCaption.textContent = title;
            lightbox.classList.add('active');
            
            // Trigger confetti when opening lightbox
            triggerConfetti();
        });
    });
    
    lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}

// ========================
// Love Counter
// ========================
function setupCounter() {
    const dateInput = document.getElementById('startDate');
    
    // Load saved date from localStorage
    const savedDate = localStorage.getItem('valentineStartDate');
    if (savedDate) {
        startDate = new Date(savedDate);
        dateInput.value = savedDate;
    }
    
    dateInput.addEventListener('change', function() {
        startDate = new Date(this.value);
        localStorage.setItem('valentineStartDate', this.value);
        updateCounter();
    });
}

function startCounter() {
    updateCounter();
    setInterval(updateCounter, 1000);
}

function updateCounter() {
    const now = new Date();
    const difference = now - startDate;
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// ========================
// Surprise Modal
// ========================
function setupSurprise() {
    const surpriseBtn = document.getElementById('surpriseBtn');
    const modal = document.getElementById('surpriseModal');
    const modalClose = modal.querySelector('.modal-close');
    
    surpriseBtn.addEventListener('click', function() {
        modal.classList.add('active');
        triggerConfetti();
        triggerHeartRain();
    });
    
    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// ========================
// Music Player
// ========================
function setupMusicPlayer() {
    const musicBtn = document.getElementById('musicBtn');
    const bgMusic = document.getElementById('bgMusic');
    const musicIcon = musicBtn.querySelector('.music-icon');
    
    musicBtn.addEventListener('click', function() {
        if (isPlaying) {
            bgMusic.pause();
            musicIcon.textContent = '🎵';
            musicBtn.classList.remove('playing');
        } else {
            bgMusic.play().catch(e => {
                console.log('Music playback failed:', e);
            });
            musicIcon.textContent = '🎶';
            musicBtn.classList.add('playing');
        }
        isPlaying = !isPlaying;
    });
}

// ========================
// Floating Hearts on Click
// ========================
function setupFloatingHearts() {
    document.addEventListener('click', function(e) {
        // Don't create hearts on button clicks or nav clicks
        if (e.target.tagName === 'BUTTON' || 
            e.target.tagName === 'A' || 
            e.target.closest('button') || 
            e.target.closest('a')) {
            return;
        }
        
        createFloatingHeart(e.pageX, e.pageY);
    });
}

function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart-click';
    heart.innerHTML = '❤️';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// ========================
// Confetti Animation
// ========================
let confettiCanvas;
let confettiCtx;
let confettiParticles = [];

function initializeConfetti() {
    confettiCanvas = document.getElementById('confettiCanvas');
    confettiCtx = confettiCanvas.getContext('2d');
    
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    
    window.addEventListener('resize', function() {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    });
}

function triggerConfetti() {
    const colors = ['#ff6b9d', '#c44569', '#ffc3a0', '#ff8fab', '#ffa5d8'];
    
    for (let i = 0; i < 100; i++) {
        confettiParticles.push({
            x: Math.random() * confettiCanvas.width,
            y: -10,
            vx: Math.random() * 4 - 2,
            vy: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 4,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5
        });
    }
    
    animateConfetti();
}

function animateConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    
    confettiParticles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.1; // gravity
        particle.rotation += particle.rotationSpeed;
        
        confettiCtx.save();
        confettiCtx.translate(particle.x, particle.y);
        confettiCtx.rotate((particle.rotation * Math.PI) / 180);
        confettiCtx.fillStyle = particle.color;
        confettiCtx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        confettiCtx.restore();
        
        // Remove particles that are off screen
        if (particle.y > confettiCanvas.height) {
            confettiParticles.splice(index, 1);
        }
    });
    
    if (confettiParticles.length > 0) {
        requestAnimationFrame(animateConfetti);
    }
}

// ========================
// Heart Rain Effect
// ========================
function triggerHeartRain() {
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart-click';
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = '-50px';
            heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
            
            document.body.appendChild(heart);
            
            // Animate the heart falling
            let position = -50;
            const fallSpeed = Math.random() * 3 + 2;
            const swing = Math.random() * 100 - 50;
            
            const fallInterval = setInterval(() => {
                position += fallSpeed;
                heart.style.top = position + 'px';
                heart.style.left = (parseInt(heart.style.left) + Math.sin(position / 20) * 2) + 'px';
                
                if (position > window.innerHeight) {
                    clearInterval(fallInterval);
                    heart.remove();
                }
            }, 20);
            
            setTimeout(() => {
                clearInterval(fallInterval);
                heart.remove();
            }, 5000);
        }, i * 100);
    }
}

// ========================
// Scroll Effects
// ========================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// ========================
// Additional Animation Effects
// ========================

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    const scrolled = window.pageYOffset;
    
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('.message-section, .gallery-section, .counter-section, .surprise-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease';
    observer.observe(section);
});

// ========================
// Easter Egg: Konami Code
// ========================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        triggerSecretMessage();
    }
});

function triggerSecretMessage() {
    alert('🎉 You found the secret! You are truly special! 💖');
    triggerConfetti();
    triggerHeartRain();
}

// ========================
// Console Message
// ========================
console.log('%c❤️ Happy Valentine\'s Day! ❤️', 'font-size: 30px; color: #ff6b9d; font-weight: bold;');
console.log('%cMade with love and JavaScript 💕', 'font-size: 16px; color: #c44569;');
