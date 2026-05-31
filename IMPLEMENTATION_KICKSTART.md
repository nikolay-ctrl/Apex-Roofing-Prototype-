# Apex Roofing - Implementation Kickstart Plan

## Project Overview
Multi-page responsive landing site for a premium roofing company with emphasis on conversions, animations, and professional aesthetic. Target: 400-600 lines per page (excluding imports/setup).

---

## 1. Architecture & Tech Stack

### Core Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Typography**: Geist font family (sans-serif primary)
- **Icons**: Lucide React (20-24px sizing)
- **Images**: Placeholder images (via GenerateImage tool)
- **Animations**: Tailwind animations + Framer Motion (if needed for advanced effects)
- **Responsive**: Mobile-first with tablet/desktop breakpoints

### Multi-Page Structure
```
app/
├── layout.tsx (root layout with Geist font, global styles)
├── page.tsx (homepage / landing)
├── services/
│   └── page.tsx (services detail page)
├── about/
│   └── page.tsx (about company page)
├── contact/
│   └── page.tsx (contact form page)
└── not-found.tsx (404 fallback)
```

---

## 2. Design System

### Color Palette (Strict: 3-5 colors max)
- **Primary Brand**: Amber-500 (`#f59e0b`) - main CTAs, accents, highlights
- **Dark Text**: Slate-900 (`#0f172a`) - body text, headings
- **Light Background**: Slate-50 (`#f8fafc`) - page backgrounds
- **Dark Background**: Slate-950 (`#020617`) - dark sections, contrast
- **Neutral**: White/Slate-100 (`#ffffff`/`#f1f5f9`) - cards, containers

**Consistency Rule**: Amber accent applied to:
- All primary CTA buttons
- Section headers/highlights
- Form focus states
- Hover effects on interactive elements
- Icon accents

### Typography
- **Primary Font**: Geist (var-font, sans-serif) - all text
- **Heading Hierarchy**: 
  - H1: `text-4xl md:text-5xl font-bold text-slate-900`
  - H2: `text-3xl md:text-4xl font-bold text-slate-900`
  - H3: `text-xl md:text-2xl font-semibold text-slate-900`
- **Body**: `text-base md:text-lg leading-relaxed text-slate-700`
- **Small/Meta**: `text-sm text-slate-600`

### Spacing & Layout
- **Grid**: Flexbox for most layouts; CSS Grid only for complex 2D layouts
- **Padding**: `px-4 md:px-8 lg:px-12` (container padding)
- **Gap**: `gap-6 md:gap-8` (section spacing)
- **Full Width**: No max-width containers (except content readability limits on text-heavy sections)

---

## 3. Page Structure & Components

### Shared Components (Reusable)
1. **Navigation** (`components/Navigation.tsx`)
   - Desktop: Horizontal nav with links
   - Mobile: Hamburger menu (Lucide Menu icon)
   - Sticky header with shadow on scroll
   - Links: Home, Services, About, Contact
   - Smooth transitions

2. **Footer** (`components/Footer.tsx`)
   - Company info, quick links, contact CTA
   - Dark background (slate-950)
   - Placeholder map simulation (visual container only)
   - Smooth scroll-to-top button (↑ icon)

3. **Button Component** (extend shadcn Button)
   - Primary: Amber bg, hover scale + shadow
   - Secondary: Outlined with amber border
   - All CTAs consistent styling

4. **Section Wrapper** (`components/SectionWrapper.tsx`)
   - Consistent padding, responsive grid layout
   - Optional background color alternation
   - Accessibility: semantic HTML (section, article tags)

### Page-Specific Layouts

#### Homepage (`app/page.tsx`)
**Sections** (top to bottom):
1. Hero - full width, CTA button
2. Features - 3-column grid (1-col mobile)
3. Why Choose Us - alternating text/image layout
4. Testimonials - carousel or grid (3 cards)
5. CTA Section - final conversion push (link to contact page)

**Animations**:
- Hero: fade-in + subtle slide-up on load
- Feature cards: hover scale, shadow lift
- Section headers: fade-in on scroll

#### Services Page (`app/services/page.tsx`)
**Sections**:
1. Header - "Our Services" title + subtitle
2. Service Cards - grid layout (2 cols mobile, 3 cols desktop)
   - Icon, title, description, "Learn More" link
3. Process Section - 4-step timeline (vertical on mobile)
4. CTA - "Schedule Your Free Inspection" (links to contact)

**Animations**:
- Cards: staggered fade-in on scroll
- Icons: subtle bounce on hover
- Timeline: progressive reveal on scroll

