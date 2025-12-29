# Stremio User Guide - Documentation Website

> **Comprehensive, production-ready documentation for non-technical users**  
> Learn how to install, configure, and safely use Stremio with deep focus on usability, troubleshooting, and safety.

**Live Site:** [Deploy to see live] • **Built with:** Astro + Starlight

---

## 📋 Table of Contents

- [About This Project](#about-this-project)
- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Content Overview](#content-overview)
- [How to Edit Content](#how-to-edit-content)
- [Adding Screenshots](#adding-screenshots)
- [Deployment](#deployment)
- [Legal & Scope Disclaimer](#legal--scope-disclaimer)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About This Project

This is a **comprehensive documentation website** for Stremio users—especially those who are non-technical. The site provides:

- **50+ detailed guides** covering installation, usage, troubleshooting, and safety
- **Beginner-friendly language** with no jargon (or jargon explained)
- **Step-by-step instructions** with clear "Before You Start" and "How to Undo" sections
- **Safety-first approach** with legal guidance and risk frameworks
- **Accessibility features** including light/dark themes, high contrast, and clear typography
- **Decision-tree troubleshooting** for fast problem-solving
- **Comprehensive glossary** (80+ terms) and FAQ (40+ questions)

### Intended Audience

- First-time Stremio users
- Non-technical users helping family/friends
- Users wanting to understand add-ons and safety
- Anyone troubleshooting issues

### NOT Included (by Design)

This guide does **NOT** provide:
- Step-by-step instructions for installing piracy-focused add-ons
- Configuration guides for accessing copyrighted content without authorization
- Instructions for debrid services used for illegal streaming
- Endorsement of any illegal activity

See [Legal & Scope Disclaimer](#legal--scope-disclaimer) below.

---

## ✨ Features

### Content Features

- ✅ **50+ comprehensive guides** organized into 9 major sections
- ✅ **Consistent structure**: Intro, Prerequisites, Steps, Common Mistakes, How to Undo, Next Steps
- ✅ **Safety callouts** on every page that involves risk
- ✅ **Beginner glossary** (25 terms) + **Complete glossary** (80+ terms)
- ✅ **40+ FAQ entries** with cross-links
- ✅ **Troubleshooting decision tree** for guided problem-solving
- ✅ **Mobile-first design** with responsive layouts

### UX Features

- ✅ **Starlight-powered** (docs-optimized Astro theme)
- ✅ **Full-text search** (built-in)
- ✅ **Light & Dark themes** (automatic, follows system preference)
- ✅ **Sidebar navigation** with collapsible sections
- ✅ **Table of contents** on every page
- ✅ **Estimated read time** and **difficulty badges**
- ✅ **Reusable components** (Callout, Steps)
- ✅ **Accessibility-compliant** (WCAG-friendly contrast, keyboard navigation)
- ✅ **Print-friendly styles**

### Technical Features

- ✅ **Astro 4.x** + **Starlight 0.28.x**
- ✅ **TypeScript** for type safety
- ✅ **MDX** for rich content (components in Markdown)
- ✅ **Custom CSS** with theme tokens (src/styles/custom.css)
- ✅ **Zero JavaScript in content** (pure static HTML)
- ✅ **Fast builds** (<1 min for full site)
- ✅ **SEO-optimized** (meta tags, descriptions, structured headings)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.x or newer
- **npm** 9.x or newer (comes with Node.js)
- A code editor (VS Code recommended)

### Installation

```bash
# 1. Navigate to the project directory
cd stremio-docs

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will be available at **http://localhost:4321**

### Build for Production

```bash
# Build static site
npm run build

# Preview the build locally
npm run preview
```

The built site will be in the `dist/` directory.

---

## 📁 Project Structure

```
stremio-docs/
├── public/
│   └── images/              # Screenshots and visual assets (add your own)
│       └── .gitkeep         # Placeholder (remove when you add images)
├── src/
│   ├── components/
│   │   ├── Callout.astro    # Callout boxes (note/tip/warning/legal)
│   │   ├── Steps.astro      # Numbered step lists
│   │   └── Footer.astro     # Custom footer with legal disclaimer
│   ├── content/
│   │   └── docs/
│   │       ├── index.mdx                 # Homepage
│   │       ├── start-here/               # 5 beginner guides
│   │       ├── install/                  # 7 device installation guides
│   │       ├── using-stremio/            # 6 usage guides
│   │       ├── addons/                   # 6 add-on guides (+ safety notes)
│   │       ├── metadata/                 # 5 metadata management guides
│   │       ├── troubleshooting/          # 9 troubleshooting guides
│   │       ├── privacy-security/         # 5 privacy/security guides
│   │       ├── faq/                      # FAQ page
│   │       └── glossary/                 # Complete glossary
│   └── styles/
│       └── custom.css       # Custom styling and theme overrides
├── astro.config.mjs         # Astro + Starlight configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

---

## 📚 Content Overview

The documentation is organized into **9 major sections**:

### 1. Start Here (5 pages)

Essential reading for new users:
- What is Stremio?
- Safety & Legality
- First 10 Minutes Setup
- Glossary for Beginners
- What to Do Next

### 2. Installation (7 pages)

Device-specific installation guides:
- Overview
- Windows, macOS, Linux
- Android Phone/Tablet, Android TV
- Web Browser

### 3. Using Stremio (6 pages)

Master the interface and features:
- Navigation Basics
- Search & Discover
- Library, Watchlist & History
- Player Settings, Subtitles & Audio
- Sync & Multiple Devices
- Accessibility Settings

### 4. Add-ons (6 pages)

Understand and manage add-ons safely:
- Add-ons Explained
- How to Install & Remove Add-ons Safely
- How to Evaluate Add-on Trust
- Catalogs & Metadata Add-ons
- Subtitle Add-ons
- **AIOStream: Safety Note** (educational, no setup instructions)

### 5. Metadata Management (5 pages)

Organize and polish your library:
- Metadata Explained
- Metadata Add-on Setup (AIOMetadata-style, legal focus)
- Fix Wrong Posters/Titles
- Language & Regional Settings
- Best Practices for Clean Library

### 6. Troubleshooting (9 pages)

Solve problems fast:
- Overview
- Playback & Buffering
- Subtitles Not Working
- Audio/Video Sync
- App Crashes & Freezes
- Login & Sync Issues
- Android TV Performance
- Network Checklist
- **Troubleshooting Decision Tree** (guided flow)

### 7. Privacy & Security (5 pages)

Stay safe and legal:
- Privacy Basics
- Account Security
- Device Security (TV Sticks)
- Avoiding Suspicious Add-ons
- Reporting Issues & Scams

### 8. FAQ (1 page)

40+ common questions with concise answers.

### 9. Glossary (1 page)

80+ terms explained in plain English.

---

## ✏️ How to Edit Content

All content is in **Markdown (MDX)** files located in `src/content/docs/`.

### Editing a Page

1. **Find the file** you want to edit (e.g., `src/content/docs/install/windows.mdx`)
2. **Open it** in your code editor
3. **Edit the content** (Markdown + optional components)
4. **Save the file**
5. **The dev server will auto-reload** (if running `npm run dev`)

### Markdown Basics

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet list
- Item 2

1. Numbered list
2. Item 2

[Link text](https://example.com)

![Image alt text](/images/screenshot.png)
```

### Using Components

Import components at the top of your MDX file:

```mdx
---
title: Page Title
description: Page description
---

import Callout from '../../../components/Callout.astro';
import Steps from '../../../components/Steps.astro';

<Callout type="note">
This is a note callout.
</Callout>

<Callout type="tip">
This is a tip callout.
</Callout>

<Callout type="warning">
This is a warning callout.
</Callout>

<Callout type="legal">
This is a legal/safety callout.
</Callout>

<Steps title="Install Stremio">

1. **First step**
   - Details about first step

2. **Second step**
   - Details about second step

</Steps>
```

### Adding a New Page

1. **Create a new `.mdx` file** in the appropriate directory
2. **Add frontmatter** (title, description)
3. **Write content**
4. **Update `astro.config.mjs`** to add it to the sidebar (if needed)

Example:

```mdx
---
title: My New Page
description: A brief description of this page
---

import Callout from '../../../components/Callout.astro';

## Introduction

Your content here.
```

---

## 🖼️ Adding Screenshots

Screenshots are **highly recommended** for installation and troubleshooting guides.

### Where to Put Images

All images go in **`public/images/`**

### Recommended Structure

```
public/
└── images/
    ├── install/
    │   ├── windows/
    │   │   ├── step1-download.png
    │   │   ├── step2-run-installer.png
    │   │   └── ...
    │   ├── macos/
    │   └── android/
    ├── troubleshooting/
    │   ├── playback/
    │   └── ...
    └── ui/
        ├── discover-page.png
        ├── library-tab.png
        └── ...
```

### How to Add an Image to a Page

In your MDX file:

```markdown
![Alt text describing the image](/images/install/windows/step1-download.png)
```

**Best practices:**
- Use **descriptive alt text** (accessibility)
- Keep images **< 500 KB** (optimize with tools like TinyPNG)
- Use **PNG for UI screenshots**, **JPG for photos**
- Name files descriptively (e.g., `settings-page-player-tab.png`)

### Screenshot Tips

- **Crop tightly** (only show relevant UI)
- **Highlight important areas** (arrows, boxes, circles in red)
- **Use consistent OS/theme** (preferably light mode for readability)
- **Blur sensitive info** (email addresses, IP addresses)

---

## ⚖️ Legal & Scope Disclaimer

### What This Guide Covers

This documentation explains:
- ✅ How to install and use **Stremio itself** (the application)
- ✅ How to navigate and configure **the interface and settings**
- ✅ How **add-ons work** at a conceptual level
- ✅ How to **evaluate add-on safety and legality**
- ✅ How to **install and remove add-ons** (general process)
- ✅ **Legal use cases** (YouTube, podcasts, metadata, etc.)
- ✅ **Safety risks** of illegal add-ons (educational, harm-reduction focus)
- ✅ How to **troubleshoot** common problems


### Policy Rationale

**Why the limitation?**

1. **Legal compliance:** Providing instructions for piracy could expose the project to legal action.
2. **Ethical stance:** We believe content creators deserve fair compensation.
3. **User safety:** Guiding users toward legal options reduces their risk of fines, lawsuits, malware, and privacy violations.

**Educational approach:**

- For risky add-ons (e.g., AIOStream), we provide:
  - What it is (high-level)
  - Why it's risky (legal, privacy, security)
  - How to remove it
  - Legal alternatives
- We do **NOT** provide setup or configuration steps.

This approach balances **education** (helping users understand risks) with **responsibility** (not facilitating illegal activity).

### User Responsibility

**Important:** Users are solely responsible for their use of Stremio and any add-ons they install. This guide provides information and recommendations but is not legal advice. Laws vary by jurisdiction. When in doubt, consult a qualified attorney.

---

## 🤝 Contributing

### How to Contribute

Contributions are welcome! Here's how:

1. **Fork this repository**
2. **Create a branch** (`git checkout -b feature/improve-faq`)
3. **Make your changes**
   - Fix typos
   - Improve explanations
   - Add screenshots
   - Update outdated info
4. **Test locally** (`npm run dev`)
5. **Commit your changes** (`git commit -m "Improve FAQ section"`)
6. **Push to your fork** (`git push origin feature/improve-faq`)
7. **Open a Pull Request**

### Contribution Guidelines

**DO:**
- ✅ Use plain, non-technical language
- ✅ Add screenshots where helpful
- ✅ Follow the existing structure (intro, steps, mistakes, next steps)
- ✅ Test your changes locally
- ✅ Proofread for spelling/grammar

**DON'T:**
- ❌ Add instructions for illegal add-ons or piracy
- ❌ Include external links without context
- ❌ Use jargon without explaining it
- ❌ Remove safety warnings or legal disclaimers

### Content Standards

- **Tone:** Friendly, patient, reassuring (like teaching a friend)
- **Reading level:** 8th grade (USA) or equivalent (accessible to most adults)
- **Sentence length:** Short and clear (avoid run-ons)
- **Active voice:** Preferred over passive
- **Accessibility:** Descriptive alt text for images, high-contrast colors

### Reporting Issues

If you find a problem (typo, broken link, outdated info), please:
1. **Open an issue** on GitHub
2. Describe the problem clearly
3. Include the page URL or file path
4. Suggest a fix (if you have one)

---

## 📄 License

### Documentation Content

The text and documentation content in this repository is licensed under:

**[Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/)**

You are free to:
- **Share** — copy and redistribute the material
- **Adapt** — remix, transform, and build upon the material

Under these terms:
- **Attribution** — You must give appropriate credit
- **ShareAlike** — If you remix or build upon the material, you must distribute under the same license

### Code & Components

The code (Astro components, configuration, CSS) is licensed under:

**[MIT License](https://opensource.org/licenses/MIT)**

Permission is granted to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software.

### Disclaimer

This project is **not affiliated with, endorsed by, or sponsored by Stremio** or Smart Code OOD. It is an independent, community-created educational resource.

---

## 📞 Contact & Support

### For Users

If you need help with Stremio:
- **Start here:** [Troubleshooting Overview](/troubleshooting/overview/)
- **FAQ:** [Frequently Asked Questions](/faq/faq/)
- **Official Stremio Community:** [reddit.com/r/Stremio](https://www.reddit.com/r/Stremio/) (not managed by this project)

### For Contributors

- **Issues & PRs:** Use GitHub Issues and Pull Requests
- **Questions:** Open a GitHub Discussion

---

## 🙏 Acknowledgments

- **Stremio** — for creating an excellent open-source media center
- **Astro & Starlight** — for the best documentation framework
- **Community contributors** — thank you for your feedback and improvements

---

## 🗺️ Roadmap

Future improvements planned:
- [ ] Add more screenshots (especially for installation guides)
- [ ] Translate to other languages (Spanish, French, German)
- [ ] Video tutorials (embedded or linked)
- [ ] Interactive troubleshooting flowchart (JavaScript-based)
- [ ] User testimonials and case studies

**Want to help?** See [Contributing](#contributing) above.

---

**Built with ❤️ for the Stremio community**

Last updated: December 2025
