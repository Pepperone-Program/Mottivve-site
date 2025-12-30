import Link from 'next/link';
import Image from 'next/image';

interface Author {
  name: string;
  avatar: string;
}

interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt?: string;
  date: string;
  readTime: string;
  image: string;
  author: Author;
}

interface BlogGridSectionProps {
  posts?: Post[];
}

const BlogGridSection: React.FC<BlogGridSectionProps> = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap -mx-4">
        {posts.map((post) => (
          <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
            <Link
              className="group flex flex-col h-full md:max-w-sm rounded-xl border border-transparent hover:border-yellowGreen-500 ring ring-transparent hover:ring-yellowGreen-500 transition-all duration-200"
              href={`/blog/${post.slug}`}
            >
              <div className="flex-shrink-0 h-68 rounded-t-lg overflow-hidden">
                <Image
                  className="block w-full group-hover:scale-105 transition-transform duration-300"
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={272}
                />
              </div>
              <div className="h-full py-10 md:pt-6 md:pb-8 px-5 shadow-4xl border-gray-200 border-l border-b border-r rounded-b-xl">
                <div className="flex mb-4 items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="mx-3">
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#D2DAD5"></circle>
                    </svg>
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="font-heading tracking-tight text-xl text-gray-900 font-semibold mb-4 group-hover:text-yellowGreen-600 transition-colors duration-200">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt.length > 100 ? `${post.excerpt.substring(0, 100)}...` : post.excerpt}
                  </p>
                )}
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">By</span>
                  <Image
                    className="block w-5 h-5 mx-2 rounded-full"
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={20}
                    height={20}
                  />
                  <span className="text-sm font-medium">{post.author.name}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGridSection;