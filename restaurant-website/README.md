# ChickenCraze Restaurant Website

A modern, responsive restaurant website built with React and Tailwind CSS, inspired by popular fast-food chains like KFC.

## Features

- 🍗 **Modern Design**: Clean, modern interface with a vibrant red color scheme
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🚀 **Fast Loading**: Built with Vite for optimal performance
- 🎨 **Beautiful UI**: Engaging animations and smooth transitions
- 📄 **Multiple Pages**: Home, Menu, About, and Contact pages
- 🛒 **Interactive Menu**: Categorized menu with filtering functionality
- 📍 **Location Information**: Multiple restaurant locations with details
- 📧 **Contact Form**: Functional contact form for customer inquiries

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **JavaScript (ES6+)** - Modern JavaScript features

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd restaurant-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation header with mobile menu
│   └── Footer.jsx      # Footer with links and contact info
├── pages/
│   ├── Home.jsx        # Homepage with hero section and features
│   ├── Menu.jsx        # Menu page with categories and items
│   ├── About.jsx       # About page with company story
│   └── Contact.jsx     # Contact page with form and locations
├── App.jsx             # Main app component with routing
├── main.jsx           # App entry point
└── index.css          # Tailwind CSS imports and custom styles
```

## Customization

### Colors
The brand colors are defined in `tailwind.config.js`:
- `brand-red`: #E31837 (primary brand color)
- `brand-dark`: #1A1A1A (dark text color)
- `brand-cream`: #F5F5DC (accent color)

### Content
- Update menu items in `src/pages/Menu.jsx`
- Modify company information in `src/pages/About.jsx`
- Change contact details in `src/pages/Contact.jsx`
- Update header branding in `src/components/Header.jsx`

## Features Overview

### Homepage
- Eye-catching hero section with call-to-action
- Featured menu items showcase
- Company values and benefits
- Responsive design with smooth animations

### Menu Page
- Interactive category navigation
- Detailed item descriptions with pricing
- Special offers section
- Mobile-optimized layout

### About Page
- Company history and story
- Key statistics and achievements
- Company values and mission
- Timeline of milestones

### Contact Page
- Contact form with validation
- Multiple contact methods
- Location information with details
- FAQ section

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by modern fast-food restaurant websites
- Icons and emojis used for visual appeal
- Tailwind CSS for rapid styling
- React Router for seamless navigation