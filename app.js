document.addEventListener('DOMContentLoaded', () => {
    const wolf = document.getElementById('wolf-companion');
    const chatUI = document.getElementById('wolf-chat-ui');
    const chatBody = document.getElementById('chat-body');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send');

    // Toggle Chat Window
    if (wolf && chatUI) {
        wolf.addEventListener('click', () => {
            chatUI.classList.toggle('visible');
        });
    }

    // The Wolf's "Brain" (Keyword Dictionary)
    function getWolfResponse(input) {
        const text = input.toLowerCase();
        
        if (text.includes('music') || text.includes('song') || text.includes('naughty') || text.includes('listen')) {
            return "You can stream my latest drop 'Naughty' right here on the homepage, or check out my full catalog on the <a href='music.html' style='color:#888; text-decoration:underline;'>Music page</a>. 🎵";
        }
        if (text.includes('book') || text.includes('perform') || text.includes('event') || text.includes('host') || text.includes('wednesday')) {
            return "Looking to collaborate or book a performance? Head over to the <a href='book.html' style='color:#888; text-decoration:underline;'>Book Me</a> tab to send the details. 📆";
        }
        if (text.includes('press') || text.includes('article') || text.includes('interview')) {
            return "Check out the <a href='press.html' style='color:#888; text-decoration:underline;'>Press page</a> to see what Westword and Denverite are saying. 📰";
        }
        if (text.includes('who') || text.includes('about') || text.includes('bio') || text.includes('jhazzy')) {
            return "I'm an independent artist born and raised in Denver, bringing feminine energy to the game. Read the full story on the <a href='about.html' style='color:#888; text-decoration:underline;'>About page</a>. 🐺";
        }
        if (text.includes('hello') || text.includes('hi') || text.includes('hey') || text.includes('sup')) {
            return "What's good? I can help you find music, booking info, or press articles. What do you need?";
        }
        
        // Fallback response if no keywords match
        return "I only speak music and business. Try asking me about Jhazzy's latest tracks, booking info, or press!";
    }

    // Handle sending messages
    function sendMessage() {
        const userText = chatInput.value.trim();
        if (userText === '') return;

        // Add user message to UI
        const userDiv = document.createElement('div');
        userDiv.className = 'chat-msg user-msg';
        userDiv.textContent = userText;
        chatBody.appendChild(userDiv);

        // Clear input
        chatInput.value = '';

        // Auto-scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;

        // Simulate thinking delay before Wolf replies
        setTimeout(() => {
            const wolfDiv = document.createElement('div');
            wolfDiv.className = 'chat-msg wolf-msg';
            wolfDiv.innerHTML = getWolfResponse(userText);
            chatBody.appendChild(wolfDiv);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 600);
    }

    // Send on button click
    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }

    // Send on 'Enter' key
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});
