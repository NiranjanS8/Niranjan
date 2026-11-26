# IGNITE 2026 College Fest Landing Page

IGNITE 2026 landing page built with HTML5, CSS3, and Vanilla JavaScript.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript ES6 modules
- Comic Neue web font with Comic Sans MS fallback
- Static assets in `assets/images/`

## Features

- Sticky responsive navbar
- Hero section with countdown and animated statistics
- About, events, schedule, prizes, speakers, sponsors, gallery, FAQ, contact, and footer sections
- Custom themed interest dropdown
- FAQ accordion
- Gallery lightbox
- Scroll reveal interactions
- Responsive layouts for mobile, tablet, laptop, and desktop

## Setup

1. Open the project folder.

   ```bash
   cd CLG_Fest
   ```

2. Start a local static server.

   ```bash
   npx serve
   ```

3. Open the site in your browser.

   ```text
   http://localhost:3000/
   ```

## Project Structure

```text
project/
|-- index.html
|-- css/
|   |-- style.css
|   |-- variables.css
|   `-- animations.css
|-- js/
|   |-- main.js
|   |-- countdown.js
|   |-- navbar.js
|   |-- gallery.js
|   `-- faq.js
|-- assets/
|   |-- images/
|   |-- icons/
|   `-- fonts/
`-- README.md
```

## Notes

- No frontend framework is required.
- Use a local server instead of opening `index.html` directly because the JavaScript uses ES modules.
