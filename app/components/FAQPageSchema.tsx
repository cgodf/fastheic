// Enhanced FAQ Schema for the dedicated FAQ page with all questions
export default function FAQPageSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      // About HEIC Format
      {
        "@type": "Question",
        "name": "What is a HEIC file?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HEIC (High Efficiency Image Container) is a modern image format developed by the MPEG group and adopted by Apple in iOS 11 (2017). It uses HEVC (High Efficiency Video Coding) compression to store images at roughly half the file size of JPG while maintaining similar or better image quality."
        }
      },
      {
        "@type": "Question",
        "name": "Why does my iPhone save photos as HEIC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apple switched to HEIC as the default format in iOS 11 to save storage space on your device. HEIC files are typically 40-50% smaller than equivalent JPG files, meaning you can store more photos without filling up your iPhone's storage."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between HEIC and HEIF?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HEIF (High Efficiency Image Format) is the container format specification, while HEIC is Apple's specific implementation of HEIF. Think of HEIF as the standard and HEIC as Apple's version of it."
        }
      },
      {
        "@type": "Question",
        "name": "Are HEIC files better quality than JPG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HEIC files can maintain comparable or better quality than JPG at smaller file sizes due to more advanced compression algorithms. At the same file size, HEIC will typically show better quality. The main advantage of HEIC is the space savings."
        }
      },
      // Using FastHEIC
      {
        "@type": "Question",
        "name": "How do I convert HEIC to JPG using FastHEIC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Converting HEIC files with FastHEIC is simple: Visit fastheictojpg.com, drag and drop your HEIC files onto the upload area or click to browse, wait a few seconds while your files convert in your browser, then download individual JPG files or click 'Download All as ZIP'. The entire process happens locally in your browser."
        }
      },
      {
        "@type": "Question",
        "name": "Is FastHEIC really free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, FastHEIC is completely free with no hidden fees, subscriptions, or limitations. You can convert unlimited files, any size, as many times as you want. The service is supported by non-intrusive advertising."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to create an account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No account is required. FastHEIC works immediately without any registration, login, or personal information. We believe in privacy and simplicity - no accounts means no passwords to remember and no personal data to store."
        }
      },
      {
        "@type": "Question",
        "name": "How many files can I convert at once?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can convert up to 10 files simultaneously with a maximum file size of 50MB per file and 200MB total batch size. If you need to convert more files, simply process them in multiple batches - there's no daily limit."
        }
      },
      // Privacy & Security
      {
        "@type": "Question",
        "name": "Are my photos uploaded to your servers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Your files NEVER leave your device. All conversion happens entirely in your browser using WebAssembly technology. You can verify this by opening your browser's Network tab and watching that no files are uploaded. We cannot see, access, or store your photos in any way."
        }
      },
      {
        "@type": "Question",
        "name": "How does local conversion work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FastHEIC uses WebAssembly (WASM), a technology that allows high-performance code to run directly in your browser. When you select files, your browser loads them into memory, processes them using our WASM converter, and generates JPG files - all without any network communication."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe to use FastHEIC for private or sensitive photos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. Since your photos never leave your device, FastHEIC is ideal for private, sensitive, or confidential images. This is far more secure than services that upload your files to remote servers."
        }
      },
      {
        "@type": "Question",
        "name": "What data do you collect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We collect minimal, anonymous analytics data through Google Analytics (page visits, device type, general location like country/region, session duration). We do NOT collect, see, or have access to your files, file names, or any personal information."
        }
      },
      // Technical Questions
      {
        "@type": "Question",
        "name": "Which browsers support FastHEIC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FastHEIC works on all modern browsers that support WebAssembly: Chrome 57+, Firefox 52+, Safari 11+, Edge 16+, and their mobile versions. This covers 95%+ of browsers in use today."
        }
      },
      {
        "@type": "Question",
        "name": "Does FastHEIC work on mobile devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! FastHEIC is fully responsive and works great on iOS, Android, tablets, and all mobile devices. Mobile Safari, Chrome Mobile, and Firefox Mobile are all supported."
        }
      },
      {
        "@type": "Question",
        "name": "Will conversion reduce image quality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FastHEIC converts to high-quality JPG at 90% quality setting, which preserves excellent image quality while ensuring broad compatibility. Most users cannot visually distinguish the difference."
        }
      },
      // Troubleshooting
      {
        "@type": "Question",
        "name": "Why isn't my HEIC file converting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common issues include: File is corrupted, file isn't actually HEIC, browser doesn't support WebAssembly (update your browser), file is too large (try files under 50MB), or low device memory (close other tabs/apps). Try refreshing the page or using a different browser."
        }
      },
      {
        "@type": "Question",
        "name": "Why is conversion slow on my device?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Conversion speed depends on your device's CPU. To improve speed: close other browser tabs, close background applications, convert fewer files at once (try 3-5 instead of 10), and ensure your device isn't in low-power mode."
        }
      },
      // Comparison
      {
        "@type": "Question",
        "name": "How is FastHEIC different from other online converters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The key difference is privacy and security - FastHEIC processes files locally in your browser, while most online converters upload your photos to their servers. FastHEIC also has no file limits, no registration, no watermarks, and is completely free."
        }
      },
      {
        "@type": "Question",
        "name": "Should I use FastHEIC or install desktop software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FastHEIC is ideal for occasional conversions, mobile use, maximum privacy, and when no installation is wanted. Desktop software is better for very large files (100MB+), batch processing thousands of files, and offline use. For most users converting iPhone photos to share, FastHEIC is perfect."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema)
      }}
    />
  );
}
