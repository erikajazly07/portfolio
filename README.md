# My Dynamic Portfolio - A Responsive, JSON-Driven Personal Website

Welcome to my personal portfolio project! This responsive website displays my skills, dynamic project list, and academic experience. It is built to separate content (data) from structure (HTML) and presentation (CSS).

## 🚀 Live Link
* Deployed Project: [click meee!](https://erikajazly07.github.io/portfolio/)

## 🛠️ Features
- **Dynamic Content Loading:** Repeatable sections (Skills, Projects, Education, and Experience) are loaded dynamically from a local `data.json` database using JavaScript's native Fetch API.
- **Responsive Layout:** Designed mobile-first, looking sleek on Mobile (~375px), Tablet (~768px), and Desktop (~1200px) viewports.
- **Cozy Aesthetics:** Styled with a harmonious "Strawberry Matcha" color theme using custom CSS variables.
- **Adaptive Navigation:** Features a responsive navigation bar that switches to an interactive hamburger menu drawer on mobile devices.

## 📂 Project Directory Structure
```text
├── assets/                  # Project screenshots and personal avatar image
├── css/
│   └── style.css            # Styling, layout grids, variables, and media queries
├── js/
│   └── app.js               # Responsive navigation toggle and API fetching logic
├── index.html               # Main page layout containing empty semantic targets
├── data.json                # JSON data serving as our frontend data source
└── README.md                # Project documentation