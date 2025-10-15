# Keshav Raj - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases my professional journey as a Full Stack Developer specializing in Next.js, Golang, and MongoDB.

## 🚀 Live Demo

Visit the live site: [https://keshav-raj.web.app/](https://keshav-raj.web.app/)

## ✨ Features

- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **Modern UI/UX** - Clean, professional design with smooth animations using Framer Motion
- **Dark Theme** - Eye-friendly dark theme with custom color palette
- **Dynamic Sections**:
  - Hero section with animated typing effect
  - Education timeline
  - Skills showcase with progress indicators
  - Certifications & Achievements
  - Projects portfolio with live demos and GitHub links
  - Professional experience timeline
  - Contact form with EmailJS integration
- **SEO Optimized** - Meta tags, Open Graph, and Twitter Cards for better social sharing
- **Performance Focused** - Static site generation for optimal loading speed

## 🛠️ Tech Stack

- **Framework:** Next.js 15.2.0 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Radix UI primitives
- **Animations:** Framer Motion
- **Forms:** EmailJS for contact form
- **Icons:** Lucide React
- **Deployment:** Netlify

## 📋 Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mrperfect2003/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   
   Get your EmailJS credentials from [EmailJS Dashboard](https://dashboard.emailjs.com/)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

### Deployment on Netlify

The project is configured for Netlify deployment:

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Add environment variables in Netlify dashboard
5. Deploy!

### Environment Variables for Deployment

Make sure to add these in your hosting platform:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## 📁 Project Structure

```
├── public/              # Static assets (images, resume, favicon)
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── layout.tsx  # Root layout with metadata
│   │   ├── page.tsx    # Home page
│   │   └── globals.css # Global styles
│   ├── components/     # React components
│   │   ├── ui/         # Reusable UI components (shadcn/ui)
│   │   ├── Hero.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── Images/         # Project images
│   └── lib/            # Utility functions
├── tailwind.config.ts  # Tailwind configuration
├── next.config.mjs     # Next.js configuration
└── package.json        # Dependencies

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `src/components/Hero.tsx`
2. **Education** - Update `educationItems` in `src/components/Education.tsx`
3. **Skills** - Modify `skillsData` in `src/components/Skills.tsx`
4. **Certifications** - Update `certificationsData` in `src/components/Certifications.tsx`
5. **Projects** - Edit `projectsData` in `src/components/Projects.tsx`
6. **Experience** - Update `experienceData` in `src/components/Experience.tsx`
7. **Contact Info** - Edit contact details in `src/components/Contact.tsx` and `src/components/Footer.tsx`

### Update Metadata

Edit SEO metadata in `src/app/layout.tsx`:
- Page title
- Description
- Keywords
- Open Graph tags
- Twitter Cards

### Color Theme

Modify the color scheme in `src/app/globals.css` (CSS variables) and `tailwind.config.ts`.

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔒 Security Notes

- API keys are stored in environment variables, not in code
- Contact form uses EmailJS for secure email sending
- No sensitive data is exposed to the client

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contact

- **Email:** contacttokeshavraj@gmail.com
- **LinkedIn:** [linkedin.com/in/keshavraj18](https://www.linkedin.com/in/keshavraj18/)
- **GitHub:** [github.com/mrperfect2003](https://github.com/mrperfect2003)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [EmailJS](https://www.emailjs.com/)

---

**Built with ❤️ by Keshav Raj**
