import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FeaturedArticle } from './components/FeaturedArticle';
import { ArticleCard } from './components/ArticleCard';
import { ArticleDetail } from './components/ArticleDetail';
import { ARTICLES } from './constants';
import { Article } from './types';

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'tech', 'design'
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleArticleSelect = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { // Cleanup on unmount
      document.body.style.overflow = 'auto';
    };
  }, [selectedArticle]);
  
  const featuredArticle = ARTICLES.find(a => a.category === 'UI/UX Дизайн') || ARTICLES[0];
  
  let displayedArticles: Article[];
  let sectionTitle: string;

  if (activeFilter === 'all') {
    displayedArticles = ARTICLES.filter(a => a.id !== featuredArticle.id);
    sectionTitle = "Недавние посты";
  } else if (activeFilter === 'tech') {
    displayedArticles = ARTICLES.filter(article => article.category !== 'UI/UX Дизайн');
    sectionTitle = "Категория: Технологии";
  } else { // design
    displayedArticles = ARTICLES.filter(article => article.category === 'UI/UX Дизайн');
    sectionTitle = "Категория: Дизайн";
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          {activeFilter === 'all' && (
            <section className="mb-12">
              <FeaturedArticle article={featuredArticle} onArticleSelect={handleArticleSelect} />
            </section>
          )}

          <section>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-8 border-b-2 border-indigo-500 pb-2">
              {sectionTitle}
            </h2>
            {displayedArticles.length > 0 ? (
              <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {displayedArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} onArticleSelect={handleArticleSelect} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                Нет статей в этой категории.
              </p>
            )}
          </section>

        </div>
      </main>
      <Footer />
      {selectedArticle && <ArticleDetail article={selectedArticle} onClose={handleCloseArticle} />}
    </div>
  );
};

export default App;