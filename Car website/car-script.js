// ===========================
// Car Website JavaScript
// ===========================

// 360 Car Viewer Functionality
let currentRotation = 0;

const carImage = document.getElementById('carImage');
const rotateLeftBtn = document.getElementById('rotateLeft');
const rotateRightBtn = document.getElementById('rotateRight');
const angleSlider = document.getElementById('angleSlider');
const rotationAngleDisplay = document.getElementById('rotationAngle');

// Array of car images for 360 view (using placeholder rotation effect)
// In a real scenario, you'd have 36 images (one for each 10 degrees)
const carImages = [
    'https://via.placeholder.com/600x400/1a1a1a/00d4ff?text=360+Car+View+0°',
    'https://via.placeholder.com/600x400/1a1a1a/00d4ff?text=360+Car+View+10°',
    'https://via.placeholder.com/600x400/1a1a1a/00d4ff?text=360+Car+View+20°',
    'https://via.placeholder.com/600x400/1a1a1a/00d4ff?text=360+Car+View+30°',
    'https://via.placeholder.com/600x400/1a1a1a/00d4ff?text=360+Car+View+40°',
];

// Update car rotation based on angle
function updateCarRotation(angle) {
    currentRotation = angle % 360;
    
    // Apply CSS rotation transform
    carImage.style.transform = `rotateY(${currentRotation}deg)`;
    carImage.style.transition = 'transform 0.3s ease-out';
    
    // Update display
    rotationAngleDisplay.textContent = `${currentRotation}°`;
    angleSlider.value = currentRotation;
    
    // Optional: Change image based on rotation (simplified version)
    const imageIndex = Math.floor((currentRotation / 360) * carImages.length) % carImages.length;
    // carImage.src = carImages[imageIndex]; // Uncomment if using multiple images
}

// Event Listeners for Rotation Controls
rotateLeftBtn.addEventListener('click', () => {
    updateCarRotation(currentRotation - 15);
});

rotateRightBtn.addEventListener('click', () => {
    updateCarRotation(currentRotation + 15);
});

// Slider Input
angleSlider.addEventListener('input', (e) => {
    updateCarRotation(parseInt(e.target.value));
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        updateCarRotation(currentRotation - 15);
    } else if (e.key === 'ArrowRight') {
        updateCarRotation(currentRotation + 15);
    }
});

// Mouse Drag to Rotate
let isDragging = false;
let dragStartX = 0;

carImage.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    carImage.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - dragStartX;
        // Every 2 pixels of drag = 1 degree rotation
        const rotationDelta = deltaX / 2;
        updateCarRotation(currentRotation + rotationDelta);
        dragStartX = e.clientX;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    carImage.style.cursor = 'grab';
});

// Touch Support for Mobile
let touchStartX = 0;

carImage.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    carImage.style.cursor = 'grabbing';
});

carImage.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        const deltaX = e.touches[0].clientX - touchStartX;
        const rotationDelta = deltaX / 2;
        updateCarRotation(currentRotation + rotationDelta);
        touchStartX = e.touches[0].clientX;
    }
});

carImage.addEventListener('touchend', () => {
    carImage.style.cursor = 'grab';
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add cursor grab style to car image
carImage.style.cursor = 'grab';

// Initialize
updateCarRotation(0);

// ===========================
// Intersection Observer for Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'slideIn 0.6s ease-out';
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ===========================
// Color Card Hover Effects
// ===========================

const colorCards = document.querySelectorAll('.color-card');
colorCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotateY(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotateY(0deg)';
    });
});

// ===========================
// Engine Card Hover Effects
// ===========================

const engineCards = document.querySelectorAll('.engine-card');
engineCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===========================
// Table Row Hover Effects
// ===========================

const tableRows = document.querySelectorAll('.specs-table tbody tr');
tableRows.forEach((row, index) => {
    row.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
    });
});

// ===========================
// Auto-scroll highlight for navigation
// ===========================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'white';
        link.style.backgroundColor = 'transparent';
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.style.color = '#00d4ff';
            link.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
        }
    });
});

console.log('Car Website Loaded Successfully! 🚗');
console.log('Controls:');
console.log('- Use arrow buttons to rotate car');
console.log('- Drag on car image to rotate');
console.log('- Use slider for precise control');
console.log('- Use keyboard arrow keys for rotation');
