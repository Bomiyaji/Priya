document.addEventListener('DOMContentLoaded', () => {
    
    // --- Configuration ---
    const particleCount = 30; // Number of floating lights
    const particleContainer = document.getElementById('particles-js');
    
    // --- Elements ---
    const introSection = document.getElementById('intro');
    const mainSection = document.getElementById('message');
    const enterBtn = document.getElementById('enter-btn');
    const musicBtn = document.getElementById('music-toggle');
    const audio = document.getElementById('bg-music');
    
    let isPlaying = false;

    // --- 1. Generate Particles ---
    // Creates subtle floating lights (Gold/White)
    function createParticles() {
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Randomize size (very small)
            const size = Math.random() * 3 + 1; // 1px to 4px
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Randomize position
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            
            // Randomize animation duration (10s to 20s)
            const duration = Math.random() * 10 + 10;
            particle.style.animationDuration = `${duration}s`;
            
            // Randomize delay so they don't all start at once
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            particleContainer.appendChild(particle);
        }
    }

    createParticles();

    // --- 2. Enter Button Logic ---
    enterBtn.addEventListener('click', () => {
        // Fade out intro
        introSection.style.opacity = '0';
        introSection.style.visibility = 'hidden';
        
        // Allow time for intro to fade before showing main content
        setTimeout(() => {
            mainSection.classList.remove('hidden');
            // Force reflow to ensure transition happens
            void mainSection.offsetWidth; 
            mainSection.style.opacity = '1';
            mainSection.style.visibility = 'visible';
            
            // Optional: Auto-play music on entry (browsers may block this)
            // toggleMusic(); 
        }, 1000);
    });

    // --- 3. Music Toggle Logic ---
    function toggleMusic()
