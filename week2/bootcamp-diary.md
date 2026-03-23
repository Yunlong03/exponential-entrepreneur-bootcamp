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

### Day 3 (BUILD — 4h) | March 5, 2026

**Built/Completed:** Tested 3 website builders (WordPress Gutenberg, Hostinger AI Builder, Horizons). Generated Website 1 for Dragon consulting site with content brief. Defined color palette (#160D0D background, #F4EBA8 main text, #D4A843 secondary). Email capture and contact form generated from brief. Exported Horizons code for Cursor fine-tuning.

**Key concept learned:** WordPress is server-side software installed on a host's server (not your computer). Gutenberg and Elementor are editors that sit on top of WordPress — they are not WordPress itself. Hostinger AI Builder is fast but locks you in with no code access. Horizons generates actual React/Tailwind code you can export and own. Professional development workflow: AI generates initial code (Horizons or v0) → Cursor for fine-tuning → GitHub for storage and version control → hosting platform deploys from GitHub. You own the code at every step and are never locked to one tool.

**Biggest challenge:** WordPress editor frustration — CSS overrides from themes silently block your styling changes with no way to debug. Spent too long fighting the tool instead of shipping. Key lesson: when a tool fights you, drop it and find a better one.

**Tomorrow I need to:** Import Horizons code into Cursor, push to GitHub, start fine-tuning with actual code access (Day 4 LEARN + Day 5 BUILD).

**Monetization insight:** Knowing when to drop a bad tool is an entrepreneurial skill. Also: being able to spin up a quick site with Hostinger AI Builder in hours is a useful skill for future client projects when speed matters more than code ownership.

### Day 4 (LEARN — 1h) | March 6, 2026

**Built/Completed:** Imported Horizons code into Cursor and pushed to GitHub. Learned JavaScript fundamentals in browser console (variables, functions, if/else, loops). Read and decoded actual React/JSX code from Website 1 — homepage structure, contact page email capture logic, and lead magnet display.

**Key concept learned:** React pages are JavaScript functions that return HTML-like code (JSX). Tailwind CSS replaces traditional CSS rules with shorthand classes applied directly on elements (e.g., `text-4xl font-bold mb-6`). `useState` stores data that can change (like form inputs), and conditional rendering (`? :`) shows different content based on state. Helmet controls the invisible `<head>` section for SEO — page title and meta description that Google displays in search results.

**Biggest challenge:** Understanding the difference between the logic code (handleLeadSubmit function that processes the email) and the display code (JSX that shows the form or thank you message). They work together but live in different parts of the same file.

**Tomorrow I need to:** Day 5 BUILD (4h) — Git workflow practice, polish Website 1, review and document architecture, week review.

**Monetization insight:** The AI-generated code already includes a full email capture system with database storage (PocketBase), success/error handling, and a professional lead magnet flow. Understanding this code means I can customize and replicate it for future projects.

### Day 5 (BUILD — 4h) | March 8, 2026

**Built/Completed:** Practiced Git branching workflow with real code changes. Installed Node.js. Ran local dev server (`npm run dev`) and previewed Website 1 in browser and on phone. Created `.gitignore` to exclude `node_modules`. Wrote and pushed README documenting project architecture. Week 1 complete.

**Key concept learned:** The pro solo workflow: branch → edit in Cursor → Cmd+S → `npm run dev` to preview → commit → merge to main → push. Critical rule: always save files (Cmd+S) before `git add` — unsaved changes are invisible to Git and will be lost when switching branches. Always create `.gitignore` before first `npm install` to avoid tracking thousands of library files. One `.gitignore` per repo, one `npm install` per project. Also: `package.json` is the blueprint (what libraries are needed), `node_modules` is the result (the actual downloaded libraries). Never commit `node_modules` — anyone can regenerate it with `npm install`.

**Biggest challenge:** `node_modules` (455 packages) got tracked by Git and overwhelmed Cursor. Fixed with `.gitignore` and `git rm --cached`. Also lost code changes when switching branches because file wasn't saved in Cursor before committing — Git only sees saved files. Lesson: set up `.gitignore` first, install dependencies second. Always Cmd+S before git add.

**Tomorrow I need to:** Start Week 2 — try v0 + Cursor combo for Website 2, deepen CSS/JS/Tailwind understanding, start Python.

**Monetization insight:** Live website on phone in minutes with `npm run dev`. This workflow lets you demo to a potential client or investor from your phone on the spot — no deployment needed.

---

### Week 1 — Review

**Skills acquired:**
Terminal navigation and file management · Cursor IDE (Composer, Cmd+K, extensions) · Git workflow (add, commit, push, branching, merging, .gitignore) · GitHub (SSH, repo creation, pushing code) · HTML from scratch (structure, tags, semantic markup) · CSS fundamentals (selectors, box model, gradients, hover effects) · Inspect Element for reverse-engineering designs · JavaScript basics (variables, functions, if/else, console) · Reading React/JSX code (components, useState, conditional rendering) · Tailwind CSS (utility classes, responsive prefixes) · Tested 3 website builders (WordPress, Hostinger AI Builder, Horizons) · Local dev server (Node.js, npm install, npm run dev) · Mobile testing via network URL · Project documentation (README)

**Gaps for Week 2:**
JS/Tailwind/React understanding still surface level — need more hands-on practice · Haven't tried v0 + Cursor combo yet (planned for Website 2) · No experience with Python yet (scheduled for Week 2 Day 1) · Website 1 content not finalized (colors, images, text still placeholder) · Domain not connected, PocketBase not wired up · SEO only conceptual — haven't implemented beyond what AI generated

**Key Week 1 Insight:** As of March 2026, AI code generation tools mean a solo founder doesn't need to code from scratch. The real skill is directing AI tools effectively, reading the output, and fixing issues in the code. Tested three approaches: platform builders (fast but locked in), WordPress (powerful but frustrating), and code generators (Horizons → Cursor → GitHub — full ownership, full flexibility). Code generators are the proper way for any serious project. Platform builders are useful only when you need a site up the same day for a pitch. Drop tools that fight you.

---

## Week 2 — Website 2 + Coding Basics

### Day 1 (BUILD — 8h actual) | March 10, 2026

**Built/Completed:** Built `basics.py` from scratch — list of 4 Chinese robotics companies as dictionaries, loop to display them, filter function with user input. Built `reader.py` — reads `companies.txt`, strips and splits each line, prints formatted output. Built `news.py` — fetched live news headlines from NewsAPI using requests library. Built `scraper.py` — scraped 10 Chinese robotics company names from registrationchina.com using BeautifulSoup, saved to CSV. Created Python Foundations cheat sheet PDF.

**Key concepts learned:**

*Python:* A programming language — you write instructions in a `.py` file and Python executes them line by line, top to bottom. Used for automation, data processing, APIs, and AI. A single `.py` file is called a script. When it has a user interface, it's called an app.

*Data types:* A variable is a label (sticky note) you put on data — `funding = 150` means "remember 150 as funding." A string is text inside quotes — `"Unitree Robotics"` (called a string because characters are strung together like squares on a ticker tape). An integer is a whole number without quotes — `150`. A float is a decimal number — `3.14`. A boolean is True or False (a light switch) — `is_public = False`. Key trap: `"150"` with quotes is a string (text), `150` without quotes is a number. You can't do math on text.

A list `[]` is an ordered collection accessed by position number — `companies = ["Unitree", "DJI", "UBTech"]`, access with `companies[0]` gives `"Unitree"`. A dictionary `{}` is a labeled collection accessed by key name — `company = {"name": "Unitree", "sector": "Robotics"}`, access with `company["name"]` gives `"Unitree"`. After `.split(",")` you get a list — use position numbers. From an API or `{}` you get a dictionary — use key names. Same bracket `[]` reaches into both, but the address system differs: numbers for lists, quoted key names for dictionaries.

*Brackets:* `()` calls a function — "do this action" — `print("hello")`. `[]` looks up data — "get this item from inside" — `company["name"]` or `companies[0]`. `{}` creates a dictionary — `{"name": "DJI"}` — OR marks a placeholder inside an f-string — `f"Hello {name}"`. Context determines which: `f` prefix before quotes means `{}` is a placeholder, not a dictionary.

*f-strings:* The `f` before quotes is a prefix (not a function) that tells Python "fill in the `{}` blanks." Example: `name = "Unitree"` then `print(f"Company: {name}")` outputs `Company: Unitree`. More complex: `print(f"{company['name']} | {company['sector']}")` — the `()` belongs to print, the `{}` are placeholders, the `[]` look up dictionary values. Three bracket types, three different jobs, nested together.

*Functions:* `def` creates a reusable recipe. Parameters in the `def` line are placeholders — no quotes, can be named anything, but must match inside the function. Example: `def filter_company(sector):` means sector is a placeholder. If you write `company_sector` instead, use `company_sector` inside too. Parameters are born when the function runs and die when it finishes — you can't use them outside the function (NameError). `return` goes at the END after all work is done. Outside variables get "handed off" to inside parameters at the moment of the call — `filter_company(my_variable)` passes the value of `my_variable` into `sector`.

*Loops:* The loop variable (`for company in companies`) can be any name — `for banana in companies` works identically. Python doesn't interpret the name. Each trip through the loop, the variable becomes the next item, completely fresh. Modifications from the previous trip are gone (banana gets peeled, next loop it's a new unpeeled banana). Best practice: plural for the list (`companies`), singular for the loop variable (`company`). Everything indented runs once per item. Code after the loop (not indented) runs once after all items are done.

