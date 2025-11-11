import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onArticleSelect: (article: Article) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onArticleSelect }) => {
  return (
    <div 
      className="flex flex-col rounded-lg shadow-lg overflow-hidden h-full bg-white dark:bg-gray-800 transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={() => onArticleSelect(article)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onArticleSelect(article); }}
    >
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={article.imageUrl} alt={article.title} />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            <span className="hover:underline">{article.category}</span>
          </p>
          <div className="block mt-2">
            <p className="text-xl font-semibold text-gray-900 dark:text-white">{article.title}</p>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{article.excerpt}</p>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
              <span className="sr-only">{article.author}</span>
              <img className="h-10 w-10 rounded-full" src={article.authorImageUrl} alt={`Photo of ${article.author}`} />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              <span className="hover:underline">{article.author}</span>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
              <time dateTime={article.date}>{article.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{article.readTime} мин. чтения</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};