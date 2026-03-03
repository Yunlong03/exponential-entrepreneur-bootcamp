# Exponential Entrepreneur Bootcamp — Diary

**6 Weeks · 84 Hours · Solo Founder Track**
**China × AI/Robotics × Web3 × HealthTech**

---

## Week 1 — Foundations + Website 1

### Day 1 (BUILD — 4h) | March 3, 2026

**Built/Completed:** Set up bootcamp folder structure in Terminal, configured Cursor IDE (Composer mode + Cmd+K inline editing), created GitHub repo with SSH remote, practiced full Git workflow (add → commit → push, branching, merging), built first HTML page from scratch and pushed to GitHub.

**Key concept learned:** Git has a three-step flow: `add` stages specific files (choosing what goes in the snapshot), `commit` saves the snapshot locally on your machine, and only `push` sends it to GitHub. Commits are local until pushed. Branches let you experiment safely off the main trunk — create, test, merge back, delete.

**Biggest challenge:** Understanding the Git workflow — why you sometimes add specific files instead of everything, the difference between add (staging) and commit (saving locally), and the fact that commits only exist on your computer until you push them to GitHub.

**Tomorrow I need to:** HTML & CSS hands-on exercises (Day 2 LEARN — 1 hour).

**Monetization insight:** GitHub repo is my public portfolio. Every commit is proof of work that future cofounders and investors can see.

### Day 2 (LEARN — 1h) | March 4, 2026

**Built/Completed:** Built a profile page from scratch with CSS styling (colors, fonts, spacing, circular image, hover effects). Practiced Inspect Element on live websites. Applied a gradient background and pushed to GitHub.

**Key concept learned:** CSS targets elements three ways: by tag name (`h1`), by class (`.highlight`), or by ID (`#main`). CSS can live in three places: inside `<style>` in the head, inline on a single element, or in a separate `.css` file. Every HTML element is a box with content → padding → border → margin (the box model).

**Biggest challenge:** Using Inspect Element on complex production sites — their CSS is compiled into unreadable class names and external files, making it hard to find the actual styling rules. Simpler sites are better for learning.

**Tomorrow I need to:** Day 3 BUILD (4h) — Build Website 1 with Hostinger AI Builder.

**Monetization insight:** Inspect Element lets you reverse-engineer any competitor's design for free. See what fonts, colors, and spacing they use, then apply it to your own sites.

---

## Appendix A — Abbreviations & Terms

| Abbreviation | Full Name | Plain English |
|---|---|---|
| HTML | HyperText Markup Language | The skeleton of a website — structure, headings, paragraphs, images |
| CSS | Cascading Style Sheets | The styling — colors, fonts, spacing, layout |
| JS | JavaScript | Makes websites interactive — clicks, dynamic content |
| SSH | Secure Shell | Encrypted connection to remote servers (like a fingerprint scanner for GitHub) |
| HTTPS | HyperText Transfer Protocol Secure | Secure web connection (like showing your ID every time) |
| CLI | Command Line Interface | Text-based way to control your computer (Terminal) |
| IDE | Integrated Development Environment | Your code editor (Cursor is an IDE) |
| Git | Git (not an acronym) | Tracks every change to your code — like version history on steroids |
| API | Application Programming Interface | A way for software to talk to other software |
| URL | Uniform Resource Locator | A web address |
| MVP | Minimum Viable Product | Simplest version of a product that delivers value |
| SEO | Search Engine Optimization | Making your site show up in Google searches |
| dApp | Decentralized Application | An app that runs on a blockchain |
| repo | Repository | A project folder with memory — stores files and every change ever made |

---

## Appendix B — Terminal Commands

| Command | What it does |
|---|---|
| `pwd` | Show current location (full path) |
| `ls` | List files in current folder |
| `ls -la` | List with details (sizes, dates, hidden files) |
| `ls -R` | List all files and subfolders recursively |
| `cd folder` | Navigate into a folder |
| `cd ..` | Go back one level |
| `cd ~` | Go to home directory |
| `mkdir name` | Create a new folder |
| `touch file.txt` | Create a new empty file |
| `echo "text" > file` | Write text to a file (overwrites) |
| `echo "text" >> file` | Append text to a file |
| `cat file` | Read/display file contents |
| `cp file copy` | Copy a file |
| `mv old new` | Rename or move a file |
| `rm file` | Delete a file (no undo!) |
| `open .` | Open current folder in Finder |
| `cursor .` | Open current folder in Cursor |
| `clear` | Clear the terminal screen |
| `history` | See past commands |
| `!!` | Run last command again |
| `Ctrl+R` | Search command history |

---

## Appendix C — Git Commands

