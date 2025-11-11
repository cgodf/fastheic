import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HEIC to JPG Use Cases - When You Need to Convert | FastHEIC",
  description:
    "Discover when and why you need to convert HEIC to JPG. Real-world use cases for sharing iPhone photos, professional workflows, web uploads, and cross-platform compatibility.",
  keywords: "HEIC use cases, when to convert HEIC, HEIC to JPG scenarios, iPhone photo sharing, cross-platform photos, HEIC compatibility issues",
  openGraph: {
    title: "HEIC to JPG Use Cases - When You Need to Convert | FastHEIC",
    description:
      "Discover when and why you need to convert HEIC to JPG. Real-world use cases for sharing iPhone photos, professional workflows, and web uploads.",
  },
};

export default function UseCases() {
  const useCases = [
    {
      icon: "📱",
      title: "Sharing iPhone Photos with Android Users",
      problem: "Your friend or family member has an Android phone and can't open the HEIC photos you sent them.",
      solution: "Convert HEIC to JPG before sharing via messaging apps, email, or social media. JPG works universally across all devices and platforms.",
      details: "Android devices don't natively support HEIC format. When you share photos directly from your iPhone, Android users may see broken images or receive an error. Converting to JPG ensures your photos are viewable on any device.",
      bestPractice: "Convert photos before sending, or use FastHEIC on your iPhone directly before sharing."
    },
    {
      icon: "💻",
      title: "Uploading Photos to Websites",
      problem: "Many websites and CMS platforms (WordPress, Wix, Squarespace) don't accept HEIC files.",
      solution: "Convert to JPG for universal web compatibility. JPG is the standard format for web images.",
      details: "Most content management systems, website builders, and online platforms only accept JPG, PNG, or GIF files. Even if a site technically supports HEIC, older browsers won't display them. JPG ensures your images work everywhere.",
      bestPractice: "Always convert HEIC to JPG before uploading to websites, blogs, or online portfolios."
    },
    {
      icon: "🏢",
      title: "Professional Work & Business Documents",
      problem: "Clients, colleagues, or business systems can't open your photo attachments.",
      solution: "Use JPG for professional communications to ensure compatibility across all business systems.",
      details: "Corporate systems, shared drives, and business software often don't support HEIC. Converting to JPG ensures your images are accessible to everyone in your organization, regardless of their device or system.",
      bestPractice: "Convert product photos, documentation images, and business materials to JPG before sharing with clients or colleagues."
    },
    {
      icon: "🏠",
      title: "Real Estate Listings & Property Photos",
      problem: "MLS systems and real estate platforms require JPG format for property photos.",
      solution: "Convert all property photos from HEIC to JPG for MLS compatibility.",
      details: "Multiple Listing Service (MLS) platforms and real estate websites require JPG format. HEIC photos won't upload or will be rejected. Converting to JPG ensures your listings display properly across all real estate platforms.",
      bestPractice: "Establish a workflow: capture photos → convert to JPG → upload to MLS/listing sites."
    },
    {
      icon: "📧",
      title: "Email Attachments",
      problem: "Recipients on Windows, Linux, or older systems can't view your photo attachments.",
      solution: "Convert to JPG before attaching to emails for universal compatibility.",
      details: "While modern email clients handle HEIC, recipients using older email programs, Windows 7/8, or Linux systems may not be able to view HEIC attachments. JPG works in every email client since the 1990s.",
      bestPractice: "Convert photos to JPG before attaching to ensure all recipients can view them without issues."
    },
    {
      icon: "📱",
      title: "Social Media Posting",
      problem: "Some social platforms don't support HEIC or convert poorly, reducing quality.",
      solution: "Pre-convert to JPG to control quality and ensure proper uploads.",
      details: "While major platforms like Facebook and Instagram now support HEIC, the automatic conversion may reduce quality more than necessary. Converting yourself at 90% quality gives you control over the final result.",
      bestPractice: "For best quality on social media, convert to JPG at high quality settings before uploading."
    },
    {
      icon: "🖼️",
      title: "Online Printing Services",
      problem: "Photo printing websites and services require JPG or TIFF formats.",
      solution: "Convert HEIC to JPG before uploading to printing services.",
      details: "Services like Shutterfly, Snapfish, Costco Photo, and local print shops typically only accept JPG files. HEIC uploads will fail or be rejected. Converting to JPG ensures your prints are processed correctly.",
      bestPractice: "Convert at highest quality (90-95%) when printing to preserve detail in physical prints."
    },
    {
      icon: "💼",
      title: "Job Applications & Resumes",
      problem: "Application systems can't process HEIC files for ID photos or portfolio images.",
      solution: "Always use JPG for professional applications and submissions.",
      details: "HR systems, applicant tracking software, and government portals require standard formats. HEIC uploads will likely fail validation. JPG is universally accepted for headshots, portfolio work, and ID photos.",
      bestPractice: "Keep professional photos in JPG format for quick access when applying for jobs or submitting documents."
    },
    {
      icon: "🎓",
      title: "Educational & Academic Use",
      problem: "Learning management systems (Canvas, Blackboard) may not support HEIC.",
      solution: "Convert educational content, assignments, and project photos to JPG.",
      details: "School and university platforms often have strict file format requirements. HEIC files might not upload or display properly for professors and classmates. JPG ensures your assignments are viewable on any system.",
      bestPractice: "Convert all assignment photos and educational materials to JPG before submitting."
    },
    {
      icon: "🏥",
      title: "Medical & Healthcare Documentation",
      problem: "Healthcare systems require specific formats, often JPG or DICOM.",
      solution: "Convert medical photos to JPG for electronic health records compatibility.",
      details: "Hospital systems, telemedicine platforms, and medical records software typically don't support HEIC. Converting photos of injuries, symptoms, or medical conditions to JPG ensures they can be properly stored in your records.",
      bestPractice: "Convert medical photos to JPG immediately and back them up securely."
    },
    {
      icon: "⚖️",
      title: "Legal Documentation & Evidence",
      problem: "Court systems and legal software require widely accepted file formats.",
      solution: "Convert to JPG for legal documentation and evidence submission.",
      details: "Legal systems, e-filing platforms, and court evidence management require standard formats. HEIC may not be accepted or viewable by court systems. JPG is universally accepted in legal proceedings.",
      bestPractice: "Convert all photographic evidence to JPG with timestamps preserved."
    },
    {
      icon: "🛒",
      title: "E-commerce & Online Selling",
      problem: "Marketplaces like eBay, Etsy, Amazon require JPG for product photos.",
      solution: "Convert all product photos to JPG before listing items for sale.",
      details: "E-commerce platforms have strict image format requirements. HEIC uploads will be rejected. JPG is the standard for product listings across all online marketplaces.",
      bestPractice: "Build a product photo workflow: capture → convert to JPG → upload to marketplace."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            When Do You Need to Convert HEIC to JPG?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world scenarios where converting HEIC to JPG solves compatibility problems
            and ensures your photos work everywhere
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-primary/10 border-2 border-primary/30 rounded-lg p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Why HEIC Compatibility Matters
            </h2>
            <p className="text-muted-foreground mb-4">
              While HEIC (High Efficiency Image Container) is Apple&apos;s modern standard for
              iPhone photos, it&apos;s not universally supported across all devices, platforms,
              and systems. Converting to JPG ensures your photos are viewable and usable
              everywhere.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🌍</div>
                <div className="font-semibold text-foreground">Universal</div>
                <div className="text-sm text-muted-foreground">JPG works everywhere</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-semibold text-foreground">Fast</div>
                <div className="text-sm text-muted-foreground">Convert in seconds</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🔒</div>
                <div className="font-semibold text-foreground">Private</div>
                <div className="text-sm text-muted-foreground">Local processing only</div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="space-y-8 mb-12">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="border-2 border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{useCase.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {useCase.title}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-red-500 font-semibold text-sm">❌ Problem:</span>
                      </div>
                      <p className="text-muted-foreground text-sm pl-6">
                        {useCase.problem}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-green-500 font-semibold text-sm">✅ Solution:</span>
                      </div>
                      <p className="text-muted-foreground text-sm pl-6">
                        {useCase.solution}
                      </p>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        {useCase.details}
                      </p>
                      <div className="flex items-start gap-2">
                        <span className="text-primary flex-shrink-0 mt-0.5">💡</span>
                        <p className="text-sm text-foreground font-medium">
                          <strong>Best Practice:</strong> {useCase.bestPractice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Reference Guide */}
        <div className="bg-muted/30 border-2 border-border rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Quick Reference: When to Convert
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-green-500">✅</span>
                Always Convert When:
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Sharing with Android users</li>
                <li>• Uploading to websites or CMS</li>
                <li>• Sending to Windows/Linux users</li>
                <li>• Submitting to online platforms</li>
                <li>• Using for professional work</li>
                <li>• Sending via email</li>
                <li>• Uploading to print services</li>
                <li>• Posting to older social platforms</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-blue-500">ℹ️</span>
                Keep HEIC When:
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Staying in Apple ecosystem</li>
                <li>• Need to save storage space</li>
                <li>• Using iCloud Photo Library</li>
                <li>• Sharing via AirDrop to Mac/iPhone</li>
                <li>• Archiving for future use</li>
                <li>• Personal photo library</li>
                <li>• Not sharing externally</li>
                <li>• Working between Apple devices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/10 border-2 border-primary/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Convert Your HEIC Files?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            FastHEIC converts your photos instantly in your browser. No uploads, completely
            private, and works on any device.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Converting Now →
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center px-6 py-3 border-2 border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
            >
              Learn How It Works
            </Link>
          </div>
        </div>

        {/* Related Pages */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link
            href="/faq"
            className="border-2 border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
          >
            <h3 className="font-semibold text-foreground mb-2">FAQ</h3>
            <p className="text-sm text-muted-foreground">
              Common questions about HEIC conversion
            </p>
          </Link>
          <Link
            href="/how-it-works"
            className="border-2 border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
          >
            <h3 className="font-semibold text-foreground mb-2">How It Works</h3>
            <p className="text-sm text-muted-foreground">
              Learn about our local conversion process
            </p>
          </Link>
          <Link
            href="/privacy"
            className="border-2 border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
          >
            <h3 className="font-semibold text-foreground mb-2">Privacy</h3>
            <p className="text-sm text-muted-foreground">
              Why local processing is more secure
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
