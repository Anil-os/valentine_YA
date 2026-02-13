// Auto-navigate to yes-page after 3 seconds
setTimeout(() => {
    window.location.href = 'yes-page.html';
}, 3000);

// Also allow click to proceed immediately
document.addEventListener('click', () => {
    window.location.href = 'yes-page.html';
});
