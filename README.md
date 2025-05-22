# Personal Portfolio Website

A clean, minimalist, and responsive personal portfolio website built with React, TypeScript, and Vite.

## Features

- 🎨 Modern and minimalist design
- 📱 Fully responsive for all screen sizes
- ⚡ Fast and optimized loading
- 🔤 SEO friendly with meta tags
- 🔄 Customizable content via configuration file
- ✨ Smooth animations and transitions using Framer Motion
- 📊 Section for skills, experience, and projects

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view the website in your browser.

## Customization

### Content Configuration

All content on the website can be easily customized by editing the configuration file at `src/config/portfolioConfig.ts`. This includes:

- Personal information
- Experience history
- Skills
- Projects
- Social links
- SEO metadata

### Styling

- Global styles are defined in `src/styles/global.scss`
- Variables (colors, spacing, etc.) are defined in `src/styles/variables.scss`
- Each component has its own SCSS file for component-specific styling

### Resume

Replace the placeholder file at `public/piyush_aryan_resume.pdf` with your actual resume.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` folder.

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [Sass](https://sass-lang.com/)
- [FontAwesome](https://fontawesome.com/)
- [Typed.js](https://github.com/mattboldt/typed.js/)

## License

MIT © Piyush Aryan 