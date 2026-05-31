// Sample games data
const games = [
    {
        id: 1,
        name: "Puzzle Master",
        description: "Test your puzzle-solving skills",
        emoji: "🧩",
        url: "games/puzzle-master.html"
    },
    {
        id: 2,
        name: "Space Adventure",
        description: "Explore the cosmos and fight aliens",
        emoji: "🚀",
        url: "games/space-adventure.html"
    },
    {
        id: 3,
        name: "Memory Game",
        description: "Challenge your memory skills",
        emoji: "🧠",
        url: "games/memory-game.html"
    },
    {
        id: 4,
        name: "Flappy Runner",
        description: "Jump and dodge obstacles",
        emoji: "🦅",
        url: "games/flappy-runner.html"
    },
    {
        id: 5,
        name: "Snake Classic",
        description: "The classic snake game",
        emoji: "🐍",
        url: "games/snake.html"
    },
    {
        id: 6,
        name: "Minesweeper",
        description: "Find the mines and win",
        emoji: "💣",
        url: "games/minesweeper.html"
    },
    {
        id: 7,
        name: "Snow Rider work in progress",
        description: "Ride your sledge, dodge obstacles, collect presents and buy upgrades!",
        emoji: "🎿",
        url: "games/snow-rider.html"
    }
];

// Load games on page load
window.addEventListener('DOMContentLoaded', () => {
    loadGames();
    setupContactForm();
});

function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-image">${game.emoji}</div>
            <div class="game-info">
                <h3>${game.name}</h3>
                <p>${game.description}</p>
                <button class="play-btn" onclick="playGame('${game.url}')">Play Now</button>
            </div>
        `;
        gamesGrid.appendChild(gameCard);
    });
}

function playGame(gameUrl) {
    window.location.href = gameUrl;
}

function scrollToGames() {
    const gamesSection = document.getElementById('games');
    gamesSection.scrollIntoView({ behavior: 'smooth' });
}

function setupContactForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        });
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
