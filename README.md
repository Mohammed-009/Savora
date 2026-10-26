# SAVORA — Fine Dining & Restaurant Website

**SAVORA** is a modern, elegant restaurant website designed to showcase a refined dining experience through beautiful food photography, a curated menu, restaurant information, and a visually engaging gallery.

The website is built with React and Vite, styled using Bootstrap 5 and custom CSS, and deployed on Vercel.

## 🌐 Live Website
**Visit SAVORA:** [https://savora-restaurant-vert-eta.vercel.app/](https://savora-restaurant-vert-eta.vercel.app/)

## ✨ Features
- **Responsive Design** — Adapts to mobile phones, tablets, and desktop screens.
- **Home Page** — Introduces the SAVORA brand and dining experience.
- **Menu Page** — Showcases starters, main courses, desserts, and drinks using categorized menu cards.
- **About Page** — Presents the restaurant's story and philosophy.
- **Gallery Page** — Displays restaurant interiors, culinary creations, chefs, and dining experiences, with subtle hover animations.
- **Contact Page** — Provides a dedicated page for restaurant enquiries and contact information.
- **Interactive Navigation** — Uses React Router for navigation between pages.
- **Hover Animations** — Includes subtle image zoom effects and text overlays.
- **SEO Optimization** — Includes page-specific titles, meta descriptions, canonical URLs, and Open Graph metadata.
- **Technical SEO** — Includes `robots.txt` and `sitemap.xml` to support search-engine crawling and URL discovery.
- **Deployment** — Hosted on Vercel.

## 🛠️ Technologies Used
| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| Vite | Development server and production build |
| React Router | Client-side page routing |
| Bootstrap 5 | Responsive grid and layout utilities |
| Custom CSS | Styling, colors, typography, and animations |
| Bootstrap Icons | Interface icons |
| React Helmet Async | Page metadata and SEO |
| Git and GitHub | Version control and source-code hosting |
| Vercel | Website deployment and hosting |

## 📄 Website Pages
The website contains the following routes:

| Page | Route |
|---|---|
| Home | `/` |
| Menu | `/menu` |
| About | `/about` |
| Gallery | `/gallery` |
| Contact | `/contact` |

## Design System
SAVORA uses a refined visual identity inspired by contemporary fine dining.

### Color Palette

- **Ivory:** `#F8F6F0`
- **Cream:** `#EEE9DF`
- **Charcoal:** `#252722`
- **Olive:** `#626B4F`
- **Gold:** `#B89B63`
- **White:** `#FFFFFF`
- **Muted Gray:** `#77776F`

### Typography
- **Cormorant Garamond** — Elegant headings and editorial-style typography.
- **DM Sans** — Clean, modern body text and interface elements.

The design combines generous spacing, sophisticated typography, food imagery, and restrained animations to create an upscale restaurant experience.

## 🚀 Getting Started
Follow these instructions to run the project locally.
### Prerequisites
Install the following on your computer:
- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js
- [Git](https://git-scm.com/) (optional, for cloning the repository)

### 1. Clone the Repository
git clone https://github.com/Mohammed-009/Savora.git

### 2. Navigate to the Project Directory
cd Savora

### 3. Install Dependencies
npm install

### 4. Start the Development Server
npm run dev
Open the local URL displayed in your terminal, usually `http://localhost:5173/`.

## 🔍 SEO Configuration
SAVORA includes foundational SEO features to help search engines understand and discover the website.

### Page Metadata
The reusable SEO component manages page-specific titles, descriptions, canonical URLs, and Open Graph metadata.

### Sitemap
The sitemap is located at:
`/sitemap.xml`
It lists the website's main public routes.

### Robots File
The robots file is located at:
`/robots.txt`
It provides crawler instructions and references the sitemap.

### Google Search Console
Google Search Console can be used to verify website ownership, submit the sitemap, inspect URLs, monitor indexing, and review search performance.

## ☁️ Deployment
SAVORA is deployed using [Vercel](https://vercel.com/).
The project can be connected to a GitHub repository so that updates pushed to the configured branch trigger new deployments.

### React Router Configuration
The project uses React Router with `BrowserRouter`. A `vercel.json` rewrite configuration can direct application routes to `index.html`, allowing the client-side router to handle direct navigation and page refreshes.

## 📁 Important Project Files
Savora/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   ├── pages/
│   ├── SEO.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md


## 🔮 Future Improvements
Potential enhancements include:

- Custom domain integration.
- Restaurant structured data for search engines.
- Further image optimization and performance improvements.
- Accessibility improvements and keyboard-navigation testing.
- Online table reservations.
- Contact form integration.
- Analytics and search-performance monitoring.

## 👨‍💻 Author
**SAVORA Restaurant Website**
Developed using React, Vite, Bootstrap 5, and custom CSS.

## 📜 License
No license has been specified for this project yet. Add a `LICENSE` file if you intend to distribute the source code under a particular open-source license.

*Experience the art of dining with SAVORA.*
