# Tobams Group - Frontend Assessment

A responsive, pixel-accurate landing page implementation built for the **Tobams Group Frontend Assessment**. Developed using **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**, reproducing the provided Figma specifications across mobile, tablet, and desktop viewports.

---

## Project Links

- **Live URL:** [https://tobamsgroup01.netlify.app/](https://tobamsgroup01.netlify.app/)
- **Figma Design:** [Frontend Intern Assessment on Figma](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=2XhbA4uoY2Tf4fgY-0)

---

## Tech Stack

- **Framework:** [Next.js 16.3.4](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss`
- **Typography:** `Nunito Sans` configured via `next/font/google`
- **Icons:** [lucide-react](https://lucide.dev/) & [react-icons](https://react-icons.github.io/react-icons/) (`Fa6`)

---

## Getting Started & Setup Steps

### Prerequisites
Make sure you have **Node.js** (version 18.18 or later) and **npm** installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nifemi2005/Tobams-Group.git
   cd Tobams-Group
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
To create an optimized production build and test it locally:

```bash
# Build the application
npm run build

# Start production server
npm run start
```

---

## Design & Architectural Decisions

1. **Pixel & Token Fidelity to Figma**:
   - **Color Palette**: Rigorously implemented brand colors including `#571244` (primary deep plum), `#EF4353` (accent coral), `#151515` (primary dark text), `#696969` (secondary text), and `#11040E` (footer background).
   - **Typography**: Configured Google's **Nunito Sans** font at the root layout with CSS variable inheritance to ensure consistent weights and letter spacing across all devices.

2. **Controlled Testimonials Carousel**:
   - Instead of relying on native browser scroll-snapping (which can introduce cross-browser padding shifts and premature card peeking on mobile), the testimonial carousel uses a **bounded viewport with CSS transforms** (`translateX`).
   - On **mobile**, exactly 1 card fills the viewport with balanced 24px margins on both sides (`px-6`), completely eliminating card overflow and wall-clipping.
   - On **tablet & desktop**, the carousel dynamically scales to 2 and 3 cards side-by-side with smooth transition timing.
   - Includes full **touch swipe support** (`onTouchStart`/`onTouchEnd`) and responsive arrow navigation.

3. **Responsive Image Handling (`next/image`)**:
   - Customized asymmetrical border radii (e.g. `rounded-br-[23px] rounded-bl-xl rounded-tl-[56px] rounded-tr-3xl`) for service showcases.
   - Used Next.js `Image` with explicit aspect ratios and `object-cover` to prevent layout shift (CLS) and avoid distortion on smaller viewports.

4. **Component Modularization**:
   - Separated the landing page into distinct reusable components:
     - `Navbar`: Sticky header with interactive mobile slide-down menu.
     - `Hero`: High-impact banner with consultation CTA.
     - `LMS`: Course offering cards with fluid layout.
     - `Services`, `PIT_Service`, `CD_Services`: Alternating feature sections with custom zigzag bullet points.
     - `Management`: Deep purple container highlighting consulting domains.
     - `CEO`: Leadership spotlight feature card.
     - `ConsultantSection`: Grid of consulting highlights.
     - `Testimonial`: Responsive client testimonial slider.
     - `Booking` & `Get_Touch`: Call-to-action banners.
     - `Footer`: Multi-column footer with office locations and legal links.

---

## Known Issues & Limitations

- **Placeholder Navigation Links**: Secondary header navigation and footer links point to anchor identifiers or placeholder `#` links, as this assessment specifically focuses on the single landing page implementation.
- **Form Submissions**: Interactive buttons (such as "Book a Consultation", "Take Assessment", and contact buttons) currently serve as UI demonstrations and are not yet tied to a live backend endpoint or CRM API.
- **Social Media Outlets**: Social media icons in the footer are wired to placeholder URLs pending official organization handle confirmation.
