# Parshant Singh — Portfolio

Personal portfolio site showcasing skills, education, certifications, and projects — including two
playable/downloadable games: **Snake Water Gun** (browser demo) and **Snake Game** (Pygame source
download).

## Tech Stack

- Plain HTML, CSS, and vanilla JavaScript — no build step or framework
- Font Awesome icons and Google Fonts (Fraunces, Newsreader, IBM Plex Mono)
- Deployed as a static site on Netlify

## Structure

- `index.html`, `style.css`, `script.js` — main portfolio page
- `profile.svg` — generated avatar used in the hero section
- `games/snake-water-gun/` — a playable, client-side rebuild of the Snake Water Gun game
- `downloads/snake_game.py` — downloadable source for the Pygame Snake Game

## Running Locally

Since this is a static site, just open `index.html` in a browser, or serve the folder with any
static file server, e.g.:

```bash
npx serve .
```
