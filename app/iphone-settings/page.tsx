import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "iPhone Camera Settings - How to Capture JPG Instead of HEIC",
  description: "Step-by-step guide to change your iPhone camera settings to capture photos in JPG format instead of HEIC. Compatible with all iPhone models running iOS 11 or later.",
  keywords: "iPhone JPG settings, disable HEIC iPhone, iPhone camera format, change HEIC to JPG iPhone, iOS camera settings, iPhone photo format, most compatible format iPhone",
  openGraph: {
    title: "iPhone Camera Settings - How to Capture JPG Instead of HEIC",
    description: "Step-by-step guide to change your iPhone camera settings to capture photos in JPG format instead of HEIC.",
  },
};

export default function IPhoneSettings() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            How to Set iPhone Camera to Capture JPG
          </h1>

          <div className="bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-800 p-6 rounded-lg mb-8">
            <p className="text-foreground font-medium mb-2">
              📱 Quick Summary
            </p>
            <p className="text-muted-foreground text-base">
              If you prefer your iPhone to capture photos directly in JPG format instead of HEIC, 
              you can change this in your Settings. This ensures maximum compatibility with older 
              devices and software that don&apos;t support HEIC files.
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            {/* Step-by-Step Instructions */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Step-by-Step Instructions
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0 mt-1">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2 text-xl">
                      Open Settings App
                    </h3>
                    <p className="text-muted-foreground">
                      Tap the <strong>Settings</strong> app icon on your iPhone&apos;s home screen 
                      (the gray gear icon).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0 mt-1">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2 text-xl">
                      Go to Camera Settings
                    </h3>
                    <p className="text-muted-foreground">
                      Scroll down and tap <strong>Camera</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0 mt-1">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2 text-xl">
                      Select Formats
                    </h3>
                    <p className="text-muted-foreground">
                      Tap <strong>Formats</strong> near the top of the Camera settings screen.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0 mt-1">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2 text-xl">
                      Choose Most Compatible
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Under the CAMERA CAPTURE section, you&apos;ll see two options:
                    </p>
                    <div className="border-2 border-border rounded-lg p-4 space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 font-bold text-lg">✓</span>
                        <div>
                          <p className="font-semibold text-foreground">Most Compatible</p>
                          <p className="text-sm text-muted-foreground">
                            Select this option to capture photos in JPG format and videos in H.264 format.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-gray-400 font-bold text-lg">○</span>
                        <div>
                          <p className="font-semibold text-foreground">High Efficiency</p>
                          <p className="text-sm text-muted-foreground">
                            This is the HEIC format (default). Smaller file sizes but less compatible.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2 text-xl">
                      Done!
                    </h3>
                    <p className="text-muted-foreground">
                      Your iPhone will now capture all new photos in JPG format. The change takes 
                      effect immediately - no restart needed.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Notes */}
            <section className="border-2 border-border p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Important Notes
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                    Existing Photos Won&apos;t Change
                  </h3>
                  <p className="text-sm text-muted-foreground ml-6">
                    Photos you&apos;ve already taken in HEIC format will remain as HEIC. Only new photos 
                    will be captured in JPG format. If you need to convert existing HEIC photos, use our 
                    converter tool on the homepage.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    Larger File Sizes
                  </h3>
                  <p className="text-sm text-muted-foreground ml-6">
                    JPG files are typically larger than HEIC files (about 2x the size). This means your 
                    photos will take up more storage space on your iPhone and iCloud.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                    Better Compatibility
                  </h3>
                  <p className="text-sm text-muted-foreground ml-6">
                    JPG is universally supported by all devices, operating systems, and software. You won&apos;t 
                    encounter compatibility issues when sharing photos with non-Apple devices.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    iOS Version Requirement
                  </h3>
                  <p className="text-sm text-muted-foreground ml-6">
                    This setting is available on iPhones running iOS 11 or later. If you don&apos;t see the 
                    Formats option, make sure your iPhone is updated to the latest iOS version.
                  </p>
                </div>
              </div>
            </section>

            {/* Comparison Table */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                HEIC vs JPG Comparison
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-2 border-border rounded-lg">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800">
                      <th className="border border-border p-3 text-left text-foreground">Feature</th>
                      <th className="border border-border p-3 text-left text-foreground">HEIC (High Efficiency)</th>
                      <th className="border border-border p-3 text-left text-foreground">JPG (Most Compatible)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium text-foreground">File Size</td>
                      <td className="border border-border p-3 text-muted-foreground">Smaller (50% less)</td>
                      <td className="border border-border p-3 text-muted-foreground">Larger</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium text-foreground">Compatibility</td>
                      <td className="border border-border p-3 text-muted-foreground">Apple devices & newer systems</td>
                      <td className="border border-border p-3 text-muted-foreground">Universal (all devices)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium text-foreground">Image Quality</td>
                      <td className="border border-border p-3 text-muted-foreground">Excellent</td>
                      <td className="border border-border p-3 text-muted-foreground">Excellent</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium text-foreground">Sharing</td>
                      <td className="border border-border p-3 text-muted-foreground">May need conversion</td>
                      <td className="border border-border p-3 text-muted-foreground">Works everywhere</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium text-foreground">Storage Impact</td>
                      <td className="border border-border p-3 text-muted-foreground">More photos fit on device</td>
                      <td className="border border-border p-3 text-muted-foreground">Fewer photos fit on device</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Alternative Method */}
            <section className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Already Have HEIC Photos?
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have existing HEIC photos that you need to convert to JPG, you don&apos;t need to 
                change your camera settings and retake them. Use our free converter tool instead!
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="font-semibold text-foreground">Fast & Free</p>
                    <p className="text-sm text-muted-foreground">Convert unlimited files instantly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <p className="font-semibold text-foreground">100% Private</p>
                    <p className="text-sm text-muted-foreground">Files never leave your device</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-semibold text-foreground">Batch Convert</p>
                    <p className="text-sm text-muted-foreground">Convert multiple files at once</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💯</span>
                  <div>
                    <p className="font-semibold text-foreground">No Upload</p>
                    <p className="text-sm text-muted-foreground">Works entirely in your browser</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Convert HEIC to JPG Now →
            </Link>
            <div className="text-sm text-muted-foreground">
              <Link href="/how-it-works" className="hover:text-foreground underline">
                Learn how our converter works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
