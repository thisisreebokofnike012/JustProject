import React from 'react';
import { Article } from '../types';

interface ArticleDetailProps {
  article: Article;
  onClose: () => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-start p-4 pt-12 sm:pt-24"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="relative">
          <img className="w-full h-64 sm:h-96 object-cover rounded-t-lg" src={article.imageUrl} alt={article.title} />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close article"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 sm:p-8">
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            {article.category}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">{article.title}</h1>
          
          <div className="flex items-center mb-6">
            <img className="h-10 w-10 rounded-full" src={article.authorImageUrl} alt={`Photo of ${article.author}`} />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{article.author}</p>
              <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                <time dateTime={article.date}>{article.date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{article.readTime} мин. чтения</span>
              </div>
            </div>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
            <p className="lead">{article.excerpt}</p>
            <p>В современном мире технологий, где инновации появляются каждый день, крайне важно оставаться в курсе последних тенденций. Эта статья — глубокое погружение в тему, заявленную в заголовке. Мы рассмотрим ключевые аспекты, проанализируем текущие решения и заглянем в будущее, чтобы понять, какие изменения нас ожидают.</p>
            <h3>Ключевые моменты</h3>
            <p>Разработка программного обеспечения и дизайн интерфейсов — это не просто написание кода или рисование макетов. Это искусство создания интуитивно понятных и эффективных инструментов, которые помогают людям решать их задачи. Мы обсудим, как современные методологии, такие как Agile и DevOps, влияют на скорость и качество разработки, и почему пользовательский опыт (UX) стал главным приоритетом для успешных продуктов.</p>
            <ul>
                <li>Анализ современных фреймворков и библиотек.</li>
                <li>Важность доступности (accessibility) в веб-дизайне.</li>
                <li>Роль искусственного интеллекта в автоматизации рутинных задач.</li>
            </ul>
            <h3>Взгляд в будущее</h3>
            <p>Технологическая индустрия не стоит на месте. Появление квантовых вычислений, развитие нейросетей и повсеместное внедрение Интернета вещей (IoT) открывают новые горизонты. Однако вместе с новыми возможностями приходят и новые вызовы, связанные с безопасностью данных, этикой и влиянием технологий на общество. Наша цель — предоставить вам всесторонний анализ, который поможет не только понять настоящее, но и быть готовым к будущему.</p>
            <p>Присоединяйтесь к обсуждению в комментариях и делитесь своим мнением. Ваша точка зрения важна для нас!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
