'use client';

import { useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CTASection from '@/components/ui/cta-section';
import blogData from '@/data/blog-posts.json';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category?: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  featured?: boolean;
  content?: {
    intro?: string;
    keyTakeaways?: string[];
    sections?: Array<{
      title: string;
      content: string;
    }>;
    proTip?: string;
    conclusion?: string;
  };
}

interface BlogSinglePageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogSinglePage({ params }: BlogSinglePageProps) {
  const { slug } = use(params);

  // Find the blog post based on the slug
  const post: BlogPost | undefined = blogData.blogPosts.find((p: BlogPost) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Frequencii`;
    } else {
      document.title = 'Blog Post Not Found - Frequencii';
    }
  }, [post]);

  if (!post) {
    return (
      <div className="antialiased bg-body text-body font-body">
        <Header />

        <main className="py-20">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Post Not Found</h1>
              <p className="text-lg text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist or may have been moved.</p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-yellowGreen-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellowGreen-600 transition-colors duration-200"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </main>

        <CTASection />
        <Footer />
      </div>
    );
  }

  return (
    <div className="antialiased bg-body text-body font-body">
      <Header />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-yellowGreen-600 transition-colors">Home</Link>
              <span>&rarr;</span>
              <Link href="/blog" className="hover:text-yellowGreen-600 transition-colors">Blog</Link>
              <span>&rarr;</span>
              <span className="text-gray-900">{post.title}</span>
            </nav>

            {/* Category Badge */}
            {post.category && (
              <div className="inline-block px-4 py-2 bg-yellowGreen-100 text-yellowGreen-700 text-sm font-medium rounded-lg mb-6">
                {post.category}
              </div>
            )}

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h2>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <span>{post.author.name}</span>
              </div>
              <span>&bull;</span>
              <span>{post.date}</span>
              <span>&bull;</span>
              <span>{post.readTime}</span>
            </div>

            {/* Excerpt */}
            <p className="text-gray-700 text-xl leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={500}
                className="w-full h-96 md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>
                  {post.content?.intro || `Welcome to this comprehensive guide where we dive deep into the topic of ${post.title.toLowerCase()}. In today's digital landscape, understanding these concepts is crucial for effective content organization and productivity.`}
                </p>

                <p>
                  {post.excerpt} This article will provide you with actionable insights and practical strategies
                  that you can implement to improve your workflow and organizational systems.
                </p>

                {post.content?.keyTakeaways && (
                  <>
                    <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Key Takeaways</h2>
                    <ul className="space-y-3 text-gray-700">
                      {post.content.keyTakeaways.map((takeaway, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellowGreen-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {post.content?.sections?.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">{section.title}</h2>
                    <p>{section.content}</p>
                  </div>
                )) || (
                  <>
                    <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Getting Started</h2>
                    <p>
                      The first step in mastering any organizational system is to understand its core principles.
                      Whether you&apos;re dealing with digital asset management, content organization, or workflow optimization,
                      the same fundamental approach applies: assess, organize, implement, and refine.
                    </p>
                  </>
                )}

                {post.content?.proTip && (
                  <div className="bg-yellowGreen-50 border border-yellowGreen-200 rounded-2xl p-8 my-8">
                    <h3 className="text-yellowGreen-700 text-xl font-semibold mb-4">&#128161; Pro Tip</h3>
                    <p className="text-gray-700 mb-0">
                      {post.content.proTip}
                    </p>
                  </div>
                )}

                <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Conclusion</h2>

                <p>
                  {post.content?.conclusion || `Understanding ${post.title.toLowerCase()} is essential for anyone looking to improve their digital organization and productivity. By implementing these strategies consistently, you'll create systems that scale with your needs and enhance your overall efficiency.`}
                </p>

                <p>
                  The journey toward better organization is ongoing. Continue experimenting with these techniques,
                  adapting them to your specific needs, and building systems that serve you well into the future.
                </p>
              </div>
            </article>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-yellowGreen-50 to-cyanGreen-50 border border-yellowGreen-200 rounded-2xl p-8 mt-16">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Transform Your Workflow?</h3>
                <p className="text-gray-700 mb-6">
                  Join thousands of professionals who use Frequencii to organize their digital assets and boost productivity.
                </p>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 bg-yellowGreen-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-yellowGreen-600 transition-colors duration-200"
                >
                  Get Started Free
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="text-center mt-16">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-yellowGreen-600 hover:text-yellowGreen-700 font-medium transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to All Posts
              </Link>
            </div>

            {/* Related Posts */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Related Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogData.blogPosts
                  .filter((relatedPost: BlogPost) => relatedPost.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost: BlogPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-yellowGreen-300 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className="relative">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          width={400}
                          height={192}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {relatedPost.category && (
                          <div className="absolute top-4 left-4">
                            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-lg">
                              {relatedPost.category}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold mb-3 leading-tight group-hover:text-yellowGreen-600 transition-colors duration-300">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{relatedPost.date}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}