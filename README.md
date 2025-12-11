# 🌌 Gemini Image Editor - Doodax.com

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-19.2.0-blue)
![Gemini API](https://img.shields.io/badge/Gemini-2.5%20Flash-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-cyan)
![Status](https://img.shields.io/badge/status-live-green)

**Gemini Image Editor** is a state-of-the-art web application hosted at [Doodax.com](https://doodax.com). Powered by Google's Gemini 2.5 Flash Image model, it allows users to upload images and perform complex edits using simple natural language prompts. 

Designed with a user-friendly interface, immersive galaxy aesthetics, and optimized for SEO, this project showcases the power of Generative AI in image manipulation.

## 🚀 Live Demo

Check out the live application here:  
<a href="https://doodax.com/tools/gemini-image-editor/index.html" target="_blank">**🚀 LIVE DEMO (doodax.com)**</a>

## ✨ Features

- **AI-Powered Editing**: Describe changes in plain English (e.g., "Add a sunset", "Make it cyberpunk").
- **High Performance**: Built with React 19 and Vite for lightning-fast interactions.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices with a glassmorphism UI.
- **SEO Optimized**: Includes full JSON-LD Schema, meta tags, and semantic HTML structure.
- **Privacy Focused**: No data is stored persistently; images are processed in real-time.

## 📁 Project Structure

```bash
/
├── components/          # Reusable React UI components
│   ├── ErrorMessage.tsx
│   ├── ImageDisplay.tsx
│   ├── ImageUpload.tsx
│   ├── LegalModals.tsx  # Pop-ups for Privacy, Terms, DMCA, etc.
│   ├── LoadingSpinner.tsx
│   └── SeoArticle.tsx   # Long-form SEO content with Schema
├── public/              # Static assets
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── services/            # API interaction logic
│   └── geminiService.ts
├── types.ts             # TypeScript definitions
├── App.tsx              # Main application layout and logic
├── index.html           # HTML entry point with SEO metadata
└── index.tsx            # React DOM entry point
```

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom CSS Animations (Starfield/Nebula)
- **AI Model**: Google Gemini 2.5 Flash Image
- **SDK**: @google/genai

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hsinidev/gemini-image-editor.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variable:
   Create a `.env` file and add your Google Gemini API key:
   ```env
   API_KEY=your_api_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

---

<div align="center">
  <p>Powered by <a href="https://github.com/hsinidev">HSINI MOHAMED</a></p>
  <p>&copy; 2024 Doodax.com</p>
</div>
