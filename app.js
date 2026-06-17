document.addEventListener('DOMContentLoaded', () => {
    const wolf = document.getElementById('wolf-companion');
    const bubble = document.getElementById('wolf-speech-bubble');

    // Make the wolf clickable
    if (wolf && bubble) {
        wolf.addEventListener('click', () => {
            
            // 1. Jump Animation
            wolf.classList.add('wolf-jump');
            setTimeout(() => { 
                wolf.classList.remove('wolf-jump'); 
            }, 500);
            
            // 2. Open/Close Bubble
            bubble.classList.toggle('visible');
        });
    }
});
