# Advent Calendar - Standalone Version

This is a standalone HTML/CSS/JavaScript version of the Advent Calendar application. No build tools or frameworks required!

## Features

- ✅ Works in any modern browser
- ✅ No dependencies (uses Tailwind CDN)
- ✅ All functionality from React version:
  - Dynamic month calculation
  - Current day highlighting
  - Past days show "Bonus Claimed"
  - Future days are locked
  - Modal with promo codes
  - Copy to clipboard
  - localStorage persistence

## Usage

Simply open `index.html` in your web browser. That's it!

## Customization

Edit the `promotions` array in the `<script>` section to customize daily promotions:

```javascript
const promotions = [
    { day: 1, title: 'Winter Sale', description: 'Get cozy with our winter collection', discount: '20% OFF', code: 'WINTER20' },
    { day: 2, title: 'Holiday Special', description: 'Perfect gifts for everyone', discount: '15% OFF', code: 'HOLIDAY15' },
    // Add more...
];
```

If a day doesn't have a promotion, a default one will be generated automatically.

## File Structure

```
standalone/
  ├── index.html    # Single file with all HTML, CSS, and JavaScript
  └── README.md     # This file
```

## Browser Support

Works in all modern browsers that support:
- ES6 JavaScript
- CSS Grid
- localStorage API
- Clipboard API

