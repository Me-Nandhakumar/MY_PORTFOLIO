# Nandhakumar S — Portfolio

I build models that predict real things, like metro crowds and fake accounts, then wrap them in clean Python. This is my personal portfolio: a small, framework-free site where every area of my work sits behind its own door.

**Live site:** https://me-nandhakumar.github.io/MY_PORTFOLIO/

## About me

- B.Tech in AI & Data Science, class of 2026
- Fresher based in Bengaluru, open to entry-level roles (ML engineering, data science, AI development, Python development)
- Works remotely

## What's on the site

- **Home:** a short intro with links to my LinkedIn, GitHub, phone and email.
- **Skills:** progress bars for Python, machine learning, data science, SQL, EDA, HTML, CSS, Git and Jupyter / Colab.
- **Magic happens behind the doors:** four doors, each opening into its own page:
  - ML Engineering
  - Python Development
  - Data Science
  - AI Automation
- **My story** and **Toolkit:** background and the tools I use day to day.
- **Contact:** start a project, see my work, and download my resume.
- **Privacy & credits** (`#privacy`): what the site stores, and who made what.

## Privacy

There is no advertising, no tracking pixel and no third-party embed. Visits are counted with Google Analytics only if a visitor clicks **Allow** on the banner. Until then nothing is sent to Google and no analytics cookies are set. The banner choice is stored in the browser's local storage under `ns-consent`.

### Turning on analytics

Analytics is off until you add your own ID. In `index.html`, find:

```js
var GA_ID = "G-XXXXXXXXXX";
```

and replace it with your Google Analytics 4 Measurement ID. If you leave the placeholder, **Allow** loads nothing, so remove the banner before publishing if you don't plan to use analytics.

## Built with

- HTML, CSS and vanilla JavaScript
- No frameworks, no build step, no external libraries

## Project structure

```
MY_PORTFOLIO/
├── .github/workflows/   GitHub Pages deployment workflow
├── css/                 styles
├── images/              photos and graphics
├── js/                  scripts
├── resume/              resume file
├── index.html           the site
└── README.md
```

## Run it locally

No install needed. Download or clone the repository and open `index.html` in a browser.

```bash
git clone https://github.com/Me-Nandhakumar/MY_PORTFOLIO.git
cd MY_PORTFOLIO
# then open index.html in your browser
```

## Deploy

The site deploys to GitHub Pages through the workflow in `.github/workflows`. Push to `main` and the workflow publishes the update.

## Contact

- Email: nandhakumar.s.jnandhu@gmail.com
- LinkedIn: https://www.linkedin.com/in/nandhakumar-s-j1112/
- GitHub: https://github.com/Me-Nandhakumar
