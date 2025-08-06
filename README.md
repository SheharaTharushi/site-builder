# React UI Component Library

A modern React component library featuring templates, sections, and a site builder feature. Built with React, Tailwind CSS, and other modern web technologies.

## Features

### Site Builder

- **Template Selection**: Browse and select from multiple templates categorized by industry or use case
- **Site Customization**: Customize site name, brand color, and logo
- **Contact Information**: Add your personal details for follow-up
- **Local Storage**: Site build data is saved to browser local storage for persistence
- **Shareable Previews**: Generate shareable links that allow others to preview your customized site
- **Email Integration**: Request a build by submitting details via EmailJS

### Microsites/Templates

- **Digital Store**: Complete e-commerce template with product listings, categories, and product detail pages
- **Landing Pages**: Various landing page templates for different industries
- **Templates Library**: Browse all available components and templates

## Technical Stack

- React (with React Router for navigation)
- Tailwind CSS for styling
- Framer Motion for animations
- EmailJS for contact form submission
- Browser local storage for data persistence

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Build for Production

```bash
npm run build
# or
yarn build
```

## Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## Customization

- Modify `tailwind.config.js` to customize your design system
- Edit `src/App.jsx` to change the main application
- Add your components in the `src/components` directory

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Site Builder Flow

1. Click the "Build Site" button in the navigation
2. Select a category and template
3. Customize your site with branding information
4. Enter your contact details
5. Preview your site in the builder
6. Request a build via the "Request Build" button
7. Share your design with the generated shareable link

## Implementation Details

### Shareable Links

The site builder generates shareable links by encoding the site configuration into a base64 string in the URL:

```
/preview/{templateId}/{encodedData}
```

When someone visits this URL, the application decodes the data and renders the site with the specified customizations.

### EmailJS Integration

The site builder uses EmailJS to send build requests. Configuration:

- Service ID: service_3130q7m
- Template ID: template_7ayuiaa
