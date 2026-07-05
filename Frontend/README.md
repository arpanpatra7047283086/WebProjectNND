# eSmartPay - Fintech Payment Solutions Website

A modern, responsive fintech website built with Next.js 16, React 19, Tailwind CSS, and Framer Motion animations. This website showcases a comprehensive fintech platform similar to esmartpay.co.in with beautiful animations and mobile-first design.

## 🎨 Features

### Design & Responsiveness
- **Mobile-First Design**: Perfect on phones, tablets, and desktop
- **Responsive Layout**: Uses Tailwind CSS grid and flexbox for seamless responsiveness
- **Modern Aesthetic**: Blue and cyan gradient color scheme with professional styling
- **High Performance**: Optimized images and smooth animations

### Sections Included

1. **Navigation Bar**
   - Fixed header with logo and navigation links
   - Mobile menu with hamburger toggle
   - Smooth animations on hover
   - CTA (Call-to-Action) button

2. **Hero Section**
   - Animated blob backgrounds
   - Staggered text animations
   - Call-to-action buttons
   - Bouncing chevron scroll indicator

3. **Services Section**
   - 4 main services: Recharge, Bill Payment, Investments, Insurance
   - Feature cards highlighting platform benefits
   - Hover effects with smooth transitions

4. **About Section**
   - Company overview and vision
   - Core values (Customer First, Transparency, Trust)
   - Statistics showcase (500K+ users, 5X growth, etc.)
   - Interactive stat cards with scale animations

5. **Journey Section**
   - Timeline of company milestones (2018-2024)
   - Alternating left-right layout on desktop
   - Mobile-optimized vertical timeline
   - Smooth animations on scroll

6. **Solutions Section**
   - 4 business solutions cards
   - All-in-One Solution, Clean Code, 24/7 Support, Easy Integration
   - Interactive hover effects with border animation
   - CTA button

7. **Contact Form Section**
   - Fully functional contact form
   - Fields: Name, Email, Phone, City, Role Selection, Address
   - Form submission feedback
   - Responsive grid layout

8. **Footer**
   - 4-column layout with company info, services, company links, and social
   - Social media icons
   - Copyright and policy links
   - Dark background for visual separation

### Animation Features

- **Framer Motion Animations**:
  - Fade-in and scale animations on scroll
  - Staggered children animations
  - Hover effects with scale and rotation
  - Slide-in animations from sides
  - Smooth transitions throughout

- **CSS Animations**:
  - Animated blob backgrounds
  - Pulse animations
  - Custom keyframe animations
  - Smooth scroll behavior

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd eSmartPay
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The page will auto-reload on file changes (Hot Module Replacement)

## 📁 Project Structure

```
eSmartPay/
├── app/
│   ├── page.tsx              # Main page with all sections
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles and animations
├── components/
│   ├── navbar.tsx            # Navigation bar
│   ├── hero-section.tsx      # Hero section with animations
│   ├── services-section.tsx  # Services showcase
│   ├── about-section.tsx     # About and values section
│   ├── journey-section.tsx   # Timeline section
│   ├── solutions-section.tsx # Business solutions
│   ├── contact-section.tsx   # Contact form
│   └── footer.tsx            # Footer section
├── public/                   # Static assets
├── package.json              # Dependencies
└── tsconfig.json             # TypeScript config
```

## 🎨 Customization

### Colors
Edit the color theme in `app/globals.css`:
```css
:root {
  --background: #ffffff;
  --foreground: #1f2937;
  --primary: #0066ff;
  --accent: #00d9ff;
  /* ... more colors */
}
```

### Content
- Update text in each component file (e.g., `components/hero-section.tsx`)
- Modify services, values, and milestones in respective component files
- Change navigation links in `components/navbar.tsx`

### Animations
- Adjust animation timing in component files using Framer Motion props
- Modify CSS animations in `app/globals.css` under `@keyframes`
- Change animation delays and durations for staggered effects

## 📱 Responsive Breakpoints

Uses Tailwind CSS responsive prefixes:
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+

## 🔧 Technologies Used

- **Framework**: Next.js 16 with App Router
- **UI**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 12.42.2
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Geist (Google Fonts)

## 📦 Dependencies

- `next@16.2.6` - React framework
- `react@19.2.4` - UI library
- `tailwindcss@4` - Utility-first CSS
- `framer-motion@12.42.2` - Animation library
- `lucide-react@1.17.0` - Icon library

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically deploys on push
4. Your site is live!

### Alternative Deployments

- **Netlify**: Connect GitHub repo, auto-deploys
- **Heroku**: Use `npm run build` and `npm run start`
- **AWS/Google Cloud**: Use Docker or serverless options

## ✨ Features Highlights

✅ **Fully Responsive** - Mobile, tablet, and desktop  
✅ **SEO Optimized** - Metadata, proper HTML structure  
✅ **Fast Performance** - Next.js optimizations, lazy loading  
✅ **Accessible** - Semantic HTML, ARIA labels  
✅ **Smooth Animations** - Framer Motion, CSS animations  
✅ **Modern Design** - Gradient colors, clean typography  
✅ **Form Validation** - Client-side form handling  
✅ **Dark Mode Ready** - CSS variables for theming  

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is free to use and modify.

## 🤝 Support

For issues or questions:
1. Check the Next.js documentation: https://nextjs.org
2. Check Tailwind CSS: https://tailwindcss.com
3. Check Framer Motion: https://www.framer.com/motion

## 🎉 Credits

Built with modern web technologies and best practices. Inspired by esmartpay.co.in design and functionality.

---

**Happy coding! 🚀**
