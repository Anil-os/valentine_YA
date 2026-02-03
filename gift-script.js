// Get gift number from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const giftNumber = urlParams.get('gift');

// Gift images
const giftImages = {
    '1': 'gift1.jpeg',
    '2': 'gift2.jpeg',
    '3': 'gift3.jpeg'
};

// Quotes for each gift
const giftQuotes = {
    '1': [
        '"You are the reason I smile every day."',
        '"With you, every moment is special."',
        '"You make my heart skip a beat!"'
    ],
    '2': [
        '"You are my sunshine on a cloudy day."',
        '"Being with you feels like a dream come true."',
        '"You are simply amazing in every way!"'
    ],
    '3': [
        '"You light up my world like nobody else."',
        '"Every day with you is a blessing."',
        '"You are my forever Valentine!"'
    ]
};

// Display the selected gift
if (giftNumber && giftImages[giftNumber]) {
    document.getElementById('selectedGift').src = giftImages[giftNumber];
    
    // Display quotes
    const quotes = giftQuotes[giftNumber];
    document.getElementById('quote1').textContent = quotes[0];
    document.getElementById('quote2').textContent = quotes[1];
    document.getElementById('quote3').textContent = quotes[2];
} else {
    // Default to gift 1 if no valid gift number
    document.getElementById('selectedGift').src = giftImages['1'];
    document.getElementById('quote1').textContent = giftQuotes['1'][0];
    document.getElementById('quote2').textContent = giftQuotes['1'][1];
    document.getElementById('quote3').textContent = giftQuotes['1'][2];
}

function openExtraGift() {
    window.location.href = 'letter-page.html';
}
