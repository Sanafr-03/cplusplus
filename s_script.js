let currentIndex = 0;
const cards = document.querySelectorAll('.swiper-card');
const totalCards = cards.length;

// Initial setup
updateCards();

// Function to update card classes for stacking effect
function updateCards() {
    cards.forEach((card, i) => {
        card.classList.remove('active', 'next', 'prev', 'next-next', 'prev-prev');

        if (i === currentIndex) {
            card.classList.add('active');
        } 
        // Next card
        else if (i === (currentIndex + 1) % totalCards) {
            card.classList.add('next');
        } 
        // Next-next card
        else if (i === (currentIndex + 2) % totalCards) {
            card.classList.add('next-next');
        } 
        // Previous card
        else if (i === (currentIndex - 1 + totalCards) % totalCards) {
            card.classList.add('prev');
        } 
        // Previous-previous card
        else if (i === (currentIndex - 2 + totalCards) % totalCards) {
            card.classList.add('prev-prev');
        }
    });
}

// Automatic swiping every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCards();
}, 5000);
