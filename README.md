# Siva Refractories - Industrial Boiler & Refractory Website (React.js)

Converted from the Google Stitch design specification and prototype into a modern, modular, production-ready React application powered by **Vite** and **Tailwind CSS**.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS configured with the exact design tokens from [DESIGN.md](./DESIGN.md)
- **Typography**: Google Fonts (*Plus Jakarta Sans* for bold industrial headlines, *Inter* for micro-legible technical specifications)
- **Icons**: Google Material Symbols Outlined
- **Animations**: Custom keyframes (`thermal-pulse`, `status-blink`, `float-subtle`) reflecting high-temperature industrial dynamics

---

## 📁 Project Structure

```
stitch_modern_minimal_website/
├── DESIGN.md                         # Design token system & specification
├── code.html                         # Original Stitch prototype HTML
├── screen.png                        # Reference screenshot
├── index.html                        # HTML entry point with Google Fonts & Material Symbols
├── package.json                      # Project dependencies & scripts
├── tailwind.config.js                # Custom industrial color scheme & tokens
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx                      # React DOM root mounting
    ├── App.jsx                       # Page layout orchestrator
    ├── index.css                     # Base directives, scrollbar & animation fallbacks
    ├── data/
    │   └── websiteData.js            # Structured datasets (services, materials, specs, fuels, gallery)
    └── components/
        ├── Header.jsx                # Top status bar, logo, desktop nav & mobile drawer
        ├── HeroSection.jsx           # Industrial headline, metrics & 3D boiler cutaway card
        ├── CapabilitiesStrip.jsx     # High-heat duty and contractor licensing badges
        ├── ServicesSection.jsx       # 5 turnkey core service areas + emergency shutdown card
        ├── MaterialsSection.jsx      # High-temp castables catalog & technical grade matrix
        ├── BoilerExpertiseSection.jsx# OEM boiler brands supported (Thermax, Cheema, IBL, China)
        ├── FuelsSection.jsx          # Solid boiler fuels & calorific yield comparison
        ├── ProjectGallerySection.jsx # On-site execution evidence & pipeline lagging showcase
        ├── RfqSection.jsx            # Lalit Kumar technical desk & interactive RFQ form
        ├── EmergencyCallBar.jsx      # Sticky 24/7 breakdown call button
        └── Footer.jsx                # Full corporate footer & legal links
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
Optimized assets will be output to the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```
