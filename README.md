# Agbaeze Jennifer | Portfolio

Hi, I'm **Agbaeze Jennifer**, a web developer and Computer Science student at Michael Okpara University, working towards becoming a creative technologist.

This is my personal portfolio website. I built it to show who I am, what I can build, and how to reach me. I wanted it to feel alive when you scroll, hover and click, not like an ordinary website.

## What's inside

- **Hero:** my photo on a glowing dark background with a big headline, a typing effect on my role, and a photo that tilts as you move your mouse.
- **About:** a statement that lights up word by word as you scroll, my story, my education and my goal, and a button to download my resume.
- **Skills:** the tools I build with, in cards that glow where you move your cursor.
- **Projects:** a grid of project cards with "View project" and "Code" buttons.
- **Process:** a timeline that fills as you scroll, showing how I take a project from idea to launch.
- **Contact:** a contact form, my links, and a "Looking for collaboration?" banner.
- **Extras:** floating particles, a custom cursor, a gradient navigation pill that highlights the section you're in, and a menu for phones.

## Built with

- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (no frameworks, no libraries)
- Google Fonts: Barlow Condensed and Manrope

## Folder structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── hero.png      <- my photo with the background removed
│   └── resume.pdf    <- my resume
└── README.md
```

## How to run it

1. Download or clone this project.
2. Add `hero.png` and `resume.pdf` to the `assets` folder.
3. Open `index.html` in your browser. That's it, there's nothing to install.

For a nicer workflow, open the folder in VS Code and use the Live Server extension.

## How to edit it

- **My projects:** open `js/main.js` and edit the `projects` list near the top. Change the title, description, tags, and the `live` and `code` links.
- **My skills:** edit the four skill cards in the Skills section of `index.html`.
- **Colours:** change the values at the top of `css/style.css` (`--grad`, `--blue`, `--sky`, `--coral`). The buttons, nav and glows all follow them.
- **Typing roles in the hero:** edit the `roles` list in `js/main.js`.
- **My details:** my email, GitHub and LinkedIn links are in `index.html`. Search for them and update if they ever change.

## Contact form

The form has no backend. When someone sends a message, it opens their email app with the message already filled in, addressed to me. If I want messages sent straight to my inbox later, I can connect a service like Formspree or Netlify Forms.

## Deploying

This is a static site, so it's free and quick to put online:

- **Vercel or Netlify:** drag and drop the `portfolio` folder, or connect the GitHub repo.
- **GitHub Pages:** push the project to a repo, then turn on Pages in the repo settings.

## Accessibility and performance

- Works on phones, tablets and desktops.
- Respects the "reduce motion" setting on a person's device.
- Visible keyboard focus on links and buttons.
- Includes search tags so Google can connect my name to my GitHub and LinkedIn.

## Connect with me

- Email: agbaezejennifer134@gmail.com
- GitHub: https://github.com/agbaeze-jennifer
- LinkedIn: https://www.linkedin.com/in/agbaeze-jennifer-327310450/

Thanks for visiting. If you have something that needs building, let's talk.
