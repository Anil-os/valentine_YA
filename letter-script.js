const letterContent = `You're special to me.
You are the only one who I wouldn't mind losing sleep for, the only one who I can never get tired of talking to and the only one who crosses my mind constantly throughout the day.
You are the only one who can make me smile without any intention and affect my emotions with every action of yours. I can't explain in words how much you mean to me but you're the one I'm afraid of losing and the one I want to keep in my life.`;

const letterText = document.getElementById('letter-text');

let charIndex = 0;
const typingSpeed = 80; // milliseconds per character

function typeWriter() {
    if (charIndex < letterContent.length) {
        letterText.textContent += letterContent.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    }
}

// Start typing after page loads and animations complete
setTimeout(() => {
    typeWriter();
}, 2500);

function goToQRPage() {
    window.location.href = 'qr-page.html';
}
