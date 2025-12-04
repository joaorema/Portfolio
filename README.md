<div align="center">

⚡ João Rema | Developer Portfolio

<!-- BADGES - These make the repo look professional immediately -->

<p>
<img src="https://www.google.com/search?q=https://img.shields.io/badge/React-20232A%3Fstyle%3Dfor-the-badge%26logo%3Dreact%26logoColor%3D61DAFB" alt="React" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/TypeScript-007ACC%3Fstyle%3Dfor-the-badge%26logo%3Dtypescript%26logoColor%3Dwhite" alt="TypeScript" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Tailwind_CSS-38B2AC%3Fstyle%3Dfor-the-badge%26logo%3Dtailwind-css%26logoColor%3Dwhite" alt="Tailwind CSS" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Vite-B73BFE%3Fstyle%3Dfor-the-badge%26logo%3Dvite%26logoColor%3DFFD62E" alt="Vite" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Docker-2496ED%3Fstyle%3Dfor-the-badge%26logo%3Ddocker%26logoColor%3Dwhite" alt="Docker" />
</p>

<!-- SCREENSHOT PLACEHOLDER -->

<!-- Upload a screenshot to an 'assets' folder or use a hosted link -->

<br />
<img src="./public/preview-screenshot.png" alt="Portfolio Preview" width="100%" style="border-radius: 10px; box-shadow: 0px 4px 20px rgba(0,0,0,0.1);" />
<br />

</div>

<br />

📖 About The Project

This portfolio serves as a central hub for my work, experience, and technical writing. It was built to demonstrate clean architecture, component reusability, and responsive design principles.

Unlike standard templates, this project implements a Dockerized development environment to ensure consistency across different machines and deployments.

✨ Key Features

📱 Mobile-First Design: Fully responsive layouts using Tailwind's utility classes.

⚡ Blazing Fast: Powered by Vite for instant HMR (Hot Module Replacement) and optimized builds.

🛡️ Type Safety: Written in TypeScript to catch errors at compile time.

🐳 Containerized: Includes a Dockerfile and docker-compose for consistent deployment.

🎨 Interactive UI: Smooth animations using Framer Motion and CSS transitions.

🛠️ Tech Stack

Tech

Usage

React

Component-based UI architecture

TypeScript

Static typing for scalable code

Tailwind CSS

Utility-first styling for rapid development

Vite

Next-generation frontend tooling

Framer Motion

Production-ready animation library

Docker

Containerization for consistent environments

🚀 Getting Started

You can run this project locally using npm or Docker.

Option A: Standard (Node.js)

Clone the repository

git clone [https://github.com/joaorema/portfolio.git](https://github.com/joaorema/portfolio.git)
cd portfolio


Install dependencies

npm install


Run the dev server

npm run dev


Option B: Docker (Recommended) 🐳
(if needed use sudo before the cmds for permissons)

This project is fully dockerized to ensure it runs exactly the same on your machine as it does on mine.

Build the image

npm run docker:build 
npm run docker:up 


Run the container (dev mode)
npm run docker:dev



📂 Project Structure

A quick look at the top-level files and directories you'll see in this project.

.
├── public/              # Static assets (images, CV, icons)
├── src/
│   ├── components/      # Reusable UI components (Buttons, Cards)
│   ├── pages/           # Page layouts
│   ├── assets/          # Dynamic assets imported in components
│   └── App.tsx          # Main entry point
├── Dockerfile           # Docker configuration
├── tailwind.config.js   # Tailwind customization
└── tsconfig.json        # TypeScript configuration


📬 Contact

João Rema Software Developer & Problem Solver

<div align="center">
<sub>Built with ❤️ and ☕ in Porto.</sub>
</div>
