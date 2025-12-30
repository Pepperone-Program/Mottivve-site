'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BlogHeroSection from '@/features/blog/components/blog-hero-section';
import FeaturedPostSection from '@/features/blog/components/featured-post-section';
import BlogGridSection from '@/features/blog/components/blog-grid-section';
import BlogPaginationSection from '@/features/blog/components/blog-pagination-section';
import CTASection from '@/components/ui/cta-section';
import blogData from '@/data/blog-posts.json';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  featured?: boolean;
  [key: string]: unknown;
}

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  if (!blogData?.blogPosts) {
    return (
      <div>
        <Header />
        <main>
          <div className="container px-4 mx-auto py-24">
            <div className="flex items-center justify-center">
              <div className="text-gray-500">Loading blog posts...</div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Helper functions moved from data file
  const getFeaturedPost = (): BlogPost => {
    return blogData.blogPosts.find(post => post.featured) || blogData.blogPosts[0];
  };

  const getPostsByCategory = (category: string): BlogPost[] => {
    if (category === 'all') {
      return blogData.blogPosts;
    }
    return blogData.blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
  };

  // Get filtered posts based on selected category
  const filteredPosts = getPostsByCategory(selectedCategory);

  // Get featured post (first post or first featured post)
  const featuredPost = getFeaturedPost();

  // Get regular posts (exclude featured post from the grid)
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost.id);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="antialiased bg-body text-body font-body">
      <Header />

      <BlogHeroSection onCategoryChange={handleCategoryChange} />

      <FeaturedPostSection post={featuredPost} />

      <BlogGridSection posts={regularPosts} />

      <BlogPaginationSection />

      <CTASection />

      <Footer />
    </div>
  );
};

export default BlogPage;