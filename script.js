// Elena Voice - JavaScript

// Audio samples data
const audioSamples = [
    {
        title: "Luxury Brand Campaign",
        category: "Commercial",
        duration: "0:32",
        description: "Warm, sophisticated tone for a high-end jewelry brand television spot.",
    },
    {
        title: "Documentary: Ocean Depths",
        category: "Narration",
        duration: "1:45",
        description: "Calm, educational narration for a nature documentary series.",
    },
    {
        title: "Mobile Game Character",
        category: "Character",
        duration: "0:58",
        description: "Playful, energetic voice for an animated mobile game protagonist.",
    },
    {
        title: "Corporate Training Module",
        category: "E-Learning",
        duration: "2:15",
        description: "Clear, engaging instructional voice for employee onboarding.",
    },
    {
        title: "Audiobook: Romance Novel",
        category: "Audiobook",
        duration: "1:30",
        description: "Expressive, emotional reading from a bestselling romance title.",
    },
    {
        title: "Tech Product Launch",
        category: "Commercial",
        duration: "0:45",
        description: "Modern, confident delivery for a startup's product announcement.",
    }
];

// Navigation scroll effect
// window.addEventListener('scroll', () => {
//     const nav = document.getElementById('navigation');
//     if (window.scrollY > 50) {
//         nav.classList.add('scrolled');
//     } else {
//         nav.classList.remove('scrolled');
//     }
// });

// Smooth scroll to section
// function scrollToSection(id) {
//     const element = document.getElementById(id);
//     if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//     }
// }

// Create audio card
function createAudioCard(sample, index) {
    const card = document.createElement('div');
    card.className = 'audio-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const cardId = `audio-card-${index}`;
    card.id = cardId;
    
    card.innerHTML = `
        <div class="audio-card-content">
            <button class="play-button" data-index="${index}" aria-label="Play">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
            </button>
            
            <div class="audio-info">
                <div class="audio-category">${sample.category}</div>
                <h3 class="audio-title">${sample.title}</h3>
                <p class="audio-description">${sample.description}</p>
                
                <div class="waveform" id="waveform-${index}">
                    ${generateWaveform(40, index)}
                </div>
                
                <div class="audio-footer">
                    <span class="audio-duration">${sample.duration}</span>
                    <span class="audio-hint">Click to play</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Generate waveform bars
function generateWaveform(count, cardIndex) {
    let html = '';
    for (let i = 0; i < count; i++) {
        const height = 20 + Math.random() * 60;
        const delay = i * 0.02;
        html += `<div class="waveform-bar" data-bar-index="${i}" style="height: ${height}%; animation-delay: ${delay}s;"></div>`;
    }
    return html;
}

// Audio player state
let currentlyPlaying = null;
let playbackIntervals = {};

// Play/Pause audio
function toggleAudio(index) {
    const button = document.querySelector(`[data-index="${index}"]`);
    const waveform = document.getElementById(`waveform-${index}`);
    const bars = waveform.querySelectorAll('.waveform-bar');
    const hint = button.closest('.audio-card').querySelector('.audio-hint');
    
    // Stop currently playing audio if different
    if (currentlyPlaying !== null && currentlyPlaying !== index) {
        stopAudio(currentlyPlaying);
    }
    
    // Toggle current audio
    if (currentlyPlaying === index) {
        stopAudio(index);
    } else {
        startAudio(index, button, bars, hint);
    }
}

function startAudio(index, button, bars, hint) {
    currentlyPlaying = index;
    button.classList.add('playing');
    hint.textContent = 'Click to pause';
    
    // Change icon to pause
    button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16"/>
            <rect x="14" y="4" width="4" height="16"/>
        </svg>
    `;
    
    // Add playing animation to bars
    bars.forEach(bar => bar.classList.add('playing'));
    
    // Simulate progress
    let progress = 0;
    playbackIntervals[index] = setInterval(() => {
        progress += 0.5;
        
        // Update active bars
        bars.forEach((bar, i) => {
            const barProgress = (i / bars.length) * 100;
            if (barProgress <= progress) {
                bar.classList.add('active');
            }
        });
        
        // Stop when complete
        if (progress >= 100) {
            stopAudio(index);
        }
    }, 100);
}

function stopAudio(index) {
    const button = document.querySelector(`[data-index="${index}"]`);
    const waveform = document.getElementById(`waveform-${index}`);
    const bars = waveform.querySelectorAll('.waveform-bar');
    const hint = button.closest('.audio-card').querySelector('.audio-hint');
    
    currentlyPlaying = null;
    button.classList.remove('playing');
    hint.textContent = 'Click to play';
    
    // Change icon back to play
    button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"/>
        </svg>
    `;
    
    // Remove playing animation and reset progress
    bars.forEach(bar => {
        bar.classList.remove('playing', 'active');
    });
    
    // Clear interval
    if (playbackIntervals[index]) {
        clearInterval(playbackIntervals[index]);
        delete playbackIntervals[index];
    }
}

// Initialize audio grid
function initAudioGrid() {
    const audioGrid = document.getElementById('audioGrid');
    audioSamples.forEach((sample, index) => {
        const card = createAudioCard(sample, index);
        audioGrid.appendChild(card);
    });
    
    // Add event listeners to play buttons
    document.querySelectorAll('.play-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt(button.dataset.index);
            toggleAudio(index);
        });
    });
}

// Form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        project: formData.get('project'),
        message: formData.get('message'),
    };
    
    console.log('Form submitted:', data);
    
    // Show success message (you can customize this)
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    e.target.reset();
}

// Set current year in footer
function setCurrentYear() {
    const yearSpan = document.getElementById('currentYear');
    yearSpan.textContent = new Date().getFullYear();
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initAudioGrid();
    setCurrentYear();
    
    // Add form submit handler
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleFormSubmit);
});
