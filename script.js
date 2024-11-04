// script.js

// Function to fetch a random quote from the Kanye West Quotes API
async function fetchQuote() {
    const url = "https://api.kanye.rest";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.quote; // Return the quote from the response
    } catch (error) {
        console.error("Error fetching quote:", error);
        return "Failed to fetch a quote."; // Return an error message
    }
}

// Function to display a new quote
async function displayNewQuote() {
    const quoteElement = document.getElementById('quote');
    const quote = await fetchQuote();
    quoteElement.textContent = quote; // Update the quote in the HTML
}

// Function to generate hearts
function generateHeart(event) {
    const heartsContainer = document.getElementById('hearts');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';
    heart.style.left = `${event.clientX}px`;
    heart.style.top = `${event.clientY}px`;
    heartsContainer.appendChild(heart);

    // Remove heart after animation
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Function to create falling flowers
function createFallingFlowers() {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.textContent = '🌸';
    flower.style.left = `${Math.random() * window.innerWidth}px`;
    document.body.appendChild(flower);

    // Remove flower after animation
    flower.addEventListener('animationend', () => {
        flower.remove();
    });
}

// Event listener for the button
document.getElementById('new-quote').addEventListener('click', (event) => {
    displayNewQuote();
    generateHeart(event); // Generate heart at the click position
    createFallingFlowers(); // Create a falling flower
});