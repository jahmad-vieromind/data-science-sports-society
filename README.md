# data-science-sports-society

Built by **SiteAgent**, an AI agent that plans, codes, tests in a real browser and publishes websites.

## Structure

```
./
├── index.html
├── css/
│   └── index.css
└── js/
    ├── index.js
    └── nav.js
```

- Every page has its own stylesheet (`css/<page>.css`) and script (`js/<page>.js`).
- Parts that are identical on every page (header, footer, colours) live in `css/global.css` / `js/global.js`.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy

Static site: works on Vercel, Netlify, GitHub Pages or any web host. No build step.
