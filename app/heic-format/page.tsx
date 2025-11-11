import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is HEIC Format? Complete Guide to Apple's Image Format | FastHEIC",
  description:
    "Complete guide to HEIC (High Efficiency Image Container) format. Learn about Apple's modern image format, why it's used, technical details, advantages, disadvantages, and compatibility.",
  keywords: "HEIC format, what is HEIC, HEIF format, Apple image format, High Efficiency Image Container, HEIC explained, iPhone photo format",
  openGraph: {
    title: "What is HEIC Format? Complete Guide to Apple's Image Format",
    description:
      "Complete guide to HEIC format - Apple's modern image standard for iPhone photos. Technical details, advantages, compatibility, and more.",
  },
};

export default function HEICFormat() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What is HEIC Format?
          </h1>
          <p className="text-xl text-muted-foreground">
            A complete guide to Apple&apos;s High Efficiency Image Container format
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-primary/10 border-2 border-primary/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Quick Answer</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                HEIC (High Efficiency Image Container) is a modern image file format that stores
                photos at roughly half the file size of JPG while maintaining similar or better
                image quality. It was developed by the MPEG group and adopted by Apple as the
                default format for iPhone and iPad photos starting with iOS 11 in September 2017.
              </p>
            </div>
          </section>

          {/* History */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">History & Development</h2>
            <div className="border-2 border-border rounded-lg p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">The HEIF Standard</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    HEIF (High Efficiency Image Format) is the container format specification developed
                    by the Moving Picture Experts Group (MPEG) and finalized in 2015. It was designed
                    to replace older image formats with a more efficient alternative that could handle
                    modern high-resolution photos without consuming excessive storage space.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Apple&apos;s Adoption</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Apple adopted HEIF and implemented it as HEIC (the &quot;C&quot; stands for Container)
                    in iOS 11 and macOS High Sierra in 2017. This made Apple the first major technology
                    company to use HEIF as a default image format, affecting hundreds of millions of
                    iPhone users worldwide.
                  </p>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-sm text-foreground font-medium mb-2">Timeline:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>2013</strong> - HEVC video codec standardized</li>
                      <li>• <strong>2015</strong> - HEIF image format standardized</li>
                      <li>• <strong>2017</strong> - Apple adopts HEIC in iOS 11</li>
                      <li>• <strong>2019</strong> - Android 10 adds HEIF support</li>
                      <li>• <strong>2020+</strong> - Gradual industry adoption</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Details */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">How HEIC Works</h2>
            <div className="space-y-6">
              <div className="border-2 border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Compression Technology</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  HEIC uses HEVC (High Efficiency Video Coding), also known as H.265, for image
                  compression. This is the same technology used for modern video streaming and
                  4K video files. The compression algorithm is more advanced than JPG&apos;s DCT
                  (Discrete Cosine Transform) method, resulting in better efficiency.
                </p>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-foreground mb-2">Key Technical Features:</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Advanced compression:</strong> Uses HEVC/H.265 codec</li>
                    <li>• <strong>File size:</strong> Typically 40-50% smaller than equivalent JPG</li>
                    <li>• <strong>Bit depth:</strong> Supports 16-bit color (vs JPG&apos;s 8-bit)</li>
                    <li>• <strong>Transparency:</strong> Native alpha channel support</li>
                    <li>• <strong>Multiple images:</strong> Can store image sequences and edits</li>
                    <li>• <strong>Metadata:</strong> Better EXIF and XMP data handling</li>
                  </ul>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">File Structure</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unlike JPG which stores a single image, HEIC is a container format that can store:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Multiple images (e.g., burst photos, Live Photos)</li>
                  <li>• Image thumbnails</li>
                  <li>• Edit history and non-destructive edits</li>
                  <li>• Depth maps (for Portrait mode)</li>
                  <li>• Audio (for Live Photos)</li>
                  <li>• Extensive metadata</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Advantages */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Advantages of HEIC</h2>
            <div className="grid gap-6">
              <div className="border-2 border-green-500/30 bg-green-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💾</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Massive Storage Savings
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      HEIC files are typically 40-50% smaller than equivalent quality JPG files.
                      For iPhone users taking hundreds of photos, this can save gigabytes of storage
                      space, allowing more photos without upgrading to a higher storage tier.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-green-500/30 bg-green-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Better Quality at Same Size
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      At equal file sizes, HEIC maintains better image quality than JPG due to
                      more efficient compression algorithms. This is especially noticeable in
                      areas with fine detail or gradients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-green-500/30 bg-green-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌈</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      16-Bit Color Depth
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      HEIC supports 16-bit color channels (vs JPG&apos;s 8-bit), allowing for better
                      color accuracy and smoother gradients. This is beneficial for professional
                      photography and HDR images.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-green-500/30 bg-green-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📦</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Multiple Images in One File
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      HEIC can store multiple images, edits, and related data in a single file.
                      This makes it perfect for Live Photos, burst sequences, and preserving
                      edit history without creating multiple files.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-green-500/30 bg-green-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Faster iCloud Syncing
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Smaller file sizes mean faster uploads to iCloud and less data usage.
                      Photos sync across devices more quickly and consume less of your iCloud
                      storage quota.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Disadvantages */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Disadvantages of HEIC</h2>
            <div className="grid gap-6">
              <div className="border-2 border-red-500/30 bg-red-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚫</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Limited Compatibility
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      HEIC is not universally supported. Many websites, software applications,
                      and non-Apple devices cannot open HEIC files. Windows users need Windows 10
                      (version 1809+) with additional codecs installed to view HEIC images natively.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-red-500/30 bg-red-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Poor Web Support
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Most web browsers don&apos;t display HEIC images natively. Websites, content
                      management systems, and online platforms typically don&apos;t accept HEIC
                      uploads, requiring conversion to JPG for web use.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-red-500/30 bg-red-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💻</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Software Support Issues
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Many photo editing programs, design software, and older applications don&apos;t
                      support HEIC. Professional workflows often require conversion to standard
                      formats like JPG or TIFF.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-red-500/30 bg-red-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Android Compatibility
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      While Android 10+ technically supports HEIF, practical support varies by
                      manufacturer and app. Sharing HEIC photos with Android users often results
                      in compatibility issues.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-red-500/30 bg-red-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚖️</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Patent Licensing Issues
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      HEVC/H.265 codec has complex patent licensing requirements, which has slowed
                      adoption. This is why many companies and open-source projects have been
                      hesitant to fully support HEIC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Compatibility */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Platform Compatibility</h2>
            <div className="border-2 border-border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Platform</th>
                    <th className="text-left p-4 font-semibold text-foreground">Support Level</th>
                    <th className="text-left p-4 font-semibold text-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 text-foreground font-medium">iOS 11+</td>
                    <td className="p-4"><span className="text-green-500">✅ Full</span></td>
                    <td className="p-4 text-sm text-muted-foreground">Native support</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-foreground font-medium">macOS High Sierra+</td>
                    <td className="p-4"><span className="text-green-500">✅ Full</span></td>
                    <td className="p-4 text-sm text-muted-foreground">Native support</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-foreground font-medium">Windows 10 (1809+)</td>
                    <td className="p-4"><span className="text-yellow-500">⚠️ Partial</span></td>
                    <td className="p-4 text-sm text-muted-foreground">Requires codec download</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-foreground font-medium">Windows 7/8</td>
                    <td className="p-4"><span className="text-red-500">❌ None</span></td>
                    <td className="p-4 text-sm text-muted-foreground">No native support</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-foreground font-medium">Android 10+</td>
                    <td className="p-4"><span className="text-yellow-500">⚠️ Partial</span></td>
                    <td className="p-4 text-sm text-muted-foreground">Varies by manufacturer</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-foreground font-medium">Linux</td>
                    <td className="p-4"><span className="text-yellow-500">⚠️ Partial</span></td>
                    <td className="p-4 text-sm text-muted-foreground">Requires third-party tools</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-foreground font-medium">Web Browsers</td>
                    <td className="p-4"><span className="text-red-500">❌ None</span></td>
                    <td className="p-4 text-sm text-muted-foreground">No native support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* When to Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">When to Use HEIC vs JPG</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-primary/30 bg-primary/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span>📱</span>
                  Keep HEIC When:
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Staying within Apple ecosystem</li>
                  <li>• Maximizing iPhone storage</li>
                  <li>• Using iCloud Photo Library</li>
                  <li>• Sharing via AirDrop to Mac/iPhone</li>
                  <li>• Preserving maximum quality</li>
                  <li>• Keeping Live Photos intact</li>
                  <li>• Maintaining edit history</li>
                  <li>• Personal archiving</li>
                </ul>
              </div>

              <div className="border-2 border-primary/30 bg-primary/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span>🔄</span>
                  Convert to JPG When:
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sharing with non-Apple users</li>
                  <li>• Uploading to websites</li>
                  <li>• Sending via email</li>
                  <li>• Using with Windows/Android</li>
                  <li>• Posting to social media</li>
                  <li>• Professional/business use</li>
                  <li>• Printing services</li>
                  <li>• Maximum compatibility needed</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-primary/10 border-2 border-primary/30 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Need to Convert HEIC to JPG?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              FastHEIC converts your HEIC files instantly in your browser. No uploads,
              completely private, and works on any device.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Convert HEIC to JPG →
              </Link>
              <Link
                href="/use-cases"
                className="inline-flex items-center px-6 py-3 border-2 border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                View Use Cases
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