| Command | What it does |
|---|---|
| `git init` | Start tracking a folder with Git |
| `git add .` | Stage ALL changes for commit |
| `git add file` | Stage a SPECIFIC file only |
| `git commit -m "message"` | Save a snapshot locally with a description |
| `git push` | Upload local commits to GitHub (makes them public) |
| `git pull` | Download latest from GitHub |
| `git status` | Check what's changed and where you are |
| `git log --oneline` | See commit history (short version) |
| `git branch` | List all local branches (* = current) |
| `git checkout -b name` | Create and switch to a new branch |
| `git checkout main` | Switch back to main branch |
| `git merge name` | Merge a branch into current branch |
| `git branch -d name` | Delete a branch |
| `git remote set-url origin URL` | Change remote URL (e.g. HTTPS → SSH) |

**Key insight:** `add` = choose what goes in the snapshot. `commit` = save the snapshot on YOUR machine. `push` = send it to GitHub. Nothing is online until you push.

---

## Appendix D — Cursor Shortcuts

| Shortcut | What it does |
|---|---|
| `Cmd+I` | Open Composer (describe what you want, AI builds it) |
| `Cmd+K` | Inline edit (select code, describe the change) |
| `Cmd+Shift+X` | Open Extensions panel |
| `Cmd+Shift+P` | Command Palette (search any action) |
| `Cmd+S` | Save current file |
| `Cmd+P` | Quick open a file by name |
| Bottom-left corner | Shows current Git branch (click to switch) |

---

## Appendix E — HTML Essentials

| Tag | What it does | Example |
|---|---|---|
| `<!DOCTYPE html>` | Tells browser this is HTML5 | Always first line |
| `<html>` | Wraps everything | Container for the whole page |
| `<head>` | Invisible settings (title, styles, meta) | Browser tab title lives here |
| `<body>` | Everything the user sees | All visible content goes here |
| `<h1>` to `<h6>` | Headings (h1 biggest, h6 smallest) | `<h1>Title</h1>` |
| `<p>` | Paragraph | `<p>Text here.</p>` |
| `<a href="url">` | Clickable link | `<a href="https://...">Click</a>` |
| `<img src="url">` | Display an image (self-closing) | `<img src="photo.jpg">` |
| `<ul>` + `<li>` | Bullet list | `<ul><li>Item</li></ul>` |
| `<ol>` + `<li>` | Numbered list | `<ol><li>First</li></ol>` |
| `<div>` | Generic container for grouping/styling | `<div class="box">...</div>` |
| `<strong>` | Bold text | `<strong>Important</strong>` |
| `<span>` | Inline container (style words within text) | `<span style="color:blue">word</span>` |
| `<style>` | CSS block (inside head) | Colors, fonts, spacing |
| `class="name"` | Labels element for CSS targeting | `<div class="highlight">` |

**Key pattern:** Most tags open and close: `<tag>content</tag>`. A few self-close: `<img>`, `<meta>`.

---

## Appendix F — CSS Essentials

| Property | What it does | Example |
|---|---|---|
| `color` | Text color | `color: #1a365d;` |
| `background-color` | Flat background color | `background-color: #f0f4f8;` |
| `background` | Background (supports gradients) | `background: linear-gradient(to bottom, #1a365d, #3182ce);` |
| `font-family` | Font choice | `font-family: Arial, sans-serif;` |
| `font-size` | Text size | `font-size: 18px;` |
| `line-height` | Space between lines of text | `line-height: 1.6;` |
| `padding` | Space INSIDE the box | `padding: 15px;` |
| `margin` | Space OUTSIDE the box | `margin: 20px 0;` |
| `max-width` | Maximum element width | `max-width: 700px;` |
| `border-bottom` | Line below an element | `border-bottom: 3px solid #3182ce;` |
| `border-radius` | Rounded corners (50% = circle) | `border-radius: 8px;` |
| `border-left` | Line on the left (accent bar) | `border-left: 4px solid #3182ce;` |
| `list-style-type` | Bullet shape in lists | `list-style-type: square;` |
| `object-fit` | How image fills its box | `object-fit: cover;` |
| `text-decoration` | Underline, strikethrough, etc. | `text-decoration: none;` |

**Selectors:**

| Selector | What it targets | Example |
|---|---|---|
| `h1` | All elements of that tag | `h1 { color: blue; }` |
| `.classname` | Elements with that class | `.highlight { padding: 15px; }` |
| `#idname` | The one element with that ID | `#main { max-width: 800px; }` |
| `a:hover` | Element in a specific state | `a:hover { text-decoration: underline; }` |

**Where CSS lives (3 ways):**
1. `<style>` in `<head>` — applies to whole page (what we use now)
2. `style="..."` inline on one element — applies to that element only
3. Separate `.css` file linked in head — professional approach for bigger projects

**Key concept:** Every HTML element is a box: content → padding → border → margin. Padding is space inside, margin is space outside.
