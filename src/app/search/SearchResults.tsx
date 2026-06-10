'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface Article {
  slug: string; title: string; excerpt: string; category: string; date: string; readTime: number; keywords: string[];
}

const ICONS: Record<string, string> = {
  "Arena Decks": "🏟️", "Card Guides": "🃏", Counters: "⚔️",
  Strategy: "🧠", "Elixir Management": "💎", "Win Conditions": "👑",
  Decks: "🃏", General: "📜",
};

function Results({ articles }: { articles: Article[] }) {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Article[]>([]);

  useEffect(() => {
    if (!query) { setResults([]); return; }
    const q = query.toLowerCase();
    const filtered = articles.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.keywords.some(k => k.toLowerCase().includes(q)) ||
      a.category.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query, articles]);

  if (!query) {
    return (
      <div className="text-center py-20">
        <span className="text-6xl block mb-4">🔍</span>
        <p className="text-gray-400 text-lg">Search for deck guides, card counters, and strategy tips.</p>
        <Link href="/articles" className="inline-block mt-4 text-purple-400 hover:underline font-medium">Browse all guides →</Link>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-20">
        <span className="text-6xl block mb-4">😕</span>
        <p className="text-gray-300 text-lg">No results for &ldquo;{query}&rdquo;</p>
        <Link href="/articles" className="inline-block mt-2 text-purple-400 hover:underline">Browse all guides →</Link>
      </div>
    );
  }

  return (
    <div>
      <p className="text-gray-400 mb-6">{results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map(a => (
          <Link key={a.slug} href={`/articles/${a.slug}`}
            className="block p-5 rounded-xl bg-[#1A1028] border border-purple-900/30 hover:border-purple-500/50 hover:bg-[#1E1233] transition-all group">
            <div className="flex items-center gap-2 mb-2">
              <span>{ICONS[a.category] || '📜'}</span>
              <span className="text-xs font-medium text-purple-400/70 bg-purple-900/20 px-2 py-0.5 rounded">{a.category}</span>
            </div>
            <h3 className="text-lg font-bold text-purple-100 group-hover:text-purple-300 mb-1.5">{a.title}</h3>
            <p className="text-gray-500 text-sm line-clamp-2">{a.excerpt}</p>
            <div className="flex gap-3 mt-3 text-xs text-gray-600">
              <span>{a.date}</span>
              <span>{a.readTime} min read</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function SearchResults({ articles }: { articles: Article[] }) {
  return (
    <div className="min-h-screen bg-[#0B0614]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-purple-100 mb-2">Search Guides</h1>
        <p className="text-gray-500 mb-8">Find the best Clash Royale deck guides and strategy tips.</p>
        <Suspense fallback={<div className="text-center py-12 text-purple-400 animate-pulse">Loading...</div>}>
          <Results articles={articles} />
        </Suspense>
      </div>
    </div>
  );
}