*File I/O:* I/O = Input/Output. `open("file.txt")` opens a file, `.readlines()` reads all lines into a list of strings. Each string has `\n` (invisible newline) at the end. `.strip()` removes it. `.split(",")` chops the string into a list at each comma. Example: `"Unitree,Robotics,150\n"` → after `.strip()` → `"Unitree,Robotics,150"` → after `.split(",")` → `["Unitree", "Robotics", "150"]` (a list of 3 strings).

*API & pip:* `pip install` downloads a library once to your Mac (buying a tool). `import` loads it into a specific script each time (picking it up from the shelf). `requests.get(url)` fetches data from an API. `.json()` converts the response into Python dictionaries. API data arrives pre-structured as dictionaries — no strip/split needed unlike text files. JSON is the universal format for sending structured data over the internet — looks almost identical to Python dictionaries.

*Web scraping:* BeautifulSoup reads HTML and lets you search for elements. `soup.find_all("h3")` finds all h3 headings — like automated Inspect Element. Current approach is crude (manually counting which elements to keep). Smarter targeting by CSS class or container comes later. WeChat scraping is possible via Sogou search engine or dedicated Python libraries — important for accessing Chinese company data that doesn't live on open websites.

**Biggest challenge:** Understanding brackets — `()` vs `[]` vs `{}` — and why they sometimes appear nested together in one line. Also: the naming convention where `articles`, `article`, and `data["articles"]` are three different things that look almost identical. Still not fully comfortable with either, but can read and write basic code using them.

