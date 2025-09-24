// app.js
// Telegram Mini App Integration
const tg = window.Telegram.WebApp;

// Initialize Telegram Mini App
tg.expand();
tg.enableClosingConfirmation();
tg.setHeaderColor('#0a0e17');
tg.setBackgroundColor('#0a0e17');

// Neural Interface Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('neural-loader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('neural-loader').style.display = 'none';
            initializeHolographicUI();
        }, 1000);
    }, 3000);
});

// Holographic UI Initialization
function initializeHolographicUI() {
    // Initialize navigation
    initNavigation();
    
    // Initialize voice control
    initVoiceControl();
    
    // Initialize quantum effects
    initQuantumEffects();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize skill interactions
    initSkillInteractions();
}

// Navigation System
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetSection = item.getAttribute('data-section');
            
            // Update active states
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    setTimeout(() => {
                        section.classList.add('active');
                    }, 300);
                }
            });
            
            // Holographic transition effect
            createHolographicTransition();
        });
    });
    
    // Auto-activate home section
    document.querySelector('.nav-item[data-section="home"]').classList.add('active');
}

// Voice Control System
function initVoiceControl() {
    const voiceOrb = document.getElementById('voice-orb');
    const voiceFeedback = document.getElementById('voice-feedback');
    let recognition = null;
    
    // Check for speech recognition support
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        
        recognition.onstart = () => {
            voiceOrb.classList.add('active');
            voiceFeedback.textContent = "Neural interface active...";
            voiceFeedback.classList.add('active');
        };
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript.toLowerCase();
            voiceFeedback.textContent = `Command: ${transcript}`;
            
            // Process voice commands
            processVoiceCommand(transcript);
        };
        
        recognition.onend = () => {
            voiceOrb.classList.remove('active');
            setTimeout(() => {
                voiceFeedback.classList.remove('active');
            }, 2000);
        };
        
        recognition.onerror = (event) => {
            voiceFeedback.textContent = "Neural interface error. Please try again.";
            setTimeout(() => {
                voiceFeedback.classList.remove('active');
            }, 3000);
        };
    } else {
        voiceOrb.style.display = 'none';
    }
    
    voiceOrb.addEventListener('click', () => {
        if (recognition) {
            recognition.start();
        }
    });
}

// Process Voice Commands
function processVoiceCommand(command) {
    const navItems = document.querySelectorAll('.nav-item');
    
    if (command.includes('home') || command.includes('main')) {
        navItems[0].click();
    } else if (command.includes('about') || command.includes('profile')) {
        navItems[1].click();
    } else if (command.includes('skills') || command.includes('abilities')) {
        navItems[2].click();
    } else if (command.includes('portfolio') || command.includes('work')) {
        navItems[3].click();
    } else if (command.includes('services') || command.includes('offer')) {
        navItems[4].click();
    } else if (command.includes('contact') || command.includes('connect')) {
        navItems[5].click();
    } else if (command.includes('telegram')) {
        window.open('https://t.me/Real1editorBot', '_blank');
    } else if (command.includes('email')) {
        window.location.href = 'mailto:real1editor@gmail.com';
    }
}

// Quantum Effects
function initQuantumEffects() {
    // Create floating particles
    createFloatingParticles();
    
    // Add holographic glitch effects randomly
    setInterval(() => {
        if (Math.random() > 0.7) {
            createRandomGlitch();
        }
    }, 5000);
    
    // Pulsing energy orbs
    setInterval(() => {
        document.querySelectorAll('.orb-core, .node-core').forEach(orb => {
            orb.style.animation = 'none';
            setTimeout(() => {
                orb.style.animation = 'pulse 2s infinite alternate';
            }, 10);
        });
    }, 4000);
}

