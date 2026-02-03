# Elena Voice - Vanilla HTML/CSS/JS Version

This project has been converted from React/TypeScript to vanilla HTML, CSS, and JavaScript.

## Files

- **index.html** - Main HTML file with all page structure
- **styles.css** - All styles converted from Tailwind CSS and React components
- **script.js** - Vanilla JavaScript for interactivity (navigation, audio players, form handling)

## Features

✅ Responsive navigation with scroll effect
✅ Hero section with animated text
✅ Audio samples section with interactive playback simulation
✅ About section with skills and client lists
✅ Contact section with working form
✅ Footer with social links

## How to Use

Simply open `index.html` in any modern web browser. No build process or dependencies required!

For local development with live reload, you can use:

```bash
# Python
python -m http.server 8000

# Node.js (if you have npx)
npx serve

# Or just open index.html directly in your browser
```

## Original React Version

The original React/TypeScript/Vite version has been backed up in the `_react_backup/` directory.

To restore the React version:
1. Copy files from `_react_backup/` back to root
2. Run `npm install` or `bun install`
3. Run `npm run dev` or `bun dev`

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Notes

- The audio samples use simulated playback (no actual audio files loaded)
- Form submission logs to console (connect to your backend as needed)
- All animations use pure CSS keyframes
- No external dependencies except Google Fonts
