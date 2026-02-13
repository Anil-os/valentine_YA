// Auto-navigate to yes-page after 5 seconds
setTimeout(() => {
    window.location.href = 'yes-page.html';
}, 5000);

// Also allow click to proceed immediately
document.addEventListener('click', () => {
    window.location.href = 'yes-page.html';
});
