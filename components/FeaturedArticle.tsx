import React from 'react';
import { Article } from '../types';

interface FeaturedArticleProps {
  article: Article;
  onArticleSelect: (article: Article) => void;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article, onArticleSelect }) => {
  return (
    <div 
      className="relative bg-gray-800 rounded-xl overflow-hidden shadow-2xl cursor-pointer"
      onClick={() => onArticleSelect(article)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onArticleSelect(article); }}
    >
      <div className="absolute inset-0">
        <img className="h-full w-full object-cover" src={article.imageUrl} alt={article.title} />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60 mix-blend-multiply" />
      </div>
      <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">
                <span className="hover:underline">{article.category}</span>
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="hover:text-gray-200 transition-colors">{article.title}</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                {article.excerpt}
            </p>
            <div className="mt-8 flex items-center justify-center">
                <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full border-2 border-white" src={article.authorImageUrl} alt={`Photo of ${article.author}`} />
                </div>
                <div className="ml-4 text-left">
                    <p className="text-base font-medium text-white">
                      <span className="hover:underline">{article.author}</span>
                    </p>
                    <div className="flex space-x-2 text-sm text-gray-400">
                        <time dateTime={article.date}>{article.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{article.readTime} мин. чтения</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};