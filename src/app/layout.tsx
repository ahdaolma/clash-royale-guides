import type { Metadata } from "next";
import "./globals.css";
import SearchBar from "@/components/SearchBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://clash-royale-guides.vercel.app"),
  title: { default: "Clash Royale Guides | Best Decks & Strategy 2026", template: "%s | Clash Royale Guides" },
  description: "Expert Clash Royale strategy guides, best decks for every arena, card counters, and pro tips to win more battles.",
  keywords: ["Clash Royale","best decks","card guide","strategy","arena decks","counter guide","Clash Royale tips"],
  openGraph: { type: "website", siteName: "Clash Royale Guides", title: "Clash Royale Guides | Pro Decks & Strategy", description: "Win more battles with expert deck guides and strategy tips." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6600381860016497" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0F0B1A]/90 border-b border-purple-900/30">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <span className="text-2xl">⚔️</span>
              <span className="text-xl font-extrabold bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent group-hover:from-amber-400 group-hover:to-purple-400 transition-all duration-500">
                Clash Royale Guides
              </span>
            </a>
            <nav className="flex gap-8 text-sm font-medium">
              <a href="/" className="nav-link">Home</a>
              <a href="/articles" className="nav-link">All Guides</a>
              <a href="/#categories" className="nav-link">Categories</a>
            </nav>
            <SearchBar placeholder="Search card or deck..." className="w-48" />
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-purple-900/30 bg-[#0A0614] py-12 mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-bold text-purple-300 mb-3">⚔️ Clash Royale Guides</h4>
                <p className="text-gray-500 text-sm">Expert strategy guides, deck builds, and card counters to dominate every arena.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-purple-300 mb-3">Quick Links</h4>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="/articles" className="text-gray-400 hover:text-purple-300">All Guides</a>
                  <a href="/category/decks" className="text-gray-400 hover:text-purple-300">Best Decks</a>
                  <a href="/category/counters" className="text-gray-400 hover:text-purple-300">Counter Guides</a>
                  <a href="/category/arena-decks" className="text-gray-400 hover:text-purple-300">Arena Decks</a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-purple-300 mb-3">Info</h4>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="/privacy" className="text-gray-400 hover:text-purple-300">Privacy Policy</a>
                  <a href="/terms" className="text-gray-400 hover:text-purple-300">Terms of Service</a>
                  <a href="/sitemap.xml" className="text-gray-400 hover:text-purple-300">Sitemap</a>
                </div>
              </div>
            </div>
            <div className="border-t border-purple-900/20 pt-6 text-center text-sm text-gray-600">
              <p>@ {new Date().getFullYear()} Clash Royale Guides. This site is not affiliated with Supercell. Clash Royale is a trademark of Supercell Oy.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