**Tomorrow I need to:** Day 2 LEARN (1h) — JavaScript deep dive + v0 introduction. Might be quicker since JS basics and React/JSX were partially covered in Week 1.

**Monetization insight:** The data scraped today (Chinese robotics companies) is the raw material for the Deal Flow Tracker MVP. The real competitive advantage is combining API data, web scraping, and WeChat/Chinese platform data — information that's hard for westerners to access. China expertise + technical scraping tools = the moat.

### Day 2 (LEARN — 1h) | March 11, 2026

**Built/Completed:** JavaScript refresher comparing JS syntax to Python. DOM manipulation in Chrome console — changed heading text, paragraph content, colors, added list items dynamically. Generated a company card component on v0.dev. Read and analyzed the React/TypeScript code it produced. Connected concepts between Python functions and React components.

**Key concepts learned:**

*JavaScript vs Python:* JS uses `const`/`let` for variables (Python doesn't), `;` at end of lines, `{}` for code blocks instead of indentation, camelCase naming (`filterCompany`) instead of snake_case (`filter_company`). `const` = constant, variable won't be reassigned. `let` = variable might change later. Python runs in Terminal (backend). JavaScript runs in the browser (frontend).

*Static vs Dynamic:* Static = the page is fixed, what you write in HTML is what the user sees, changing anything requires editing the code manually. Dynamic = the page changes based on data, user actions, or time — JavaScript fills an HTML shell with content that can be different each time. HTML alone is static. JavaScript makes it dynamic.

*DOM manipulation:* DOM = Document Object Model, the browser's live version of your HTML. `document.getElementById("main-title")` finds an element, `.textContent` changes its text, `.style.color` changes its appearance. `addEventListener("click", function(){...})` makes things happen when users interact — `"click"` is a predefined browser event, not something you invent. HTML buttons can only navigate to pages or submit forms. JavaScript lets you do anything on click — change text, show/hide sections, filter data, send data to an API without reloading.

*Traditional vs React file structure:* Traditional web development = 3 separate files (index.html for structure, styles.css for appearance, script.js for behavior). The HTML file connects them via `<link>` and `<script>` tags. React = everything in one `.jsx`/`.tsx` file (structure, styling via Tailwind classes, and logic together). Both work. React is the modern standard. `.jsx` = JavaScript + React. `.tsx` = TypeScript + React (same thing but with type checking, e.g. `fundingAmount: number` ensures funding must be a number).

*v0.dev:* Generates React components from natural language descriptions. The output follows the same structure as Horizons exports — `components/`, `app/`, `hooks/`, `lib/`, `package.json`. The generated CompanyCard component is a function that takes parameters (name, sector, funding, city) and returns visual output — same concept as a Python function, but returns JSX instead of data.

*React components = Python functions:* Python `def filter_company(sector)` takes input and returns data. React `function CompanyCard({ name, sector })` takes input and returns visual HTML. `{name}` in React JSX is like `{name}` in Python f-strings — both are placeholders that get filled with real values. Data is passed into React components as props (parameters): `<CompanyCard name="Unitree" sector="Robotics" />` is like calling `filter_company("Robotics")` in Python.

*Loops in React vs Python:* In Python, `for company in companies:` is the loop. In React, `.map()` is the loop and the arrow function `(company) => (...)` is the instructions for each item. They work as a pair: `companies.map((company) => (<CompanyCard ... />))`. Arrow functions also exist outside of loops — they're React's general way of writing functions.

*The full-stack flow for Week 3 MVP:*
1. Python (backend) — queries data, filters, structures it as JSON
2. API (the bridge) — Python serves data at a URL like `app.com/api/companies`
3. React (frontend) — fetches that URL, receives JSON, displays it using components

Python and React run on different machines (server vs user's browser). They can't share variables directly. The API is the bridge — a URL that returns JSON data instead of a web page. When you used NewsAPI, you were the consumer. In Week 3, you become the creator of your own API. HTML cannot pull data from external files or databases — that requires JavaScript (browser) or Python (server).

**Biggest challenge:** Understanding why a JavaScript/React frontend can't just read Python variables directly — they run on different machines (server vs user's browser), so they need an API as a bridge. Also: the arrow function syntax `(company) => (...)` in React is not a loop itself — `.map()` is the loop, the arrow function is the instructions for each item. They work as a pair.

**Tomorrow I need to:** Day 3 BUILD (4h) — Build Website 2 with v0 + Cursor combo. Plan sections, write content brief, generate components with v0, assemble and fine-tune in Cursor, push to GitHub.

**Monetization insight:** v0.dev generates professional UI components in seconds from a text description. This means the bottleneck for a solo founder is no longer design or frontend code — it's knowing what to build and having the data behind it. China expertise + data pipeline (Python) + instant UI generation (v0/Horizons) = fast shipping.

### Day 3 (BUILD — 4h) | March 12, 2026

**Built/Completed:** Defined positioning for Dragon S AI after evaluating 4 options — (A) Intelligence Service, (B) Conference Bridge, (C) Analyst & Advisor, (D) Sourcing & Partnership Broker. Chose D as primary revenue model (sourcing, partnership facilitation, due diligence, success fees) with C as the content engine driving inbound leads. Wrote content brief covering 7 sections. Generated full landing page with v0.dev from detailed prompt. Installed dependencies and ran local dev server in Cursor. Customized hero section in Cursor. Pushed to GitHub as separate repository.

**Key concepts learned:**

**Positioning decision:** Two viable paths — Analyst/Advisor (Option C: content-led, builds reputation) vs Sourcing/Partnership Broker (Option D: deal-led, higher revenue per engagement). Options A (Intelligence Service) and B (Conference Bridge) were considered but deprioritized — A requires reputation first, B is service-heavy and hard to scale. Chose Option D as primary revenue model with Option C as the content engine that drives inbound leads. The rare asset: a Westerner with Chinese language, cultural access, on-the-ground presence, AND tech understanding at the advisory level (evaluating products, not building them).

**Two-direction bridge:** Revenue comes from both sides — Western companies needing Chinese robotics sourcing/partnerships, AND Chinese robotics companies needing Western-facing representation for international expansion. Website serves the Western-facing side. Chinese-facing side is relationship-based (WeChat, conferences, introductions), not website-based.

**Brand architecture:** Dragon S (general China consulting, Website 1) + Dragon S AI (robotics-focused advisory, Website 2) + Dragon Sea Ltd (registered entity). Brand and registered company name can differ — standard practice. Cross-linking via subtle footer ("A Dragon S company") doesn't dilute the specialist positioning. Separate websites because specialists command higher fees than generalists. Dragon S AI is the priority, Dragon S is the safety net.

**v0 + Cursor workflow:** v0 generates components from natural language prompts → download zip → install in Cursor with `npm install` → run local dev server with `npm run dev` → customize text, colors, and styling directly in component files. v0 is the factory (generates), Cursor is the workshop (refines). For new components, go back to v0. For text/color/layout tweaks, stay in Cursor. For major additions (pages, images, features), work in Cursor.

**Project structure:** v0 generates the same React + Tailwind structure as Horizons — `app/` for pages, `components/` for reusable pieces, `page.tsx` assembles components in order. Each section is a separate `.tsx` file. To reorder sections, move lines in `page.tsx`. To change a section's content, edit its component file. Same pattern as Website 1.

**Separate repos per project:** Each website gets its own GitHub repository for clean history, independent deployment, and professional presentation. When one repo lives inside another's folder, add it to `.gitignore` to prevent nesting conflicts.

**AI as service differentiator, not public face:** Don't create a fake AI persona — trust matters in deal-making. Brand the company, not yourself. Use AI visibly in operations (monitoring, screening, reports) as a selling point. AI is the "how" (your edge), not the "what" (your offer). On the website: "Our AI-powered monitoring tracks 200+ Chinese robotics companies" — not "we believe in the agent economy." Save vision content for LinkedIn thought leadership.

**Multi-language:** Browser auto-translate handles most cases. A proper Chinese landing page adds credibility with Chinese partners but is a future optimization, not a priority now.

**Biggest challenge:** The v0 + Cursor workflow is fast for generating a base, but knowing when to stop customizing and ship is a skill in itself. The landing page is a shell — its credibility comes from the backend tools (Deal Flow Tracker, AI monitoring) built in Weeks 3-6, not from pixel-perfect design today. The real work starts when the data pipeline exists and the site can demonstrate actual capability.

**Tomorrow I need to:** Day 4 LEARN (1h) — Tailwind CSS deep dive + responsive design. Understand how to make the site look good on mobile.

**Monetization insight:** The website doesn't need to be perfect to start generating leads. A professional-looking landing page with a clear value proposition and contact form is enough to test market interest. Send the link to 5 people in your network who work in robotics or China trade and ask "would this be useful to you?" — real market validation before building more.

### Day 4 (LEARN — 1h) | March 13, 2026

**Built/Completed:** Built `report.py` — Python script that reads `companies.csv` and generates a styled HTML report with a table of Chinese robotics companies. Tested Dragon S AI site on mobile using Chrome DevTools device mode — layout responsive across devices.

**Key concepts learned:**

**Python generating HTML:** Python can create any type of file, including HTML. The `.py` script is the chef, the `.html` output is the dish. `report.py` reads data from CSV, builds an HTML string, and writes it to `report.html`. The browser then displays the HTML. This is the same concept as Week 3's MVP — Python processes data and produces web output — just simpler.

**Triple quotes `"""`:** Python's way to write strings that span multiple lines. Regular `"..."` is for single lines. Triple quotes preserve line breaks, making them ideal for writing HTML templates inside Python scripts.

**`lines[1:]` slicing:** Skips the first item in a list (the header row). Same bracket syntax as `[:10]` (first 10 items) but starting from position 1 instead of stopping at 10.

**Mobile testing:** Chrome DevTools device mode (`Cmd+Shift+M`) simulates different phone/tablet screens. Essential check before any site goes live — what looks good on desktop can break on mobile.

**Biggest challenge:** No major blockers today. The Python-to-HTML connection clicked quickly because the concepts (file I/O, loops, f-strings) were already familiar from Day 1.

**Tomorrow I need to:** Day 5 BUILD (4h) — SEO fundamentals applied to both websites, write and publish first blog post on Website 2, set up analytics, Week 2 review.

**Monetization insight:** Generating HTML reports from data is a sellable service in itself. A Python script that scrapes Chinese robotics news weekly and produces a formatted briefing document could be the first free deliverable that demonstrates Dragon S AI's value to potential clients.

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
| WordPress.org | Open-source software | Free website software you download and install on any server you control. Full ownership, full flexibility. This is what Hostinger installs on their server for you |
| WordPress.com | Hosted platform by Automattic | Includes WordPress software but through a different, simplified interface. They handle the server. Easier but less control, charges for features that are free plugins on WordPress.org |
| Gutenberg | WordPress native editor | Built-in block editor — stack content blocks to build pages. Free, lightweight, the default going forward |
| Elementor | Third-party WordPress plugin | Drag-and-drop visual editor. More design options but creates plugin lock-in — your site breaks if you remove it |
| React | JavaScript UI library | A way to build interactive user interfaces using reusable components. What Horizons and v0 generate |
| Tailwind CSS | Utility-first CSS framework | Instead of writing CSS rules, you use shorthand classes directly in HTML like `text-gold` or `bg-dark` |
| JSX | JavaScript + HTML combined | React's syntax — write HTML-like code inside JavaScript files (.jsx) |
| PocketBase | Lightweight backend database | Stores data like captured emails. Used by Horizons for form submissions |
| useState | React state hook | Creates a variable that React watches — when it changes, the page updates automatically |
| Helmet | React SEO tool | Controls the invisible `<head>` section — sets page title and meta description for Google |
| Node.js | JavaScript runtime | Lets you run JavaScript outside the browser. Required for React development |
| npm | Node Package Manager | Downloads and manages JavaScript libraries. Comes with Node.js |
| JSON | JavaScript Object Notation | Universal format for structured data (key-value pairs). Used everywhere: config files, APIs, blockchain |
| localhost | Your own computer's address | Always points back to the machine you're on. Used for local development |
| Port | Numbered "room" on a computer | Different apps use different ports (e.g., :3000, :5173) so they don't conflict |
| .gitignore | Git exclusion file | Tells Git which files/folders to skip (like node_modules). One per repo, created once |
| Vite | Dev server and build tool | Fast local server for React projects. Auto-refreshes browser when you save code |
| Hero section | First visual block on a page | The large banner area visitors see first — headline, tagline, call-to-action. Named because it's the "star" of the page |
| Python | Programming language | Write instructions in .py files, Python executes them line by line. Used for automation, data, APIs, AI |
| pip | pip installs packages | Python's download tool for libraries. Like npm for JavaScript. `pip install requests` downloads the requests library |
| requests | Python HTTP library | Lets Python talk to the internet — fetch data from APIs, download web pages |
| BeautifulSoup | Python HTML parser | Reads HTML and lets you search for specific elements — like automated Inspect Element |
| bs4 | BeautifulSoup4 package name | The import name for BeautifulSoup. `from bs4 import BeautifulSoup` |
| CSV | Comma-Separated Values | Simple file format for tabular data. Each line is a row, commas separate columns. Opens in Excel |
| f-string | Formatted string literal | `f"Hello {name}"` — the `f` prefix tells Python to fill in `{}` placeholders with variable values |
| Variable | Label on data | `funding = 150` — a sticky note called "funding" pointing to the number 150 |
| String | Text data | Any characters in quotes: `"Unitree"`. Characters strung together like a ticker tape |
| Integer | Whole number | `150` — no quotes, no decimal. Used for math and comparisons |
| Float | Decimal number | `3.14` — a number with a decimal point |
| Boolean | True or False | `is_public = False` — a light switch, only two states. Used for decisions |
| List | Ordered collection `[]` | `["a", "b", "c"]` — accessed by position number: `list[0]`. Like a shopping list |
| Dictionary | Labeled collection `{}` | `{"name": "DJI", "city": "SZ"}` — accessed by key name: `dict["name"]`. Like an ID card |
| def | Define a function | `def my_function(input):` — creates a reusable recipe |
| return | Send result out of function | Goes at the END of a function. Hands the result back to whoever called the function |
| .strip() | Remove whitespace | Removes invisible `\n` newline and spaces from ends of a string |
| .split() | Chop string into list | `"a,b,c".split(",")` gives `["a", "b", "c"]` — splits at each separator |
| .append() | Add to end of list | `mylist.append("new")` — puts "new" at the end of the list |
| .lower() | Convert to lowercase | `"Hello".lower()` gives `"hello"` — useful for case-insensitive comparisons |
| Parse | Extract useful data | Going through a big blob of data and pulling out only what you need |
| Web scraping | Automated data extraction | A script visits a website, reads the HTML, and extracts specific data |
| Sogou WeChat | WeChat search engine | weixin.sogou.com — indexes WeChat Official Account articles on the open web. Scrapeable |
| DOM | Document Object Model | The browser's live version of your HTML. JavaScript changes the DOM to update the page without reloading |
| Static page | Fixed content | What you write in HTML is what the user sees. Changing anything requires editing the code manually |
| Dynamic page | Changing content | The page changes based on data, user actions, or time. JavaScript fills an HTML shell with live content |
| addEventListener | JS event listener | Tells the browser "when this event (click, hover, keypress) happens on this element, run this function" |
| const | JS constant variable | `const name = "Unitree"` — declares a variable that won't be reassigned. Like Python's `name = "Unitree"` |
| let | JS changeable variable | `let funding = 150` — declares a variable that might change later |
| Arrow function | JS function shorthand | `(company) => (...)` — React's way of writing a function. Often used inside `.map()` for loops |
| .map() | JS loop method | `companies.map((c) => (...))` — loops through an array and transforms each item. React's equivalent of Python's `for c in companies:` |
| Props | React component inputs | Data passed into a React component: `<CompanyCard name="Unitree" />`. Like function parameters in Python |
| .tsx | TypeScript + React file | Same as `.jsx` but with type checking (e.g., `fundingAmount: number`). v0 generates `.tsx`, Horizons generates `.jsx` |
| v0.dev | UI component generator | Vercel's tool that generates React components from natural language descriptions. Free tier available |
| Full-stack | Frontend + backend | A complete app: React frontend (what users see) + Python backend (data/logic) + API (the bridge between them) |
| Backend | Server-side code | Runs on a server. Handles data, logic, databases. Your Python scripts. Users never see this code |
| Frontend | Browser-side code | Runs in the user's browser. Handles display and interaction. Your React/HTML/CSS/JS. Users see and interact with this |

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

---

## Appendix G — React/Tailwind Project Structure (Horizons Export)

| File/Folder | What it does | Touch it? |
|---|---|---|
| `index.html` | Entry point — mostly empty, React fills it dynamically | Rarely |
| `package.json` | Lists all libraries your project depends on (shopping list of tools) | Rarely |
| `package-lock.json` | Exact versions of every library installed | Never |
| `tailwind.config.js` | Tailwind CSS configuration — custom colors, fonts, breakpoints | Sometimes |
| `postcss.config.js` | Behind-the-scenes CSS processing tool | Never |
| `components.json` | UI component library configuration | Never |
| `src/` | **Your actual site code lives here** | Yes |
| `src/App.jsx` | Main app file — connects all pages together (the front door) | Sometimes |
| `src/main.jsx` | Startup file — boots React and loads App.jsx | Never |
| `src/index.css` | Global styles — your color palette, fonts, base spacing | Yes |
| `src/pages/` | Each page as a separate file (Home, Services, About, Contact) | Yes |
| `src/components/` | Reusable pieces — navbar, footer, buttons, cards | Yes |
| `src/hooks/` | React helper functions | Not yet |
| `src/lib/` | Utility code and configurations | Not yet |

**Key insight:** For day-to-day work, you only need to care about `src/index.css` (styling), `src/pages/` (content), and `src/components/` (shared elements).
