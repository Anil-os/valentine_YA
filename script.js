function handleYes() {
    // Redirect to the yes page
    window.location.href = 'yes-page.html';
}

function handleNo() {
    // This function won't really be called since the button moves away
    console.log('Nice try! 😄');
}

// Make NO button run away from cursor
const noButton = document.querySelector('.no-btn');
const container = document.querySelector('.container');

document.addEventListener('mousemove', (e) => {
    const buttonRect = noButton.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;
    
    const distance = Math.sqrt(
        Math.pow(e.clientX - buttonCenterX, 2) + 
        Math.pow(e.clientY - buttonCenterY, 2)
    );
    
    // If cursor is within 100px of the button, move it away
    if (distance < 150) {
        const containerRect = container.getBoundingClientRect();
        
        // Calculate random position
        const maxX = window.innerWidth - buttonRect.width - 50;
        const maxY = window.innerHeight - buttonRect.height - 50;
        
        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;
        
        // Make sure new position is far from cursor
        while (Math.sqrt(Math.pow(e.clientX - newX, 2) + Math.pow(e.clientY - newY, 2)) < 200) {
            newX = Math.random() * maxX;
            newY = Math.random() * maxY;
        }
        
        noButton.style.position = 'fixed';
        noButton.style.left = newX + 'px';
        noButton.style.top = newY + 'px';
        noButton.style.transition = 'all 0.3s ease';
    }
});
