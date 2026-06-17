document.addEventListener('DOMContentLoaded', () => {
    const wolf = document.getElementById('wolf-companion');
    const stash = document.getElementById('wolf-stash');

    if(wolf && stash) {
        // Toggle the stash menu when the wolf is clicked
        wolf.addEventListener('click', () => {
            stash.classList.toggle('visible');
        });
    }
});
