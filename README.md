<div align="center">

# 🚀 FastHEIC

### Convert HEIC to JPG Instantly in Your Browser

**100% Private • No Uploads • WebAssembly Powered**

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.fastheictojpg.com&style=for-the-badge&logo=vercel)](https://www.fastheictojpg.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

[🌐 Live Demo](https://www.fastheictojpg.com) • [📖 How It Works](https://www.fastheictojpg.com/how-it-works) • [🐛 Report Bug](https://github.com/cgodf/fastheic/issues) • [✨ Request Feature](https://github.com/cgodf/fastheic/issues)

![FastHEIC Screenshot](https://via.placeholder.com/800x400/0d9488/ffffff?text=FastHEIC+Screenshot+Coming+Soon)
<!-- TODO: Replace with actual screenshot -->

</div>

---

## 📖 Why FastHEIC?

Ever tried sharing iPhone photos with friends on Android or Windows? They can't open HEIC files. Most converter websites either:

- ❌ Require uploading your personal photos to their servers
- ❌ Limit file count unless you pay
- ❌ Install bloatware or malware
- ❌ Plaster watermarks on your images
- ❌ Have terrible mobile experience

**FastHEIC solves all of these problems.**

### ✨ What Makes It Different

FastHEIC converts files **entirely in your browser** using WebAssembly. Your photos literally never leave your device. No servers, no uploads, no privacy concerns.

---

## 🎯 Features

### Core Functionality
- 🚀 **Lightning Fast** - Instant conversion using WebAssembly
- 🔒 **100% Private** - All processing happens locally in your browser
- 📦 **Batch Conversion** - Convert multiple files at once
- 💾 **ZIP Download** - Download all converted files in a single archive
- 🎨 **High Quality** - Maintains image quality with optimized compression
- 📱 **Responsive** - Works on desktop, tablet, and mobile devices

### Technical Features
- ⚡ Built with Next.js 15 and React 19
- 🎯 WebAssembly-powered conversion via heic2any
- 🌓 Light/Dark mode support
- ♿ Accessibility-focused design
- 📊 Anonymous analytics (Google Analytics)
- 💰 AdSense integration ready
- 🔍 SEO optimized

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 15](https://nextjs.org/) with App Router & Turbopack |
| **Language** | TypeScript 5 |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS 4 |
| **Conversion** | [heic2any](https://github.com/alexcorvi/heic2any) (WebAssembly) |
| **File Handling** | react-dropzone, JSZip |
| **Analytics** | Google Analytics 4 (optional) |
| **Deployment** | Vercel |
| **Bundle Size** | ~134 KB (optimized) |

---

## ⚡ Quick Start

```bash
git clone https://github.com/cgodf/fastheic.git
cd fastheic
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start converting!

---

## 🚀 Full Installation Guide

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/cgodf/fastheic.git
cd fastheic

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
fastheic/
├── app/
│   ├── components/         # React components
│   │   ├── ConversionPipeline.tsx
│   │   ├── FileDropzone.tsx
│   │   ├── FileList.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── services/          # Business logic
│   │   └── heicConverter.ts
│   ├── how-it-works/      # Static pages
│   ├── privacy/
│   ├── terms/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
│   ├── fastheiclogo.svg
│   ├── favicon.ico
│   └── manifest.json
├── types/                 # TypeScript definitions
└── docs/                  # Documentation
```

---

## 🎨 Features in Detail

### Browser-Based Processing
All file conversion happens in your browser using WebAssembly. Your files never leave your device, ensuring complete privacy and security.

### Batch Conversion
Convert multiple HEIC files simultaneously with real-time progress tracking and error recovery.

### ZIP Download
Download all converted files at once in a convenient ZIP archive.

### Error Recovery
Individual file retry functionality if conversion fails for specific files.

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support
- WCAG AAA color contrast

---

## 🔐 Privacy & Security

FastHEIC is designed with privacy as the top priority:

- ✅ **No file uploads** - All processing happens locally
- ✅ **No server storage** - Files never touch our servers  
- ✅ **No tracking** - Minimal anonymous analytics only
- ✅ **No accounts** - No registration or login required
- ✅ **Open source** - Code is transparent and auditable

See our [Privacy Policy](https://fastheictojpg.com/privacy) for details.

---

## 📝 Configuration

### Environment Variables

Create a `.env.local` file:

```bash
# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google AdSense (optional)
NEXT_PUBLIC_ADSENSE_ID=ca-pub-xxxxxxxxxxxxxxxx
```

### Customization

- **Theme colors:** Edit `app/globals.css`
- **Metadata:** Update `app/layout.tsx`
- **Conversion limits:** Modify `FileDropzone.tsx` constants
- **Ad placements:** Edit `AdPlaceholder.tsx`

---

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/cgodf/fastheic)

1. Push to GitHub
2. Import to Vercel
3. Configure environment variables
4. Deploy!

### Other Platforms

FastHEIC works on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted with Node.js

---

## 📊 Browser Support

FastHEIC works on all modern browsers with WebAssembly support:

| Browser | Minimum Version | Status |
|---------|----------------|--------|
| Chrome | 57+ | ✅ Fully Supported |
| Firefox | 52+ | ✅ Fully Supported |
| Safari | 11+ | ✅ Fully Supported |
| Edge | 16+ | ✅ Fully Supported |
| Mobile Safari (iOS) | 11+ | ✅ Fully Supported |
| Chrome Mobile | Latest | ✅ Fully Supported |

---

## ⚡ Performance

- **Bundle Size:** 134 KB (gzipped)
- **First Load:** < 2 seconds
- **Conversion Speed:** ~500ms per 5MB file
- **Concurrent Processing:** Up to 10 files
- **Mobile Support:** Full feature parity

---

## 🗺️ Roadmap

- [x] Basic HEIC to JPG conversion
- [x] Batch processing
- [x] Dark mode
- [x] Mobile optimization
- [ ] PDF output support
- [ ] PNG output option
- [ ] Quality slider
- [ ] EXIF data preservation
- [ ] Progressive Web App (PWA)
- [ ] Offline mode

**Want to help?** Check out [open issues](https://github.com/cgodf/fastheic/issues)!

---

## ❓ FAQ

<details>
<summary><b>Is my data really safe?</b></summary>

Yes! All conversion happens in your browser using WebAssembly. You can verify this by opening your browser's Network tab - you'll see zero file uploads. The code is open source, so you can audit it yourself.
</details>

<details>
<summary><b>Why is it free?</b></summary>

FastHEIC is ad-supported (non-intrusive) and open source. Since processing happens client-side, there are no server costs for conversions.
</details>

<details>
<summary><b>How many files can I convert?</b></summary>

Up to 10 files simultaneously, with a max of 50MB per file and 200MB total batch size.
</details>

<details>
<summary><b>Does it work offline?</b></summary>

After the initial load, FastHEIC can work offline since all processing is local. PWA support is on the roadmap for better offline experience.
</details>

<details>
<summary><b>Can I use this commercially?</b></summary>

Yes! The code is MIT licensed. You can fork it, modify it, and use it for commercial purposes.
</details>

---

## 🤝 Contributing

We love contributions! Whether it's bug reports, feature requests, or code contributions, all are welcome.

### Ways to Contribute

- 🐛 [Report bugs](https://github.com/cgodf/fastheic/issues/new?labels=bug)
- 💡 [Suggest features](https://github.com/cgodf/fastheic/issues/new?labels=enhancement)
- 📝 Improve documentation
- 🌍 Add translations
- ⭐ Star this repo if you find it useful!

### Development Workflow

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/fastheic.git`
3. **Create** a branch: `git checkout -b feature/amazing-feature`
4. **Make** your changes and test thoroughly
5. **Commit**: `git commit -m 'Add amazing feature'`
6. **Push**: `git push origin feature/amazing-feature`
7. **Open** a Pull Request

### Code Standards

- Write TypeScript with strict types
- Follow existing code style (ESLint + Prettier)
- Add tests for new features
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [heic2any](https://github.com/alexcorvi/heic2any) - WebAssembly HEIC converter
- [Next.js](https://nextjs.org/) - React framework
- [Vercel](https://vercel.com/) - Hosting platform

---

## 🌟 Show Your Support

If FastHEIC helped you, please consider:

- ⭐ **Starring** this repository
- 🐦 **Sharing** on [Twitter](https://twitter.com/intent/tweet?text=Check%20out%20FastHEIC%20-%20a%20privacy-focused%20HEIC%20to%20JPG%20converter!%20https://www.fastheictojpg.com)
- 📝 **Writing** a review or blog post
- 🤝 **Contributing** to the project

---

## 📬 Contact & Community

- 🌐 **Website:** [www.fastheictojpg.com](https://www.fastheictojpg.com)
- 🐛 **Issues:** [GitHub Issues](https://github.com/cgodf/fastheic/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/cgodf/fastheic/discussions)
- 📧 **Email:** info@fastheictojpg.com

---

## 📈 Stats

![GitHub stars](https://img.shields.io/github/stars/cgodf/fastheic?style=social)
![GitHub forks](https://img.shields.io/github/forks/cgodf/fastheic?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/cgodf/fastheic?style=social)

---

<div align="center">

**Made with ❤️ for privacy-conscious users**

[Website](https://www.fastheictojpg.com) • [Twitter](https://twitter.com/fastheic) • [GitHub](https://github.com/cgodf/fastheic)

**If you found this useful, please ⭐ star the repo!**

</div>