// Create Floating Particles
function createFloatingParticles() {
    const background = document.getElementById('quantum-background');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'quantum-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: ${Math.random() > 0.5 ? 'var(--primary-holo)' : 'var(--secondary-holo)'};
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.1};
            animation: floatParticle ${Math.random() * 20 + 10}s linear infinite;
        `;
        
        background.appendChild(particle);
    }
    
    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(90deg); }
            50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg); }
            75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(270deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

// Create Random Glitch Effects
function createRandomGlitch() {
    const glitch = document.createElement('div');
    glitch.className = 'holographic-glitch';
    glitch.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, var(--primary-holo), var(--secondary-holo), var(--accent-neon));
        opacity: 0.05;
        pointer-events: none;
        z-index: 99;
        animation: glitchFlash 0.3s ease-out;
    `;
    
    document.body.appendChild(glitch);
    
    setTimeout(() => {
        glitch.remove();
    }, 300);
    
    // Add CSS for glitch flash
    const style = document.createElement('style');
    if (!document.querySelector('#glitch-style')) {
        style.id = 'glitch-style';
        style.textContent = `
            @keyframes glitchFlash {
                0% { opacity: 0; transform: translate(0); }
                50% { opacity: 0.1; transform: translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px); }
                100% { opacity: 0; transform: translate(0); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Holographic Transition Effect
function createHolographicTransition() {
    const transition = document.createElement('div');
    transition.className = 'holo-transition';
    transition.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, var(--primary-holo), var(--secondary-holo));
        opacity: 0;
        pointer-events: none;
        z-index: 999;
        animation: holoTransition 0.8s ease-out;
    `;
    
    document.body.appendChild(transition);
    
    setTimeout(() => {
        transition.remove();
    }, 800);
    
    // Add CSS for transition
    const style = document.createElement('style');
    if (!document.querySelector('#transition-style')) {
        style.id = 'transition-style';
        style.textContent = `
            @keyframes holoTransition {
                0% { opacity: 0; transform: scale(0.8); filter: blur(20px); }
                50% { opacity: 0.3; transform: scale(1); filter: blur(10px); }
                100% { opacity: 0; transform: scale(1.2); filter: blur(0); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Contact Form Handler
function initContactForm() {
    const transmitBtn = document.getElementById('transmit-btn');
    const contactOrbs = document.querySelectorAll('.contact-orb');
    
    transmitBtn.addEventListener('click', () => {
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        
        if (!name || !email || !message) {
            createNotification('Please complete all transmission fields', 'error');
            return;
        }
        
        // Simulate quantum transmission
        simulateTransmission(name, email, message);
    });
    
    // Contact orb interactions
    contactOrbs.forEach(orb => {
        orb.addEventListener('click', () => {
            const contactType = orb.getAttribute('data-contact');
            
            switch(contactType) {
                case 'telegram':
                    tg.openTelegramLink('https://t.me/Real1editorBot');
                    break;
                case 'email':
                    window.location.href = 'mailto:real1editor@gmail.com';
                    break;
                case 'upwork':
                    tg.openLink('https://www.upwork.com/freelancers/~01a6fc21cc80922abf');
                    break;
            }
        });
    });
}

// Simulate Quantum Transmission
function simulateTransmission(name, email, message) {
    const transmitBtn = document.getElementById('transmit-btn');
    const originalText = transmitBtn.textContent;
    
    transmitBtn.textContent = 'TRANSMITTING...';
    transmitBtn.disabled = true;
    
    // Create transmission animation
    const transmissionEffect = document.createElement('div');
    transmissionEffect.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: radial-gradient(circle, var(--primary-holo), transparent);
        opacity: 0;
        animation: transmissionPulse 2s ease-out;
        z-index: 999;
        pointer-events: none;
    `;
    
    document.body.appendChild(transmissionEffect);
    
    // Add CSS for transmission pulse
    const style = document.createElement('style');
    if (!document.querySelector('#transmission-style')) {
        style.id = 'transmission-style';
        style.textContent = `
            @keyframes transmissionPulse {
                0% { opacity: 0.8; transform: translate(-50%, -50%) scale(0); }
                50% { opacity: 0.5; transform: translate(-50%, -50%) scale(2); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(4); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Simulate API call
    setTimeout(() => {
        transmissionEffect.remove();
        
        // In a real implementation, you would send data to your server
        // For demo purposes, we'll simulate success
        createNotification('Transmission successful! Quantum message received.', 'success');
        
        // Reset form
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-message').value = '';
        
        transmitBtn.textContent = originalText;
        transmitBtn.disabled = false;
        
        // Send data to Telegram (in a real Mini App, you would use tg.sendData)
        if (tg.sendData) {
            const formData = {
                name: name,
                email: email,
                message: message.substring(0, 100) // Limit length for demo
            };
            tg.sendData(JSON.stringify(formData));
        }
    }, 2000);
}

// Skill Interactions
function initSkillInteractions() {
    const skillNodes = document.querySelectorAll('.skill-node');
    const detailPanel = document.getElementById('editing-detail');
    
    skillNodes.forEach(node => {
        node.addEventListener('click', () => {
            const skill = node.getAttribute('data-skill');
            
            // Update detail panel based on skill
            updateSkillDetail(skill, detailPanel);
            
            // Visual feedback
            skillNodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');
        });
    });
}

// Update Skill Details
function updateSkillDetail(skill, panel) {
    const details = {
        editing: {
            title: 'Quantum Editing Matrix',
            description: 'Manipulate the fabric of time and space within visual media. My editing protocols can reshape reality itself, allowing for seamless transitions and temporal manipulations that defy conventional physics.'
        },
        color: {
            title: 'Chroma Manipulation',
            description: 'Control the very essence of light and color. My algorithms can extract, enhance, and transform color spectra beyond human visual perception, creating visuals that resonate with the subconscious.'
        },
        motion: {
            title: 'Temporal FX',
            description: 'Bend time within your visual content. Slow down moments to extract emotional depth or accelerate sequences to create dynamic energy flows that captivate audiences.'
        },
        sound: {
            title: 'Acoustic Engineering',
            description: 'Sculpt soundscapes that complement and enhance visual narratives. From subtle ambient textures to powerful auditory experiences that synchronize perfectly with visual elements.'
        },
        ai: {
            title: 'AI Integration',
            description: 'Leverage artificial consciousness to analyze, predict, and enhance creative decisions. My neural networks can process visual data and suggest optimizations that human perception might miss.'
        }
    };
    
    const detail = details[skill] || details.editing;
    panel.innerHTML = `
        <h3>${detail.title}</h3>
        <p>${detail.description}</p>
    `;
}

// Notification System
function createNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `holo-notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: var(--glass);
        backdrop-filter: blur(10px);
        border: 1px solid ${type === 'error' ? 'var(--accent-neon)' : 'var(--primary-holo)'};
        border-radius: 10px;
        color: #fff;
        font-family: 'Orbitron', monospace;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Add CSS for notifications
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    .holo-notification.success {
        border-color: var(--primary-holo);
        box-shadow: 0 0 15px rgba(0, 243, 255, 0.3);
    }
    
    .holo-notification.error {
        border-color: var(--accent-neon);
        box-shadow: 0 0 15px rgba(255, 42, 109, 0.3);
    }
`;
document.head.appendChild(notificationStyle);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Telegram Mini App ready
    tg.ready();
    
    // Add any additional initialization here
});
