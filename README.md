# Restaurant Website Demo

## Project Overview

Luma & Ember is a modern restaurant website demo built to present a premium local business website experience. It is designed for restaurants, cafes, bars, bistros, private dining spaces, and neighborhood hospitality brands that need a polished online presence with strong visuals and clear booking calls to action.

## Portfolio Purpose

This project is intended for Fiverr, Upwork, Taobao, and personal portfolio listings. It shows how a real restaurant website can communicate atmosphere, menu quality, reservation flow, opening hours, contact details, customer trust, and local business credibility in one responsive landing page.

## Features

- Premium black, gold, cream, and warm neutral visual direction
- Full-screen hero section with clear Book a Table and View Menu CTAs
- Brand story section for restaurant positioning
- Menu sections for Appetizers, Main Dishes, Desserts, and Drinks
- Mobile-friendly reservation form UI
- Gallery section with restaurant environment and food photography
- Customer review cards for trust-building
- Contact details, opening hours, and map placeholder
- Responsive layout optimized for desktop, tablet, and mobile
- Netlify-ready configuration

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Lucide React icons
- Netlify Next.js plugin

## Screenshot Placeholder

Add a production screenshot here after deployment:

```md
![Restaurant website homepage screenshot](./screenshot.png)
```

## Netlify-Ready Notes

The project includes `netlify.toml` with the required build command and publish directory for a Next.js deployment.

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

To deploy, connect the GitHub repository in Netlify and keep the default build command:

```bash
npm run build
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```
