'use client';

import { useState } from 'react';
import blogData from '@/data/blog-posts.json';

interface BlogCategory {
  id: string;
  name: string;
}

interface BlogHeroSectionProps {
  onCategoryChange?: (categoryId: string) => void;
}

const BlogHeroSection: React.FC<BlogHeroSectionProps> = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  if (!blogData?.blogCategories) {
    return (
      <section className="relative py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center border-b border-gray-200 mb-8">
            <h1 className="font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl font-bold mb-24">
              Blog & Articles
            </h1>
            <div className="flex items-center justify-center pb-16">
              <div className="text-gray-500">Loading categories...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const blogCategories = blogData.blogCategories as BlogCategory[];

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
  };

  return (
    <section className="relative py-12 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center border-b border-gray-200 mb-8">
          <h1 className="font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl font-bold mb-24">
            Blog & Articles
          </h1>
          <div className="flex -mx-4 w-full lg:w-auto flex-wrap items-bottom justify-center">
            {blogCategories.map((category) => (
              <div key={category.id} className="px-4">
                <a
                  className={`inline-block px-2 sm:px-8 pb-8 leading-none font-semibold sm:border-b-2 cursor-pointer ${
                    activeCategory === category.id
                      ? 'text-gray-900 border-yellowGreen-500'
                      : 'text-gray-500 border-transparent hover:border-yellowGreen-500'
                  }`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;