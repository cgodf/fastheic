import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Transfer Large Photo Collections | FastHEIC",
  description:
    "Complete guide to transferring large photo collections between devices and services. Compare methods, pros and cons, and best practices for moving thousands of photos efficiently.",
  keywords: "transfer photos, move photos, large photo collection, photo migration, transfer photos between devices, photo transfer methods, bulk photo transfer",
  openGraph: {
    title: "How to Transfer Large Photo Collections | FastHEIC",
    description:
      "Complete guide to transferring large photo collections with pros and cons of different methods.",
  },
};

export default function TransferPhotos() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How to Transfer Large Photo Collections
          </h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive guide to moving thousands of photos efficiently
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-primary/10 border-2 border-primary/30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Transferring large photo collections—whether moving from one device to another,
                migrating to a new service, or creating backups—presents unique challenges. With
                modern cameras and phones producing high-resolution images, a collection can easily
                reach tens or hundreds of gigabytes. This guide covers the most effective methods
                for transferring large photo collections, their advantages, disadvantages, and
                when to use each approach.
              </p>
            </div>
          </section>

          {/* Transfer Methods */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Transfer Methods</h2>
            
            {/* Direct Cable Connection */}
            <div className="border-2 border-border rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-2xl">🔌</span>
                <span>Direct Cable Connection</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Connecting devices directly via USB cable (or Lightning/USB-C) for file transfer.
                This is the traditional method for moving files between computers and mobile devices.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span>✓</span>
                    <span>Pros</span>
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Fastest transfer speeds (USB 3.0+ can reach 5+ Gbps)</li>
                    <li>• No internet connection required</li>
                    <li>• No data usage or bandwidth limits</li>
                    <li>• Direct control over what gets transferred</li>
                    <li>• Can transfer very large files without issues</li>
                    <li>• No ongoing subscription costs</li>
                    <li>• Works offline completely</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span>✗</span>
                    <span>Cons</span>
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Requires physical access to both devices</li>
                    <li>• Need compatible cables and ports</li>
                    <li>• Can be slow with USB 2.0 or older</li>
                    <li>• May require drivers or software installation</li>
                    <li>• Not suitable for remote transfers</li>
                    <li>• Devices must be in same location</li>
                    <li>• Some mobile devices require special software</li>
                  </ul>
                </div>
              </div>
              <div className="bg-muted/30 rounded-lg p-4 mt-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Best for:</strong> Large local transfers,
                  initial device setup, one-time migrations, when you have both devices in hand.
                  Ideal for transferring 50GB+ collections quickly.
                </p>
              </div>
            </div>

            {/* Cloud Sync Services */}
            <div className="border-2 border-border rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-2xl">☁️</span>
                <span>Cloud Sync Services</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Using cloud storage services that automatically sync files across devices. Photos
                uploaded to one device become available on all connected devices.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span>✓</span>
                    <span>Pros</span>
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Automatic syncing across all devices</li>
                    <li>• Access photos from anywhere</li>
                    <li>• No cables or physical connection needed</li>
                    <li>• Can transfer between remote locations</li>
                    <li>• Built-in backup protection</li>
                    <li>• Often includes photo organization features</li>
                    <li>• Can resume interrupted transfers</li>
                    <li>• Works in background automatically</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span>✗</span>
                    <span>Cons</span>
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Requires reliable internet connection</li>
                    <li>• Initial upload can take days for large collections</li>
                    <li>• Ongoing subscription costs</li>
                    <li>• Speed limited by internet upload speed</li>
                    <li>• May consume data plan bandwidth</li>
                    <li>• Privacy concerns (photos stored on third-party servers)</li>
                    <li>• Can be interrupted by connection issues</li>
                    <li>• May have file size or quantity limits</li>
                  </ul>
                </div>
              </div>
              <div className="bg-muted/30 rounded-lg p-4 mt-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Best for:</strong> Ongoing syncing between
                  multiple devices, remote access, automatic backups, when you have good internet
                  and time to wait for initial upload. Less ideal for one-time large transfers.
                </p>
              </div>
            </div>

            {/* Network Transfer (Wi-Fi/Local Network) */}
            <div className="border-2 border-border rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-2xl">📡</span>
                <span>Network Transfer (Wi-Fi/Local Network)</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Transferring files over a local Wi-Fi network using file sharing protocols, network
                drives, or peer-to-peer transfer apps. Both devices connect to the same network.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span>✓</span>
                    <span>Pros</span>
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• No cables required</li>
                    <li>• Faster than internet upload (local network speeds)</li>
                    <li>• No data usage (stays on local network)</li>
                    <li>• Can transfer multiple devices simultaneously</li>
                    <li>• No subscription costs</li>
                    <li>• More flexible than cables (devices can be in different rooms)</li>
                    <li>• Can use existing network infrastructure</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span>✗</span>
                    <span>Cons</span>
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Requires both devices on same network</li>
                    <li>• Speed depends on Wi-Fi quality (slower than cable)</li>
                    <li>• May require network configuration</li>
                    <li>• Can be interrupted by network issues</li>
                    <li>• Security concerns on public networks</li>
                    <li>• Some methods require technical setup</li>
                    <li>• Slower than direct cable connection</li>
                  </ul>
                </div>
              </div>
              <div className="bg-muted/30 rounded-lg p-4 mt-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Best for:</strong> Transfers within the same
                  location, when cables aren&apos;t convenient, multiple device transfers, home
                  networks. Good balance of speed and convenience.
                </p>
              </div>
            </div>

            {/* External Storage Device */}
            <div className="border-2 border-border rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-2xl">💿</span>
                <span>External Storage Device (USB Drive, External HDD/SSD)</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Copying photos to an external hard drive, SSD, or USB flash drive, then connecting
                it to the destination device. Acts as a portable intermediary.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span>✓</span>
                    <span>Pros</span>
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Very fast transfer speeds (especially with USB 3.0+ and SSDs)</li>
                    <li>• No internet required</li>
                    <li>• Portable - can move between any locations</li>
                    <li>• Can verify files before disconnecting</li>
                    <li>• Works with any compatible device</li>
                    <li>• Can serve as backup during transfer</li>
                    <li>• One-time purchase, reusable</li>
                    <li>• Can transfer between incompatible devices</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span>✗</span>
                    <span>Cons</span>
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Requires purchasing storage device</li>
                    <li>• Two-step process (copy to device, then copy from device)</li>
                    <li>• Physical device can be lost or damaged</li>
                    <li>• Need sufficient capacity for entire collection</li>
                    <li>• Requires compatible ports on both devices</li>
                    <li>• Some mobile devices need adapters</li>
                    <li>• Risk of data loss if device fails during transfer</li>
                  </ul>
                </div>
              </div>
              <div className="bg-muted/30 rounded-lg p-4 mt-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Best for:</strong> Large one-time transfers,
                  when devices can&apos;t connect directly, creating portable backups, transferring
                  between incompatible systems. Excellent for 100GB+ collections.
                </p>
              </div>
            </div>

            {/* Email/Messaging Services */}
            <div className="border-2 border-border rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-2xl">📧</span>
                <span>Email or Messaging Services</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sending photos via email attachments or messaging apps. Some services offer file
                sharing with larger size limits.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span>✓</span>
                    <span>Pros</span>
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• No additional hardware needed</li>
                    <li>• Works from anywhere with internet</li>
                    <li>• Familiar interface for most users</li>
                    <li>• Can send to multiple recipients</li>
                    <li>• Some services offer large file transfer options</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span>✗</span>
                    <span>Cons</span>
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Very small file size limits (typically 25MB for email)</li>
                    <li>• Completely impractical for large collections</li>
                    <li>• Requires many separate messages</li>
                    <li>• Slow and tedious process</li>
                    <li>• Photos may be compressed or resized</li>
                    <li>• Not suitable for bulk transfers</li>
                    <li>• Can hit sending limits</li>
                  </ul>
                </div>
              </div>
              <div className="bg-muted/30 rounded-lg p-4 mt-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Best for:</strong> Small batches of photos
                  (under 25MB), quick sharing of a few images, not recommended for large
                  collections. Consider only for very small transfers.
                </p>
              </div>
            </div>

            {/* Peer-to-Peer Transfer Apps */}
            <div className="border-2 border-border rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-2xl">📱</span>
                <span>Peer-to-Peer Transfer Apps</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mobile apps that create direct connections between devices for file transfer, often
                using Wi-Fi Direct or Bluetooth. Designed specifically for device-to-device
                transfers.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span>✓</span>
                    <span>Pros</span>
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• No cables needed</li>
                    <li>• Fast local transfers</li>
                    <li>• Easy to use mobile interfaces</li>
                    <li>• No internet required (uses Wi-Fi Direct)</li>
                    <li>• Can transfer entire photo libraries</li>
                    <li>• Often free to use</li>
                    <li>• Designed for mobile-to-mobile transfers</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span>✗</span>
                    <span>Cons</span>
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Primarily for mobile devices</li>
                    <li>• Requires installing app on both devices</li>
                    <li>• Devices must be in close proximity</li>
                    <li>• Speed depends on Wi-Fi Direct capabilities</li>
                    <li>• May not preserve all metadata</li>
                    <li>• Some apps have file size limits</li>
                    <li>• Less reliable than cable for very large transfers</li>
                  </ul>
                </div>
              </div>
              <div className="bg-muted/30 rounded-lg p-4 mt-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Best for:</strong> Mobile-to-mobile transfers,
                  when both devices are phones/tablets, quick transfers between nearby devices.
                  Good for moderate-sized collections (under 50GB).
                </p>
              </div>
            </div>
          </section>

          {/* Speed Comparison */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Transfer Speed Comparison</h2>
            <div className="border-2 border-border rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Approximate time to transfer a 50GB photo collection (actual speeds vary based on
                hardware, file sizes, and network conditions):
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <div className="font-semibold text-foreground">USB 3.0 Cable (Direct)</div>
                    <div className="text-sm text-muted-foreground">SSD to SSD</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground">~2-5 minutes</div>
                    <div className="text-sm text-muted-foreground">Fastest</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <div className="font-semibold text-foreground">External SSD (USB 3.0)</div>
                    <div className="text-sm text-muted-foreground">Two-step process</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground">~5-10 minutes</div>
                    <div className="text-sm text-muted-foreground">Very Fast</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <div className="font-semibold text-foreground">Gigabit Wi-Fi (Local Network)</div>
                    <div className="text-sm text-muted-foreground">Both devices on same network</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground">~10-20 minutes</div>
                    <div className="text-sm text-muted-foreground">Fast</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <div className="font-semibold text-foreground">External HDD (USB 3.0)</div>
                    <div className="text-sm text-muted-foreground">Two-step process</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground">~15-30 minutes</div>
                    <div className="text-sm text-muted-foreground">Moderate</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <div className="font-semibold text-foreground">Cloud Upload (100 Mbps)</div>
                    <div className="text-sm text-muted-foreground">Typical home internet</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground">~1-2 hours</div>
                    <div className="text-sm text-muted-foreground">Slow</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <div className="font-semibold text-foreground">Cloud Upload (10 Mbps)</div>
                    <div className="text-sm text-muted-foreground">Slower internet connection</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground">~12-24 hours</div>
                    <div className="text-sm text-muted-foreground">Very Slow</div>
                  </div>
                </div>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> These are estimates for ideal
                  conditions. Actual transfer times depend on file sizes (many small files transfer
                  slower than fewer large files), device performance, network congestion, and other
                  factors. For very large collections (200GB+), cable or external drive methods
                  are significantly faster than cloud uploads.
                </p>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Best Practices for Large Transfers</h2>
            <div className="space-y-6">
              <div className="border-2 border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Before Transferring</h3>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Organize First</h4>
                      <p className="text-sm text-muted-foreground">
                        Clean up and organize your photos before transferring. Delete duplicates,
                        unwanted photos, and organize into folders. This reduces transfer size and
                        makes the destination library cleaner.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Verify Storage Space</h4>
                      <p className="text-sm text-muted-foreground">
                        Ensure the destination has enough free space. Calculate your collection size
                        and add 20% buffer for safety. Running out of space mid-transfer can corrupt
                        the process.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Check File Formats</h4>
                      <p className="text-sm text-muted-foreground">
                        Verify that the destination device or service supports your photo formats.
                        Some formats (like HEIC) may need conversion before transfer to ensure
                        compatibility.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Create a Backup</h4>
                      <p className="text-sm text-muted-foreground">
                        Before transferring, ensure you have a backup of your original photos.
                        Transfers can fail, and having a backup protects against data loss.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">During Transfer</h3>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Don&apos;t Interrupt</h4>
                      <p className="text-sm text-muted-foreground">
                        Let the transfer complete without interruption. Closing apps, putting devices
                        to sleep, or unplugging cables can corrupt the transfer or lose data.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Monitor Progress</h4>
                      <p className="text-sm text-muted-foreground">
                        Watch for errors or warnings during transfer. Many transfer tools show
                        progress and will alert you to problems. Address issues immediately.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Use Reliable Connections</h4>
                      <p className="text-sm text-muted-foreground">
                        For network transfers, ensure a stable connection. Use wired connections
                        when possible for large transfers. Avoid transferring over unreliable Wi-Fi
                        or cellular data.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Transfer in Batches</h4>
                      <p className="text-sm text-muted-foreground">
                        For very large collections, consider transferring in batches. This makes it
                        easier to verify each batch completed successfully and reduces risk of
                        losing everything if something goes wrong.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">After Transfer</h3>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Verify File Count</h4>
                      <p className="text-sm text-muted-foreground">
                        Check that the number of files transferred matches the source. Count files
                        or compare folder sizes to ensure nothing was missed.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Spot Check Photos</h4>
                      <p className="text-sm text-muted-foreground">
                        Open a random sample of transferred photos to verify they open correctly
                        and aren&apos;t corrupted. Check photos from different time periods and
                        folders.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Verify Metadata</h4>
                      <p className="text-sm text-muted-foreground">
                        Check that photo metadata (dates, locations, etc.) transferred correctly.
                        Some transfer methods may lose or alter metadata.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Keep Original Until Verified</h4>
                      <p className="text-sm text-muted-foreground">
                        Don&apos;t delete originals immediately. Keep them for at least a few weeks
                        to ensure the transfer was successful and you can access everything you need.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Choosing the Right Method */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Choosing the Right Method</h2>
            <div className="border-2 border-border rounded-lg p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    For Large Collections (100GB+)
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    <strong className="text-foreground">Recommended:</strong> Direct cable
                    connection or external SSD. These methods offer the fastest speeds and most
                    reliable transfers for very large collections.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong className="text-foreground">Avoid:</strong> Cloud uploads (too slow),
                    email/messaging (impractical), Wi-Fi for very large transfers (less reliable).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    For Ongoing Syncing
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    <strong className="text-foreground">Recommended:</strong> Cloud sync services.
                    Once initial upload completes, automatic syncing keeps everything up to date
                    across devices.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong className="text-foreground">Consider:</strong> Initial upload via cable
                    or external drive, then switch to cloud sync for ongoing updates.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    For Mobile-to-Mobile
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    <strong className="text-foreground">Recommended:</strong> Peer-to-peer transfer
                    apps or cloud sync. These are designed for mobile devices and work well for
                    phone-to-phone transfers.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong className="text-foreground">Alternative:</strong> External drive with
                    USB adapter if you need to transfer very large collections.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    For Remote Locations
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    <strong className="text-foreground">Recommended:</strong> Cloud sync or
                    external drive shipped between locations. Cloud is automatic but slow; external
                    drive is fast but requires physical shipping.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong className="text-foreground">Hybrid:</strong> Use external drive for
                    initial large transfer, then cloud sync for ongoing updates.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    For Maximum Speed
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    <strong className="text-foreground">Recommended:</strong> Direct USB 3.0+ cable
                    connection between devices with SSDs. This is the fastest method available.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong className="text-foreground">Second best:</strong> External SSD via
                    USB 3.0+ as intermediary.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Issues */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Common Issues and Solutions</h2>
            <div className="space-y-4">
              <div className="border-2 border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Transfer Fails or Interrupts</h3>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Solution:</strong> Use transfer software that
                  supports resume functionality. For large transfers, break into smaller batches.
                  Ensure stable power and connections. Check for sufficient storage space.
                </p>
              </div>
              <div className="border-2 border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Very Slow Transfer Speeds</h3>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Solution:</strong> Check connection type
                  (USB 2.0 is much slower than USB 3.0+). For network transfers, use wired
                  connection instead of Wi-Fi. Close other applications using bandwidth. For cloud
                  uploads, consider upgrading internet plan or using external drive method instead.
                </p>
              </div>
              <div className="border-2 border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Photos Missing After Transfer</h3>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Solution:</strong> Verify file count before
                  and after. Check hidden files and system folders. Some transfer methods may skip
                  certain file types. Use transfer software with verification features. Keep
                  originals until you confirm everything transferred.
                </p>
              </div>
              <div className="border-2 border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Metadata Lost</h3>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Solution:</strong> Use transfer methods that
                  preserve metadata. Some cloud services or transfer apps may strip metadata. Test
                  with a small batch first. Consider using professional transfer software for
                  metadata preservation.
                </p>
              </div>
              <div className="border-2 border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Format Compatibility Issues</h3>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Solution:</strong> Convert unsupported
                  formats before transfer. HEIC files may need conversion to JPG for broader
                  compatibility. Check destination device format support before transferring.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <div className="bg-primary/10 border-2 border-primary/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Summary</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The best transfer method depends on your specific situation: collection size,
                device types, internet speed, and whether you need one-time or ongoing transfers.
                For large one-time transfers, direct cable or external drive methods are fastest.
                For ongoing syncing across devices, cloud services work well once initial upload
                completes. Always verify transfers completed successfully and keep backups until
                you&apos;re certain everything transferred correctly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Remember: The fastest method isn&apos;t always the most convenient. Balance speed,
                convenience, and reliability based on your needs. For very large collections, the
                time investment in using the fastest method (cable or external drive) is usually
                worth it compared to waiting days for cloud uploads.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-primary/10 border-2 border-primary/30 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Need to Convert Photos Before Transferring?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you need to convert HEIC files to JPG for better compatibility during transfer,
              FastHEIC can help. Convert instantly in your browser with complete privacy before
              transferring your photos.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Convert HEIC to JPG →
              </Link>
              <Link
                href="/photo-storage-backup"
                className="inline-flex items-center px-6 py-3 border-2 border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                Learn About Photo Backup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

