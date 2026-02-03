let gameStarted = false;
let shuffling = false;
let revealed = false;

function startGame() {
    if (gameStarted) return;
    
    gameStarted = true;
    const startBtn = document.querySelector('.start-btn');
    startBtn.classList.add('hidden');
    
    // Start shuffling immediately (no reveal)
    shuffleGifts();
}

function shuffleGifts() {
    shuffling = true;
    const container = document.querySelector('.gifts-container');
    const giftBoxes = Array.from(document.querySelectorAll('.gift-box'));
    
    // Mark boxes as shuffling
    giftBoxes.forEach(box => box.classList.add('shuffling'));
    
    let shuffleCount = 0;
    const maxShuffles = 15;
    
    const shuffleInterval = setInterval(() => {
        // Random shuffle positions
        for (let i = giftBoxes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // Swap positions visually
            if (i !== j) {
                const temp = giftBoxes[i].style.order || i;
                giftBoxes[i].style.order = giftBoxes[j].style.order || j;
                giftBoxes[j].style.order = temp;
            }
        }
        
        shuffleCount++;
        
        if (shuffleCount >= maxShuffles) {
            clearInterval(shuffleInterval);
            shuffling = false;
            // Remove shuffling class and enable clicking
            giftBoxes.forEach(box => {
                box.classList.remove('shuffling');
                box.onclick = function() { openGift(this); };
            });
        }
    }, 300);
}

function openGift(giftElement) {
    if (shuffling || revealed) return;
    
    revealed = true;
    
    // Get the gift number
    const giftNumber = giftElement.getAttribute('data-gift');
    
    // Reveal the clicked gift
    giftElement.classList.add('revealed');
    
    // Wait a moment then redirect to gift page
    setTimeout(() => {
        window.location.href = `gift-page.html?gift=${giftNumber}`;
    }, 800);
}
