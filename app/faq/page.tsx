import type { Metadata } from "next";
import Link from "next/link";
import FAQPageSchema from "../components/FAQPageSchema";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | FastHEIC Converter",
  description:
    "Answers to common questions about HEIC to JPG conversion, file formats, privacy, browser compatibility, and how FastHEIC works.",
  keywords: "HEIC FAQ, HEIC questions, convert HEIC, HEIC format, JPG conversion, image converter questions, HEIC help",
  openGraph: {
    title: "FAQ - Frequently Asked Questions | FastHEIC Converter",
    description:
      "Answers to common questions about HEIC to JPG conversion, file formats, privacy, browser compatibility, and how FastHEIC works.",
  },
};

export default function FAQ() {
  const faqs = [
    {
      category: "About HEIC Format",
      questions: [
        {
          q: "What is a HEIC file?",
          a: "HEIC (High Efficiency Image Container) is a modern image format developed by the MPEG group and adopted by Apple in iOS 11 (2017). It uses HEVC (High Efficiency Video Coding) compression to store images at roughly half the file size of JPG while maintaining similar or better image quality. HEIC files can also store multiple images, image sequences, and alpha channels in a single file."
        },
        {
          q: "Why does my iPhone save photos as HEIC?",
          a: "Apple switched to HEIC as the default format in iOS 11 to save storage space on your device. HEIC files are typically 40-50% smaller than equivalent JPG files, meaning you can store more photos without filling up your iPhone's storage. This is especially beneficial for newer iPhones with advanced cameras that capture high-resolution images."
        },
        {
          q: "What's the difference between HEIC and HEIF?",
          a: "HEIF (High Efficiency Image Format) is the container format specification, while HEIC is Apple's specific implementation of HEIF. Think of HEIF as the standard and HEIC as Apple's version of it. In practice, the terms are often used interchangeably, and files may have either .heic or .heif extensions."
        },
        {
          q: "Are HEIC files better quality than JPG?",
          a: "HEIC files can maintain comparable or better quality than JPG at smaller file sizes due to more advanced compression algorithms. At the same file size, HEIC will typically show better quality. However, JPG has been refined over decades and remains excellent for most uses. The main advantage of HEIC is the space savings, not necessarily superior quality."
        }
      ]
    },
    {
      category: "Using FastHEIC",
      questions: [
        {
          q: "How do I convert HEIC to JPG using FastHEIC?",
          a: "Converting HEIC files with FastHEIC is simple: (1) Visit fastheictojpg.com, (2) Drag and drop your HEIC files onto the upload area or click to browse, (3) Wait a few seconds while your files convert in your browser, (4) Download individual JPG files or click 'Download All as ZIP' to get everything at once. The entire process happens locally in your browser - no uploads required."
        },
        {
          q: "Is FastHEIC really free to use?",
          a: "Yes, FastHEIC is completely free with no hidden fees, subscriptions, or limitations. You can convert unlimited files, any size, as many times as you want. We don't have premium tiers or paid features - everything is free. The service is supported by non-intrusive advertising, which allows us to keep it free for everyone."
        },
        {
          q: "Do I need to create an account?",
          a: "No account is required. FastHEIC works immediately without any registration, login, or personal information. Just visit the site and start converting. We believe in privacy and simplicity - no accounts means no passwords to remember and no personal data to store."
        },
        {
          q: "How many files can I convert at once?",
          a: "You can convert up to 10 files simultaneously with a maximum file size of 50MB per file and 200MB total batch size. These limits are in place to ensure smooth performance in your browser. If you need to convert more files, simply process them in multiple batches - there's no daily limit."
        },
        {
          q: "How long does conversion take?",
          a: "Conversion speed depends on your device's processing power and file size, but typically takes 300-800 milliseconds per file. A 5MB HEIC file usually converts in under 1 second. Because processing happens locally in your browser using WebAssembly, there's no network delay - conversion starts instantly."
        }
      ]
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          q: "Are my photos uploaded to your servers?",
          a: "No. This is the most important feature of FastHEIC - your files NEVER leave your device. All conversion happens entirely in your browser using WebAssembly technology. You can verify this by opening your browser's Network tab and watching that no files are uploaded. We cannot see, access, or store your photos in any way."
        },
        {
          q: "How does local conversion work?",
          a: "FastHEIC uses WebAssembly (WASM), a technology that allows high-performance code to run directly in your browser. When you select files, your browser loads them into memory, processes them using our WASM converter, and generates JPG files - all without any network communication. It's like having desktop software running in your browser."
        },
        {
          q: "Is it safe to use FastHEIC for private or sensitive photos?",
          a: "Yes, absolutely. Since your photos never leave your device, FastHEIC is ideal for private, sensitive, or confidential images. Whether it's personal photos, business documents, medical images, or any sensitive content, everything stays on your device. This is far more secure than services that upload your files to remote servers."
        },
        {
          q: "What data do you collect?",
          a: "We collect minimal, anonymous analytics data through Google Analytics (page visits, device type, general location like country/region, session duration). We do NOT collect, see, or have access to your files, file names, or any personal information. You can review our comprehensive Privacy Policy for full details."
        },
        {
          q: "Can I use FastHEIC offline?",
          a: "After the initial page load, FastHEIC can work without an internet connection since all processing is local. However, you need internet to initially load the page and the WebAssembly converter. We're working on Progressive Web App (PWA) support for full offline functionality in future updates."
        }
      ]
    },
    {
      category: "Technical Questions",
      questions: [
        {
          q: "Which browsers support FastHEIC?",
          a: "FastHEIC works on all modern browsers that support WebAssembly: Chrome 57+, Firefox 52+, Safari 11+, Edge 16+, and their mobile versions. This covers 95%+ of browsers in use today. If your browser doesn't support WebAssembly, you'll see a message suggesting you update to a newer version."
        },
        {
          q: "Does FastHEIC work on mobile devices?",
          a: "Yes! FastHEIC is fully responsive and works great on iOS, Android, tablets, and all mobile devices. Mobile Safari, Chrome Mobile, and Firefox Mobile are all supported. In fact, many users convert HEIC files directly on their iPhone before sharing - it's a great way to ensure compatibility."
        },
        {
          q: "Why does my browser use a lot of memory during conversion?",
          a: "Image processing is memory-intensive. HEIC files are decoded into raw image data in memory, then re-encoded as JPG. A 5MB HEIC file might temporarily use 50-100MB of RAM during processing. FastHEIC automatically cleans up memory after each file, but large batches may briefly use significant RAM. This is normal and memory is released when conversion completes."
        },
        {
          q: "Will conversion reduce image quality?",
          a: "FastHEIC converts to high-quality JPG at 90% quality setting, which preserves excellent image quality while ensuring broad compatibility. Most users cannot visually distinguish the difference. Some minor quality loss is inherent when converting between lossy formats (both HEIC and JPG use compression), but the difference is minimal and acceptable for virtually all use cases."
        },
        {
          q: "Does FastHEIC preserve EXIF data?",
          a: "Currently, basic EXIF metadata may not be fully preserved during conversion. We're working on improved metadata preservation in future updates. If you need to retain specific EXIF data (GPS, camera settings, timestamps), we recommend using desktop software or checking the converted files before deleting originals."
        }
      ]
    },
    {
      category: "Troubleshooting",
      questions: [
        {
          q: "Why isn't my HEIC file converting?",
          a: "Common issues include: (1) File is corrupted - try opening it in another app first, (2) File isn't actually HEIC - check the extension, (3) Browser doesn't support WebAssembly - update your browser, (4) File is too large - try files under 50MB, (5) Low device memory - close other tabs/apps. If problems persist, try refreshing the page or using a different browser."
        },
        {
          q: "The conversion failed with an error. What should I do?",
          a: "If you see an error: (1) Try converting the file again - temporary glitches happen, (2) Check the file opens correctly in a photo viewer, (3) Try a different browser, (4) Ensure you have enough free RAM (close other tabs), (5) Try smaller files first, (6) Clear your browser cache. If a specific file consistently fails, it may be corrupted. Contact us with details if the issue persists."
        },
        {
          q: "Why is conversion slow on my device?",
          a: "Conversion speed depends on your device's CPU. Older devices, budget phones, or devices with many background apps may convert slower. To improve speed: (1) Close other browser tabs, (2) Close background applications, (3) Convert fewer files at once (try 3-5 instead of 10), (4) Ensure your device isn't in low-power mode. Conversion happens on your device, so faster hardware = faster conversion."
        },
        {
          q: "Can I convert files larger than 50MB?",
          a: "The 50MB per-file limit is in place to ensure reliable performance across all devices. Larger files may work but could cause browser memory issues. If you need to convert very large files, consider: (1) Using a desktop computer with more RAM, (2) Compressing the original HEIC file first, (3) Converting in very small batches (1-2 files), (4) Using desktop software for very large files."
        }
      ]
    },
    {
      category: "Comparison & Alternatives",
      questions: [
        {
          q: "How is FastHEIC different from other online converters?",
          a: "The key difference is privacy and security - FastHEIC processes files locally in your browser, while most online converters upload your photos to their servers. FastHEIC also has no file limits, no registration, no watermarks, and is completely free. Plus, conversion is faster since there's no upload/download time."
        },
        {
          q: "Should I use FastHEIC or install desktop software?",
          a: "FastHEIC is ideal for: occasional conversions, mobile use, maximum privacy, no installation wanted. Desktop software is better for: very large files (100MB+), batch processing thousands of files, advanced EXIF preservation, offline use. For most users converting iPhone photos to share, FastHEIC is perfect and more convenient."
        },
        {
          q: "Why not just change iPhone settings to save as JPG?",
          a: "You can change iPhone settings (Settings > Camera > Formats > Most Compatible), but this means ALL future photos are JPG, using more storage. With FastHEIC, you keep the storage benefits of HEIC and only convert specific photos when needed for sharing. This gives you the best of both worlds - efficient storage and compatibility when required."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FAQPageSchema />
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about HEIC files, JPG conversion, and using FastHEIC
          </p>
        </div>

        {/* Quick Links */}
        <div className="bg-muted/30 border-2 border-border rounded-lg p-6 mb-12">
          <h2 className="font-semibold text-foreground mb-4">Jump to Section:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {faqs.map((section, idx) => (
              <a
                key={idx}
                href={`#${section.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm text-primary hover:text-primary/80 hover:underline transition-colors"
              >
                → {section.category}
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqs.map((section, sectionIdx) => (
            <section
              key={sectionIdx}
              id={section.category.toLowerCase().replace(/\s+/g, '-')}
              className="scroll-mt-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{sectionIdx + 1}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {section.category}
                </h2>
              </div>

              <div className="space-y-6">
                {section.questions.map((faq, faqIdx) => (
                  <div
                    key={faqIdx}
                    className="border-2 border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-start gap-3">
                      <span className="text-primary flex-shrink-0 mt-1">Q:</span>
                      <span>{faq.q}</span>
                    </h3>
                    <div className="flex items-start gap-3">
                      <span className="text-muted-foreground flex-shrink-0 mt-1 font-semibold">A:</span>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center border-2 border-border rounded-lg p-8 bg-muted/20">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Check out our detailed guides or contact us directly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              How It Works →
            </Link>
            <Link
              href="/privacy"
              className="inline-flex items-center px-6 py-3 border-2 border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors"
            >
              Try the Converter
            </Link>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-8 text-center">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
          </a>
        </div>
      </div>
    </div>
  );
}
