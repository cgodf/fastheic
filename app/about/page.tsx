import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About FastHEIC - Free, Private HEIC to JPG Converter",
  description:
    "Learn about FastHEIC, the free browser-based HEIC to JPG converter. Our mission is to provide fast, private, and accessible image conversion for everyone.",
  keywords: "about FastHEIC, HEIC converter, privacy-focused converter, browser-based conversion, free image tools",
  openGraph: {
    title: "About FastHEIC - Free, Private HEIC to JPG Converter",
    description:
      "Learn about FastHEIC's mission to provide fast, private, and accessible HEIC to JPG conversion for everyone.",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About FastHEIC
          </h1>
          <p className="text-xl text-muted-foreground">
            Fast, private, and accessible HEIC to JPG conversion for everyone
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Mission Statement */}
          <section className="bg-primary/10 border-2 border-primary/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              FastHEIC was created to solve a universal problem: Apple&apos;s HEIC format is great 
              for storage efficiency, but terrible for compatibility. We believe that converting 
              your photos shouldn&apos;t require uploading them to someone else&apos;s server, 
              paying for software, or compromising your privacy. Our mission is to provide 
              fast, free, and completely private HEIC to JPG conversion that works for everyone, 
              everywhere.
            </p>
          </section>

          {/* Why We Built This */}
          <section className="border-2 border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              Why We Built FastHEIC
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">The Problem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Since iOS 11 in 2017, iPhones have saved photos in HEIC format by default. 
                  While HEIC offers excellent compression and quality, it&apos;s poorly supported 
                  outside Apple&apos;s ecosystem. Android users can&apos;t view the photos you send. 
                  Websites reject HEIC uploads. Windows users need special codecs. This creates 
                  daily frustration for millions of iPhone users worldwide.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Existing Solutions Were Inadequate</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Most online converters require uploading your photos to their servers. This is:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Slow</strong> - Upload and download times add significant delay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Privacy risk</strong> - Your personal photos pass through third-party servers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Limited</strong> - File size restrictions, daily limits, watermarks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Expensive</strong> - Many charge subscription fees for basic features</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Our Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We built FastHEIC using modern WebAssembly technology to process conversions 
                  entirely in your browser. Your photos never leave your device. Conversion happens 
                  locally at full speed with no file size limits, no daily restrictions, and 
                  completely free. It&apos;s the converter we wished existed when we faced this 
                  problem ourselves.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="border-2 border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-3xl">⭐</span>
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🔒</span>
                  <h3 className="text-lg font-semibold text-foreground">Privacy First</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your photos are personal. We designed FastHEIC so your files never leave your 
                  device. All processing happens locally in your browser using WebAssembly. We 
                  can&apos;t see, access, or store your photos because they never reach our servers.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🆓</span>
                  <h3 className="text-lg font-semibold text-foreground">Always Free</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We believe essential tools should be free and accessible to everyone. FastHEIC 
                  has no file limits, no daily restrictions, no watermarks, and no premium tiers. 
                  It&apos;s supported by non-intrusive advertising, allowing us to keep it 100% free.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⚡</span>
                  <h3 className="text-lg font-semibold text-foreground">Fast & Efficient</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Local processing means instant conversion with no upload/download delays. 
                  Typical conversions complete in under 1 second. We optimize every aspect of 
                  the conversion pipeline to respect your time.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🌍</span>
                  <h3 className="text-lg font-semibold text-foreground">Accessible Everywhere</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  FastHEIC works on any device with a modern browser - desktop, laptop, tablet, 
                  or phone. No downloads, no installation, no account required. Just visit the 
                  site and start converting.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🛠️</span>
                  <h3 className="text-lg font-semibold text-foreground">Quality Focused</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We convert at 90% JPG quality to preserve excellent image quality while ensuring 
                  broad compatibility. Your converted photos look great and work everywhere - 
                  on websites, Android devices, Windows PCs, and more.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🔓</span>
                  <h3 className="text-lg font-semibold text-foreground">Open & Transparent</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We&apos;re committed to transparency. Our source code is available on GitHub, 
                  our privacy policy is comprehensive, and we&apos;re clear about how the service 
                  works. No hidden data collection, no dark patterns.
                </p>
              </div>
            </div>
          </section>

          {/* Technology */}
          <section className="border-2 border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-3xl">⚙️</span>
              Technology
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                FastHEIC is built with modern web technologies to deliver fast, reliable conversion:
              </p>
              <div className="bg-muted/30 rounded-lg p-6">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold mt-0.5">•</span>
                    <div>
                      <strong className="text-foreground">WebAssembly (WASM)</strong> - Enables 
                      high-performance HEIC decoding directly in the browser without server uploads
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold mt-0.5">•</span>
                    <div>
                      <strong className="text-foreground">Next.js 15</strong> - Modern React 
                      framework providing optimal performance and SEO
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold mt-0.5">•</span>
                    <div>
                      <strong className="text-foreground">TypeScript</strong> - Type-safe code 
                      ensuring reliability and maintainability
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold mt-0.5">•</span>
                    <div>
                      <strong className="text-foreground">heic2any</strong> - Open-source library 
                      powering the HEIC to JPG conversion
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold mt-0.5">•</span>
                    <div>
                      <strong className="text-foreground">Tailwind CSS</strong> - Modern, 
                      responsive design that works beautifully on all screen sizes
                    </div>
                  </li>
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We continuously update our technology stack to maintain compatibility with the 
                latest browsers and deliver the best possible user experience.
              </p>
            </div>
          </section>

          {/* Open Source */}
          <section className="border-2 border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="text-3xl">💻</span>
              Open Source Commitment
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              FastHEIC is built on open-source technology and we believe in giving back to the 
              community. Our source code is publicly available on GitHub, allowing developers to:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Verify our privacy claims by inspecting the code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Learn how browser-based HEIC conversion works</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Contribute improvements and bug fixes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Build similar tools for other use cases</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              We use and contribute to open-source projects like heic2any, Next.js, and React, 
              supporting the ecosystem that makes FastHEIC possible.
            </p>
          </section>

          {/* Sustainability */}
          <section className="border-2 border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="text-3xl">💚</span>
              Sustainability Model
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              FastHEIC is free to use and will always remain free. We sustain the service through 
              ethical, non-intrusive advertising that respects your experience:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Ads are placed thoughtfully and never interfere with the conversion process</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>No ads appear on error pages or before you can use the tool</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>We follow Google AdSense policies to ensure quality advertising</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Your privacy remains protected - no personal data is shared with advertisers</span>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="bg-primary/10 border-2 border-primary/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="text-3xl">📧</span>
              Get in Touch
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We&apos;re always happy to hear from our users. Whether you have questions, 
              suggestions, bug reports, or just want to say hello, feel free to reach out.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-primary">💬</span>
                <div>
                  <div className="font-semibold text-foreground">General Inquiries</div>
                  <div className="text-sm text-muted-foreground">For questions about FastHEIC</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">🐛</span>
                <div>
                  <div className="font-semibold text-foreground">Bug Reports</div>
                  <div className="text-sm text-muted-foreground">
                    Report issues on <a href="https://github.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a> or contact us
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">💼</span>
                <div>
                  <div className="font-semibold text-foreground">Business Inquiries</div>
                  <div className="text-sm text-muted-foreground">Partnerships and collaborations welcome</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">🔒</span>
                <div>
                  <div className="font-semibold text-foreground">Privacy Concerns</div>
                  <div className="text-sm text-muted-foreground">
                    Review our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> or contact us
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center border-2 border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Convert Your HEIC Files?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Try FastHEIC today - fast, free, and completely private HEIC to JPG conversion 
              in your browser.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Start Converting →
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center px-6 py-3 border-2 border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
