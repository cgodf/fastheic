import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is JPG Format? Complete Guide to JPEG Images | FastHEIC",
  description:
    "Complete guide to JPG/JPEG format. Learn about the most popular image format, how JPG compression works, advantages, disadvantages, quality settings, and when to use JPG.",
  keywords: "JPG format, JPEG format, what is JPG, JPEG explained, JPG compression, image format guide, JPG quality",
  openGraph: {
    title: "What is JPG Format? Complete Guide to JPEG Images",
    description:
      "Complete guide to JPG/JPEG - the world's most popular image format. Technical details, compression, quality settings, and more.",
  },
};

export default function JPGFormat() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What is JPG Format?
          </h1>
          <p className="text-xl text-muted-foreground">
            A complete guide to the world&apos;s most popular image format
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-primary/10 border-2 border-primary/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Quick Answer</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                JPG (or JPEG) is a lossy compressed image format that has been the standard for
                digital photos since 1992. It was developed by the Joint Photographic Experts Group
                (hence JPEG) and is universally supported across all devices, browsers, and software.
                JPG uses compression to reduce file sizes while maintaining acceptable image quality,
                making it ideal for photos and realistic images.
              </p>
            </div>
          </section>

          {/* History */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">History & Development</h2>
            <div className="border-2 border-border rounded-lg p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Origins</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    JPEG was created by the Joint Photographic Experts Group, a committee formed
                    in 1986 to develop a standard for digital image compression. The goal was to
                    create a format that could efficiently compress photographic images for the
                    emerging digital photography and internet eras.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Timeline</h3>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>1986</strong> - Joint Photographic Experts Group formed</li>
                      <li>• <strong>1992</strong> - JPEG standard officially released</li>
                      <li>• <strong>1994</strong> - .jpg and .jpeg file extensions standardized</li>
                      <li>• <strong>1995-2000</strong> - Becomes dominant image format for web</li>
                      <li>• <strong>2000+</strong> - Universal adoption across all digital devices</li>
                      <li>• <strong>Today</strong> - Still the most widely used image format globally</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Why JPG vs JPEG?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Both .jpg and .jpeg are identical file extensions for the same format. The
                    three-letter .jpg extension became more common because early Windows systems
                    (DOS and Windows 3.1) required three-letter file extensions. Today, both
                    extensions are widely used and completely interchangeable.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">How JPG Compression Works</h2>
            <div className="space-y-6">
              <div className="border-2 border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Lossy Compression</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  JPG uses lossy compression, meaning some image data is permanently discarded
                  during compression to achieve smaller file sizes. The compression algorithm is
                  designed to remove information that is less noticeable to the human eye, such
                  as subtle color variations and high-frequency details.
                </p>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-sm font-semibold text-foreground mb-2">
                    The Compression Process:
                  </p>
                  <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                    <li>Image is converted to YCbCr color space (separating brightness from color)</li>
                    <li>Image is divided into 8×8 pixel blocks</li>
                    <li>DCT (Discrete Cosine Transform) applied to each block</li>
                    <li>Quantization removes less visible information</li>
                    <li>Remaining data is compressed using Huffman coding</li>
                    <li>Result: Much smaller file size with controlled quality loss</li>
                  </ol>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Quality Settings</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  JPG compression quality is typically specified on a scale from 1-100 (or 0-100),
                  where higher numbers mean better quality but larger file sizes.
                </p>
                <div className="space-y-3">
                  <div className="bg-red-500/10 border-l-4 border-red-500 p-3 rounded">
                    <p className="text-sm font-semibold text-foreground">Low Quality (1-50)</p>
                    <p className="text-xs text-muted-foreground">
                      Very small files but visible compression artifacts. Not recommended for
                      most uses. Suitable only for tiny thumbnails.
                    </p>
                  </div>
                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-3 rounded">
                    <p className="text-sm font-semibold text-foreground">Medium Quality (51-75)</p>
                    <p className="text-xs text-muted-foreground">
                      Balanced file size and quality. Suitable for web images where file size
                      matters. Minor artifacts may be visible upon close inspection.
                    </p>
                  </div>
                  <div className="bg-green-500/10 border-l-4 border-green-500 p-3 rounded">
                    <p className="text-sm font-semibold text-foreground">High Quality (76-90)</p>
                    <p className="text-xs text-muted-foreground">
                      Excellent quality with minimal visible artifacts. Recommended for most photos.
                      Good balance between quality and file size. <strong>FastHEIC uses 90%.</strong>
                    </p>
                  </div>
                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-3 rounded">
                    <p className="text-sm font-semibold text-foreground">Maximum Quality (91-100)</p>
                    <p className="text-xs text-muted-foreground">
                      Near-lossless quality but with larger file sizes. Diminishing returns above
                      95%. Use for archival or professional work requiring maximum quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Technical Specifications</h3>
                <div className="bg-muted/30 rounded-lg p-4">
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Color depth:</strong> 8-bit per channel (24-bit RGB)</li>
                    <li>• <strong>Max dimensions:</strong> 65,535 × 65,535 pixels</li>
                    <li>• <strong>Color modes:</strong> Grayscale, RGB, CMYK</li>
                    <li>• <strong>Transparency:</strong> Not supported (no alpha channel)</li>
                    <li>• <strong>Animation:</strong> Not supported</li>
                    <li>• <strong>Metadata:</strong> EXIF, IPTC, XMP support</li>
                    <li>• <strong>ICC profiles:</strong> Color management supported</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Advantages */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Advantages of JPG</h2>
            <div className="grid gap-6">
              <div className="border-2 border-green-500/30 bg-green-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Universal Compatibility
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      JPG is supported by every device, operating system, web browser, and
                      image-viewing software ever created. It&apos;s the most compatible image
                      format in existence - guaranteed to work everywhere.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-green-500/30 bg-green-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💾</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Efficient Compression
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      JPG compression can reduce file sizes by 90% or more while maintaining
                      acceptable quality for most uses. This makes it ideal for web use,
                      email attachments, and storage optimization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-green-500/30 bg-green-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📸</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Excellent for Photographs
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      JPG&apos;s compression algorithm is specifically optimized for photographic
                      images with smooth color gradients and natural scenes. It handles photos
                      much better than formats designed for graphics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-green-500/30 bg-green-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Fast Processing
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      JPG compression and decompression are highly optimized and fast on all
                      devices. The format has been refined over 30+ years for maximum efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-green-500/30 bg-green-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔧</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Adjustable Quality
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      You can choose the exact quality/size tradeoff for your needs. Need
                      smaller files? Lower the quality. Need better quality? Increase it.
                      This flexibility is extremely valuable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-green-500/30 bg-green-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Metadata Support
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      JPG supports EXIF metadata for camera settings, timestamps, GPS
                      coordinates, and more. This makes it perfect for organizing and
                      cataloging photo collections.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Disadvantages */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Disadvantages of JPG</h2>
            <div className="grid gap-6">
              <div className="border-2 border-red-500/30 bg-red-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔻</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Lossy Compression
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Every time you save a JPG, quality is lost. Re-saving the same JPG
                      multiple times causes generational loss. Always keep original files
                      and only save to JPG once when you&apos;re done editing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-red-500/30 bg-red-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚫</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      No Transparency Support
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      JPG does not support transparent backgrounds or alpha channels. If you
                      need transparency, use PNG or WebP instead. JPG will replace any
                      transparent areas with a solid color (usually white).
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-red-500/30 bg-red-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📐</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Poor for Graphics & Text
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      JPG compression creates visible artifacts around sharp edges, making
                      it unsuitable for logos, diagrams, screenshots with text, or any
                      images with hard edges. Use PNG for these instead.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-red-500/30 bg-red-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Limited Color Depth
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      JPG is limited to 8-bit color per channel (24-bit RGB). Professional
                      photographers working with RAW files or HDR images may find this
                      limiting. Modern formats like HEIC support 16-bit color.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-red-500/30 bg-red-500/5 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📦</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Aging Technology
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      While reliable and universal, JPG compression technology is over 30
                      years old. Newer formats like HEIC, WebP, and AVIF offer better
                      compression efficiency with the same or better quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* When to Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">When to Use JPG vs Other Formats</h2>
            <div className="space-y-6">
              <div className="border-2 border-green-500/30 bg-green-500/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  Use JPG For:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
                  <li>• Photographs and realistic images</li>
                  <li>• Web images and blog posts</li>
                  <li>• Email attachments</li>
                  <li>• Social media posts</li>
                  <li>• Print photos</li>
                  <li>• Digital camera output</li>
                  <li>• File size is important</li>
                  <li>• Maximum compatibility needed</li>
                  <li>• Sharing across platforms</li>
                  <li>• Professional/business use</li>
                  <li>• Online portfolios</li>
                  <li>• Product photography</li>
                </ul>
              </div>

              <div className="border-2 border-blue-500/30 bg-blue-500/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-blue-500">💡</span>
                  Use PNG Instead For:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
                  <li>• Images requiring transparency</li>
                  <li>• Screenshots with text</li>
                  <li>• Logos and icons</li>
                  <li>• Diagrams and infographics</li>
                  <li>• Images with sharp edges</li>
                  <li>• Graphics with solid colors</li>
                  <li>• Need lossless quality</li>
                  <li>• Images being edited repeatedly</li>
                </ul>
              </div>

              <div className="border-2 border-purple-500/30 bg-purple-500/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-purple-500">⭐</span>
                  Consider HEIC For:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
                  <li>• iPhone photo storage</li>
                  <li>• Apple ecosystem only</li>
                  <li>• Maximizing storage space</li>
                  <li>• Personal photo archives</li>
                  <li>• iCloud syncing</li>
                  <li>• Live Photos</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">JPG Best Practices</h2>
            <div className="border-2 border-border rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 mt-1">💡</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Save Only Once</h3>
                    <p className="text-sm text-muted-foreground">
                      Always work with original files (RAW, TIFF, or PNG) and only save to JPG
                      once when you&apos;re completely done editing. Avoid re-saving JPGs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 mt-1">💡</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Use 85-90% Quality</h3>
                    <p className="text-sm text-muted-foreground">
                      For most photos, 85-90% quality provides excellent results with good
                      file size. Going above 95% offers minimal quality improvement with
                      significantly larger files.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 mt-1">💡</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Optimize for Web</h3>
                    <p className="text-sm text-muted-foreground">
                      For web use, optimize file size by reducing dimensions, using appropriate
                      quality settings, and removing unnecessary metadata. Tools like FastHEIC
                      automatically use optimal settings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 mt-1">💡</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Keep Originals</h3>
                    <p className="text-sm text-muted-foreground">
                      Always keep a backup of your original, uncompressed files. JPG is great
                      for distribution but not for archival purposes where you might want to
                      re-edit later.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary flex-shrink-0 mt-1">💡</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Preserve Metadata</h3>
                    <p className="text-sm text-muted-foreground">
                      EXIF data (timestamps, camera settings, GPS) is valuable for organizing
                      photos. Use tools that preserve metadata when converting or editing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-primary/10 border-2 border-primary/30 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Need to Convert HEIC to JPG?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              FastHEIC converts your iPhone HEIC photos to universal JPG format instantly.
              Works in your browser, completely private, with optimal quality settings.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Convert HEIC to JPG →
              </Link>
              <Link
                href="/heic-format"
                className="inline-flex items-center px-6 py-3 border-2 border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                Learn About HEIC
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
