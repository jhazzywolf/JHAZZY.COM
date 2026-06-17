document.addEventListener('DOMContentLoaded', () => {
    const wolf = document.getElementById('wolf-companion');
    const bubble = document.getElementById('wolf-speech-bubble');
    const dialogueText = document.getElementById('wolf-dialogue');
    const talkInput = document.getElementById('wolf-talk-input');
    const sendBtn = document.getElementById('wolf-talk-send');
    const actionChips = document.querySelectorAll('.action-chip');

    // 1. Core Click Logic: Open Bubble & Jump
    if (wolf && bubble) {
        wolf.addEventListener('click', () => {
            // Make the wolf jump visually
            wolf.classList.add('wolf-jump');
            setTimeout(() => { wolf.classList.remove('wolf-jump'); }, 500);
            
            // Toggle the visibility of the menu
            bubble.classList.toggle('visible');
            
            // Reset text when opened
            if (bubble.classList.contains('visible')) {
                dialogueText.innerHTML = "What's good? Give me a command or ask me a question.";
            }
        });
    }

    // 2. Action Chips Logic
    actionChips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            const action = e.target.getAttribute('data-action');
            if (action === 'music') {
                dialogueText.innerHTML = "Go check out the <a href='music.html' style='color:#aaa; text-decoration:underline;'>Music tab</a> for my latest single 'Naughty'.";
            } else if (action === 'trick') {
                dialogueText.innerHTML = "Watch this! 🐺🔄";
                wolf.classList.add('wolf-spin');
                setTimeout(() => { wolf.classList.remove('wolf-spin'); }, 600);
            } else if (action === 'about') {
                dialogueText.innerHTML = "I'm a multi-genre artist out of Denver bringing the heat. Catch the whole story on the <a href='about.html' style='color:#aaa; text-decoration:underline;'>About page</a>.";
            }
        });
    });

    // 3. Conversation Logic
    function processWolfConversation(input) {
        const text = input.toLowerCase();
        if (text.includes('music') || text.includes('song') || text.includes('naughty')) {
            return "Streaming 'Naughty' everywhere right now. Check the <a href='music.html' style='color:#aaa; text-decoration:underline;'>Music page</a>.";
        }
        if (text.includes('book') || text.includes('event')) {
            return "Ready to lock it in? Hit the <a href='book.html' style='color:#aaa; text-decoration:underline;'>Book Me</a> tab.";
        }
        if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
            return "Yo! Welcome to the pack. Need directions around the site?";
        }
        if (text.includes('good boy') || text.includes('pet')) {
            wolf.classList.add('wolf-jump');
            setTimeout(() => { wolf.classList.remove('wolf-jump'); }, 500);
            return "*Happy wolf noises* 🐺";
        }
        return "I only speak music, business, and raw energy. Try asking me about my latest drop!";
    }

    function handleChatSubmit() {
        const userText = talkInput.value.trim();
        if (userText === '') return;
        
        dialogueText.innerHTML = "<em>...</em>";
        talkInput.value = '';
        
        setTimeout(() => {
            dialogueText.innerHTML = processWolfConversation(userText);
        }, 400);
    }

    if (sendBtn) sendBtn.addEventListener('click', handleChatSubmit);
    if (talkInput) {
        talkInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleChatSubmit();
        });
    }
});
