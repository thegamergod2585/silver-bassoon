# GameHub - Free Online Games Website

A modern, responsive games website built with HTML, CSS, and JavaScript.

## Features

- 🎮 Modern and responsive design
- 🎯 Featured games section
- 📱 Mobile-friendly layout
- 💬 Contact form
- ⚡ Smooth animations and transitions
- 🎨 Beautiful gradient design

## Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation

1. Clone the repository or download the files
2. Open `index.html` in your web browser
3. Start playing games!

## File Structure

```
silver-bassoon/
├── index.html      # Main website page
├── styles.css      # Styling
├── script.js       # JavaScript functionality
├── games/          # Folder for individual games (to be created)
└── README.md       # This file
```

## Customization

### Adding More Games

Edit `script.js` and add new games to the `games` array:

```javascript
{
    id: 7,
    name: "Your Game Name",
    description: "Game description",
    emoji: "🎮",
    url: "games/your-game.html"
}
```

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6c5ce7;  /* Change this */
    --secondary-color: #a29bfe; /* And this */
    /* ... other colors ... */
}
```

## Future Enhancements

- [ ] Add individual game pages
- [ ] Implement user authentication
- [ ] Add leaderboards
- [ ] Create mobile app
- [ ] Add multiplayer functionality

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Support

For issues or suggestions, please open an issue on GitHub.

Happy Gaming! 🎮