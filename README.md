# New Heights Builders — Official Website

> **Premium Residential Construction Company Website**  
> Tailored for **GitHub Pages** deployment with pure HTML5, CSS3, and Vanilla JavaScript.  
> Zero build tools, zero dependencies, zero runtime required.

---

## 📌 Project Overview

This website is designed for **New Heights Builders**, a residential construction company based in **Narasimhanaickenpalayam, Coimbatore, Tamil Nadu**.

- **Phone:** +91 86107 06708
- **Address:** T2, 5th St, Thendral Nagar, Narasimhanaickenpalayam, Tamil Nadu 641031, India
- **Rating:** 5.0 out of 5 (54 Google reviews)
- **Confirmed Services:**
  1. Building Construction
  2. Residential Construction
  3. Interior Structural Repairs
  4. Demolition
  5. Accessory Building Construction
  6. Concrete Construction
  7. Concrete Work
  8. Construction Management
  9. Construction Site Excavation

---

## 🚀 Step-by-Step GitHub Pages Deployment Guide (For Beginners)

GitHub Pages serves static websites directly from a GitHub repository for free. Follow these simple steps to put your website live on the internet:

### 1. Create a GitHub Repository
1. Log into your account on [GitHub.com](https://github.com/).
2. In the top-right corner, click the **`+`** icon and select **New repository**.
3. Name your repository (e.g., `new-heights-builders`).
4. Set the repository visibility to **Public** (GitHub Pages is free for public repositories).
5. Leave "Add a README file" unchecked (we already have this README).
6. Click **Create repository**.

### 2. Upload the Project Files
You can upload the files using Git on your computer or directly through GitHub's web interface:

#### Option A: Using the Terminal / Git (Recommended)
Open your terminal in this project folder and run:
```bash
git init
git add .
git commit -m "Initial release of New Heights Builders website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/new-heights-builders.git
git push -u origin main
```
*(Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username).*

#### Option B: Uploading via GitHub Website
1. On your new empty repository page, click **"uploading an existing file"**.
2. Drag and drop all the files and folders (`index.html`, `assets/`, `css/`, `js/`, etc.).
3. Click **Commit changes**.

### 3. Enable GitHub Pages
1. On your repository page, click the **Settings** tab (gear icon at the top).
2. On the left sidebar menu, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - Source: Select **Deploy from a branch**.
   - Branch: Choose **`main`** branch and leave the folder as **`/ (root)`**.
4. Click **Save**.

### 4. Find Your Published Website URL
1. Wait approximately 1 to 2 minutes for GitHub to publish the site.
2. Refresh the **Settings > Pages** page.
3. At the top of the page, a green banner will appear saying:  
   **"Your site is live at https://YOUR_GITHUB_USERNAME.github.io/new-heights-builders/"**
4. Click the link to open your live website!

---

## 🛠️ How to Maintain and Customize the Website

### 1. Updating Company Contact Details & Links
All business details are centralized in one file:  
👉 **`js/config.js`**

Open `js/config.js` to change:
- Phone number display & dial links
- Office address
- Google rating score and review count
- Google Maps directions link
- Google Business Profile URL
- WhatsApp phone number and default message

Whenever you update this file, the changes automatically apply across the header, footer, contact cards, and forms on all pages!

### 2. Updating Project Photographs
To replace or add project photos:
1. Save your photograph inside the `assets/images/` folder (preferably in `.webp` or `.jpg` format, compressed for web speed).
2. Open **`js/projects.js`**.
3. Locate the `PROJECTS` list and edit or add an entry:
   ```javascript
   {
     id: "project-06",
     title: "Your Project Name",
     category: "residential", // 'residential' or 'concrete'
     categoryLabel: "Residential Construction",
     isVerifiedReal: true,
     badge: "Completed Project",
     location: "Coimbatore Region",
     imageWebp: "assets/images/your-photo.webp",
     imageJpg: "assets/images/your-photo.jpg",
     alt: "Descriptive description of the building",
     description: "Summary of what was built...",
     details: [
       { label: "Type", value: "Custom Villa" },
       { label: "Scope", value: "Turnkey Civil Construction" },
       { label: "Location", value: "Coimbatore" },
       { label: "Execution", value: "New Heights Builders" }
     ]
   }
   ```
4. Commit and push the changes to GitHub.

### 3. Direct Client Communication (Phone & WhatsApp)
To eliminate friction and ensure fast responses, client inquiries are routed directly through:
- **Direct Phone Calls**: Click-to-call links connecting immediately to `+91 86107 06708`.
- **Direct WhatsApp Messaging**: Pre-formatted chat links opening WhatsApp directly to discuss project requirements, receive plot photos, and share sketches.
- **Office Visits & Directions**: Verified Google Maps routing to the office in Narasimhanaickenpalayam.

### 4. Updating the Sitemap (`sitemap.xml`)
Before promoting the site on Google Search Console:
1. Open `sitemap.xml`.
2. Replace `https://USERNAME.github.io/REPOSITORY/` with your actual live URL (e.g. `https://yourusername.github.io/new-heights-builders/`).
3. Save and commit the file.

### 5. Connecting a Custom Domain (e.g., `www.newheightsbuilders.in`)
If you purchase a custom domain in the future:
1. Go to your GitHub repository **Settings > Pages**.
2. Scroll to **Custom domain**.
3. Type your domain name (e.g., `www.newheightsbuilders.in`) and click **Save**.
4. In your domain registrar (GoDaddy, Namecheap, Google Domains):
   - Add a `CNAME` record pointing `www` to `YOUR_GITHUB_USERNAME.github.io`.
   - Add `A` records pointing your root domain to GitHub's IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
5. Check **Enforce HTTPS** in GitHub Pages settings.

---

## 📁 Repository Structure

```
new-heights-builders/
│
├── index.html                  # Homepage (All sections A - L)
├── about.html                  # About Us & Construction Philosophy
├── services.html               # 9 Confirmed Services with Technical Scopes
├── projects.html               # Interactive Filterable Project Portfolio
├── process.html                # 6-Stage Construction Process
├── contact.html                # Direct Contact, Phone, WhatsApp & Office Directions
├── privacy.html                # Privacy Policy
├── terms.html                  # Terms & Conditions
├── 404.html                    # Custom 404 Error Page
├── sitemap.xml                 # XML Sitemap for Search Engines
├── robots.txt                  # Robots Crawler Permissions
├── README.md                   # Beginner's Deployment & Maintenance Guide
│
├── assets/
│   ├── icons/
│   │   └── favicon.svg         # Crisp Brand Emblem SVG
│   └── images/
│       ├── hero-house.webp     # Optimized Hero Image (WebP)
│       ├── hero-house.jpg      # Hero Fallback (JPEG)
│       ├── about-house.webp    # About Section Photo (WebP)
│       ├── about-house.jpg     # About Section Fallback (JPEG)
│       ├── project-01.webp     # Real Project 1: Hillside Residence
│       ├── project-02.webp     # Real Project 2: Contemporary Single-Floor
│       ├── project-03.webp     # Real Project 3: Two-Tier Duplex Home
│       ├── project-04.webp     # Real Project 4: Villa with Timber Gate
│       ├── project-05.webp     # Real Project 5: Villa with Pergola
│       ├── project-concrete.webp # RCC Concrete Framework Showcase
│       └── og-image.jpg        # 1200x630 Social Share Open Graph Card
│
├── css/
│   ├── styles.css              # Master Design System & Architectural Styling
│   └── responsive.css          # Breakpoints (320px, 768px, 1024px, 1440px)
│
└── js/
    ├── config.js               # Centralized Business Settings
    ├── main.js                 # Navigation, Accordion & Dynamic Sync
    └── projects.js             # Project Data & Vanilla JS Filter Controller
```

---

## ⚡ Performance & Standards Compliance
- **Total Storage:** ~2.3 MB (under 0.3% of GitHub Pages' 1 GB limit)
- **Zero build steps:** Direct static publishing
- **Strictly Relative Paths:** Works in root or repository sub-paths (`https://user.github.io/repo/`)
- **Accessibility:** Semantic HTML5, WCAG 2.2 AA compliant focus states, accessible accordions, reduced motion queries, and skip links.