#### About Page (`app/about/page.tsx`)
**Sections**:
1. Header - "About Apex Roofing"
2. Company Story - text + placeholder image side-by-side
3. Team/Values - grid of value cards (3 cols)
4. Stats Section - 4 KPI metrics (grid layout)
5. CTA - "Partner With Us" (links to contact)

**Animations**:
- Image: fade-in + parallax scroll effect (subtle)
- Stats: count-up animation on scroll visibility
- Cards: hover lift effect

#### Contact Page (`app/contact/page.tsx`)
**Sections**:
1. Header - "Get Your Free Inspection Today"
2. Contact Form (3-step multi-step)
   - Step 1: Service type selection (radio buttons or select)
   - Step 2: Location/ZIP code (text input, shows mockable availability)
   - Step 3: Contact info (name, email, phone)
   - Submit button (disabled until all fields valid)
3. Contact Info Cards - phone, email, address
4. FAQ Section (collapsible accordions)

**Animations**:
- Form steps: slide-in transition between steps
- Button: loading state spinner (hover effect)
- Success message: toast notification

---

## 4. Responsive Strategy

### Breakpoints (Tailwind defaults)
- Mobile: `0px` (default)
- Tablet: `768px` (md:)
- Desktop: `1024px` (lg:) and above

### Key Responsive Patterns
- **Navigation**: Hamburger menu on mobile (md: hidden), horizontal nav on md+
- **Grids**: 1-col mobile, 2-col tablet, 3-col desktop
- **Images**: Aspect ratios preserved, resize with `object-cover`
- **Typography**: Scale headings with responsive text sizes (`text-2xl md:text-3xl lg:text-4xl`)
- **Padding/Margins**: Adjust with responsive spacing (`px-4 md:px-8 lg:px-12`)

---

## 5. SEO & Metadata Structure

### Layout.tsx (Root)
```
- title: "Apex Roofing - Premium Roofing Services"
- description: "Expert roofing services with 30-mile local coverage. Free inspections, same-day quotes."
- viewport: "width=device-width, initial-scale=1.0"
- themeColor: "#f59e0b" (Amber)
- canonicalURL patterns for multi-page consistency
```

### Page-Level Metadata
- **Home**: Focus on hero keywords (roofing, local, fast service)
- **Services**: Service-specific keywords (roof repair, installation, etc.)
- **About**: Brand trust keywords (experience, certified, local)
- **Contact**: CTA-focused (free inspection, quote, etc.)

### Semantic HTML
- Use `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` tags
- Proper heading hierarchy (H1 once per page)
- Image alt text (all images required)
- ARIA labels for interactive elements (burger menu, form inputs)

---

## 6. Animations & Effects (Premium Feel)

### Global Animations
- **Fade In**: Elements fade-in on page load/scroll (opacity 0→1, duration 600ms)
- **Slide Up**: Headings/cards slide-up + fade-in (transform translateY 20px → 0)
- **Hover Scale**: Interactive elements scale 1.05 on hover (transition 300ms)
- **Hover Shadow**: Cards lift with shadow on hover (box-shadow expand)
- **Smooth Scroll**: All anchor links scroll smoothly (`scroll-behavior: smooth`)

### Page-Specific Effects
- **Hero Section**: Parallax effect on scroll (image moves slower than content)
- **Feature Cards**: Staggered entrance animation (delay each card by 100ms)
- **Testimonial Cards**: Gentle rotation + scale on hover (1-2° rotation)
- **Form Steps**: Slide transition between steps (slide-in from right)
- **Back-to-Top Button**: Fade-in/out based on scroll position (appears at 300px scroll)

### Performance Considerations
- Use Tailwind transitions (`transition-all duration-300`)
- Avoid heavy animations on mobile (reduce motion preferences with `prefers-reduced-motion`)
- Lazy-load images with `loading="lazy"` attribute
- Debounce scroll listeners for performance

---

## 7. Functional Features & Interactions

### Navigation & Routing
- Smooth navigation between pages (Next.js Link component)
- Active link highlighting (underline or color change for current page)
- Hamburger menu: toggle open/close on mobile, auto-close on link click
- Back-to-top button: smooth scroll to top, fades in after 300px scroll

### Contact Form (Step-by-Step)
**Step 1: Service Type**
- Radio button group: "Repair", "Installation", "Inspection", "Other"
- Validation: must select one
- Show mockable message: "Great! We service your area."

**Step 2: ZIP Code**
- Text input, number-only
- Button: "Check Availability"
- Mock response: "✓ Available next day at 2:00 PM" or "Typical service: 3-5 days"
- Validation: must enter 5-digit ZIP

**Step 3: Contact Info**
- Name input (required)
- Email input (required, email format validation)
- Phone input (optional, formatted as (XXX) XXX-XXXX)
- Submit button: "Schedule Free Inspection"
- Success state: confirmation message, disable form

