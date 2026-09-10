# Smart AR Measure

> An Android AR measurement application — point your camera, tap twice, get the distance.

[![Build](https://img.shields.io/badge/build-passing-brightgreen)](#development)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](#apk-download)
[![Platform](https://img.shields.io/badge/platform-Android-green)](#apk-download)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](#)

---

## Overview

**Smart AR Measure** is an Android application that uses Augmented Reality to measure real-world distances directly through your smartphone camera. No physical tape measure, no complicated tools — just point, tap, and instantly see the result overlaid on the real world.

This repository contains the **official product website** for Smart AR Measure, built with React, TypeScript, and Vite.

---

## Features

- 📏 **Real-Time AR Tracking** — Anchors measurement points to real-world surfaces with high precision
- 📐 **AR Distance Measurement** — Measure the exact distance between any two points by tapping your screen
- ⚡ **Fast Results** — Instant measurements, no manual calibration required
- 🎯 **Clean Interface** — Minimal, unobtrusive UI designed for clarity
- 📱 **Android Native** — Built for Android devices with ARCore support

---

## Technology Stack

### Website
| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI framework |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Vite 8](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS v3](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion](https://framer.com/motion) | Animations |
| [Lucide React](https://lucide.dev) | Icon library |

### Android App
- Android SDK
- ARCore (Google AR)
- Java / Kotlin

---

## How It Works

1. **Point your camera** — Open the app and scan the environment to detect surfaces via ARCore
2. **Place points** — Tap to place a start point, then move to place an end point
3. **Get result** — The precise distance is displayed instantly as an AR overlay

---

## APK Download

The latest release APK is available on GitHub Releases:

**[⬇ Download SmartARMeasure-v1.0.0.apk](https://github.com/alenkr424-eng/AR-Tape-Measure/releases/download/v1.0.0/SmartARMeasure-v1.0.0.apk)**

> **Note:** Installation requires enabling "Install from unknown sources" in your Android device settings since the APK is distributed outside the Google Play Store.

---

## Installation (APK)

1. Download the APK from the link above
2. On your Android device, open **Settings → Security** (or **Settings → Apps → Special App Access**)
3. Enable **"Install unknown apps"** for your browser or file manager
4. Open the downloaded APK file and tap **Install**
5. Launch **Smart AR Measure** and grant camera permissions

---

## Development

### Prerequisites

- [Node.js](https://nodejs.org) v18 or later
- npm v9 or later

### Setup

```bash
# Clone the repository
git clone https://github.com/alenkr424-eng/AR-Tape-Measure.git
cd smart-ar-measure

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server runs at `http://localhost:5173` by default.

---

## Build

```bash
# Production build
npm run build

# Preview the production build locally
npm run preview
```

Build output is placed in the `dist/` directory.

---

## Deployment

The website is configured for deployment on **Vercel** (recommended) or **GitHub Pages**.

### Vercel (Recommended)

1. Push the repository to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel auto-detects Vite — no manual configuration needed
4. Click **Deploy**

A `vercel.json` configuration file is included for proper SPA routing.

### GitHub Pages

For GitHub Pages, update `vite.config.ts` to set the correct `base` path:

```ts
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

---

## Project Structure

```
smart-ar-measure/
├── public/
│   ├── favicon.svg          # Site favicon
│   ├── app-home-screen.jpg  # App hero screenshot
│   ├── app-screenshot.jpg   # App showcase screenshot
│   └── robots.txt           # SEO robots file
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky navigation bar
│   │   ├── Hero.tsx          # Landing hero section
│   │   ├── ValueStrip.tsx    # Feature highlights strip
│   │   ├── About.tsx         # About section
│   │   ├── Features.tsx      # Feature cards grid
│   │   ├── HowItWorks.tsx    # Step-by-step section
│   │   ├── AppShowcase.tsx   # Screenshot showcase
│   │   ├── UseCases.tsx      # Use case cards
│   │   ├── Experience.tsx    # Experience section
│   │   ├── DownloadCTA.tsx   # Download call-to-action
│   │   └── Footer.tsx        # Site footer
│   ├── App.tsx               # Root component
│   ├── main.tsx              # React entry point
│   └── index.css             # Global styles & Tailwind
├── index.html                # HTML entry point with SEO meta
├── tailwind.config.js        # Tailwind theme configuration
├── vite.config.ts            # Vite build configuration
├── vercel.json               # Vercel deployment config
└── package.json
```

---

## Future Improvements

- [ ] Google Play Store listing
- [ ] In-app measurement history with export
- [ ] Support for area and volume measurements
- [ ] iOS version
- [ ] Multi-language support

---

## License

MIT License — feel free to use this project for reference or learning.

---

*Built by [Alen K R](https://github.com/alenkr424-eng)*
