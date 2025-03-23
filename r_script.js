// Select all sliders with the same class
const allSliders = document.querySelectorAll('.card-slider');

// Loop through each slider
allSliders.forEach((slider) => {
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    const cardsContainer = slider.querySelector('.cards-container');

    // Check if elements exist to avoid errors
    if (prevBtn && nextBtn && cardsContainer) {
        // Add event listeners to buttons for each slider
        prevBtn.addEventListener('click', () => {
            cardsContainer.scrollLeft -= 220; // Scroll left by 220px
        });

        nextBtn.addEventListener('click', () => {
            cardsContainer.scrollLeft += 220; // Scroll right by 220px
        });
    }
});

// Select all boxes
const boxes = document.querySelectorAll('.box');

// Add event listeners to each box
boxes.forEach(box => {
    const originalText = box.textContent; // Store the initial text
    const hoverText = box.getAttribute('data-hover'); // Get hover text
    
    // On hover, replace text with hover text
    box.addEventListener('mouseover', () => {
        box.textContent = hoverText;
    });

    // On mouse leave, revert back to original text
    box.addEventListener('mouseout', () => {
        box.textContent = originalText;
    });
});