### Interactive Elements
- CTA buttons: primary amber color, hover scale + shadow
- Form inputs: focus state with amber border + subtle glow
- Burger menu: smooth open/close animation, overlay on mobile
- Accordion (FAQ): smooth height expansion/collapse
- Testimonial carousel (if used): prev/next buttons with smooth transitions

---

## 8. Code Organization & Constraints

### File Structure
```
components/
├── Navigation.tsx (~80 lines)
├── Footer.tsx (~70 lines)
├── SectionWrapper.tsx (~50 lines)
├── BackToTop.tsx (~40 lines)
├── ContactForm.tsx (~150 lines - multi-step form)
└── ui/ (shadcn components)

app/
├── layout.tsx (~60 lines - Geist font setup)
├── page.tsx (~500 lines - homepage sections)
├── services/page.tsx (~500 lines)
├── about/page.tsx (~500 lines)
├── contact/page.tsx (~500 lines)
└── globals.css (Tailwind base + Geist font vars)
```

### Line Count Strategy
- **Per-page target**: 400-600 lines (including JSX structure)
- **Achieved via**:
  - Reusable components (Navigation, Footer, SectionWrapper)
  - Consistent styling patterns (Tailwind classes)
  - Minimal conditional logic (no complex branching)
  - Avoid large data arrays (use mock data as needed)

### Code Quality Standards
- Semantic HTML (section, article, header, footer, main)
- ARIA labels for accessibility (buttons, forms, nav)
- Mobile-first responsive design
- Consistent naming conventions (camelCase for JS, kebab-case for CSS classes)
- Comments for complex logic (animations, form validation)

---

## 9. Placeholder & Asset Management

### Images
- **Hero**: 1200x600px placeholder (roofing site aesthetic)
- **Feature Icons**: Use Lucide icons (CheckCircle, Zap, Shield, etc.)
- **Team/About**: 400x400px placeholder images
- **Testimonial Avatars**: 80x80px placeholder images
- Generate via GenerateImage tool with descriptive prompts

### Placeholder Data
- Testimonials: 3-5 fake customer reviews (name, role, text)
- Services: 4-6 service types (Repair, Installation, etc.)
- Stats: 4 KPIs (years in business, projects completed, customer satisfaction, coverage area)
- FAQ: 4-5 common questions with concise answers

---

## 10. Next Steps (Implementation Sequence)

1. **Setup Phase**
   - Update `app/layout.tsx` with Geist font, global styles, metadata
   - Create reusable components (Navigation, Footer, SectionWrapper, BackToTop)
   - Define Tailwind color tokens/extensions (amber accent)

2. **Homepage Build**
   - Build hero section + featured sections
   - Integrate animations (fade-in, scroll effects)
   - Test responsive layout

3. **Additional Pages**
   - Services page (service cards + grid)
   - About page (story + values + stats)
   - Contact page (multi-step form + FAQ)

4. **Polish & Optimization**
   - Add hover effects and smooth transitions
   - Implement mobile hamburger menu
   - Optimize images and lazy-loading
   - SEO meta tags on all pages

5. **Testing & Deployment**
   - Test on mobile (iPhone), tablet (iPad), desktop
   - Verify all animations and interactions
   - Cross-browser testing
   - Deploy to Vercel

---

## 11. Key Decisions & Rationale

| Decision | Rationale |
|----------|-----------|
| Multi-page structure | Better SEO, cleaner navigation, modular codebase |
| Geist font | Modern, premium aesthetic; single font family keeps performance high |
| Amber accent only | Strict color palette ensures brand consistency and premium feel |
| Mockable form data | Faster MVP, no backend needed initially; easy to migrate to API later |
| Placeholder images | Rapid prototyping; real imagery can be added without code changes |
| 400-600 line constraint | Maintainability, prevents component bloat, forces modular design |
| Smooth scroll animations | Premium feel without heavy 3D effects; accessible via `prefers-reduced-motion` |
| No email backend | Focus on UX/design first; backend integration planned for later phase |

---

## 12. Success Criteria

✅ Fully responsive on mobile, tablet, desktop
✅ All pages load within 3 seconds (Lighthouse performance)
✅ Smooth animations and hover effects throughout
✅ Consistent branding (Amber accent, Geist font, professional aesthetic)
✅ SEO-friendly (meta tags, semantic HTML, schema markup)
✅ Contact form works with multi-step flow and mockable data
✅ Back-to-top button appears and scrolls smoothly
✅ Each page stays within 400-600 lines of code
✅ Accessibility standards (WCAG 2.1 Level AA)
✅ No external API calls (backend-agnostic MVP)

---

**Ready to start implementation. Proceed with building components and pages in sequence.**
