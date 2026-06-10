import { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "All Guides | Clash Royale Guides",
  description: "Browse 100+ expert Clash Royale deck guides, card counters, and arena strategies.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-purple-100 mb-2">All Guides</h1>
      <p className="text-gray-500 mb-8">{articles.length} guides covering every arena and card in Clash Royale.</p>
      <AdSlot id="articles-top" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
