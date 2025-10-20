# FastHEIC

**Fast, Free, and Private HEIC to JPG Converter**

FastHEIC is a browser-based HEIC/HEIF to JPG converter that processes files entirely on your device. No uploads, no servers, complete privacy.

🔗 **Live Demo:** [fastheictojpg.com](https://fastheictojpg.com)

---

## ✨ Features

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

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **UI:** React 19, TypeScript, Tailwind CSS 4
- **Conversion:** [heic2any](https://github.com/alexcorvi/heic2any) (WebAssembly)
- **File Handling:** react-dropzone, JSZip
- **Fonts:** Inter (UI), JetBrains Mono (code)
- **Deployment:** Vercel-ready

---

## 🚀 Getting Started

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

- ✅ Chrome 57+
- ✅ Firefox 52+
- ✅ Safari 11+
- ✅ Edge 16+

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [heic2any](https://github.com/alexcorvi/heic2any) - WebAssembly HEIC converter
- [Next.js](https://nextjs.org/) - React framework
- [Vercel](https://vercel.com/) - Hosting platform

---

## 📧 Contact

- **Website:** [fastheictojpg.com](https://fastheictojpg.com)
- **Issues:** [GitHub Issues](https://github.com/cgodf/fastheic/issues)
- **Email:** info@fastheictojpg.com

---

Made with ❤️ for privacy-conscious users
