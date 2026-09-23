# My Site — 3 pages + Brevo email signup form

Styled with Brevo's brand colors (Forest Green, Mint, Cream, Charcoal) and Inter typeface.

## Contents
- `index.html` — Home (with signup form)
- `about.html` — About
- `contact.html` — Contact (with signup form)
- `style.css` — shared styling across all 3 pages

## 1. Connect your Brevo form
In `index.html` and `contact.html`, look for the `<!-- BREVO SIGNUP FORM ZONE -->` block.
Replace the demo form with your real Brevo embed code:
1. Log in to your Brevo account
2. Contacts > Forms > Create a form
3. Configure the form (choose the target contact list)
4. Copy the HTML code Brevo gives you
5. Paste it into `index.html` (and `contact.html` if needed), replacing the demo form

## 2. Publish on GitHub Pages
1. Create a new GitHub repository (public, or private with a Pro/Team account)
2. Add these 4 files to the root of the repository (or a `/docs` folder)
3. Push (`git push`) to GitHub
4. In the repo: Settings > Pages
5. Under "Build and deployment", pick the branch (e.g. `main`) and folder (`/` or `/docs`)
6. Save — GitHub Pages will generate your site's URL in a few minutes

Official docs: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 3. Customize
- Edit the text directly in the `.html` files
- Colors and fonts are set in `style.css` (brand tokens defined at the top)
