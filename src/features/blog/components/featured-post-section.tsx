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

interface FeaturedPostSectionProps {
  post?: Post;
}

const FeaturedPostSection: React.FC<FeaturedPostSectionProps> = ({ post }) => {
  if (!post) return null;

  return (
    <div className="container px-4 mx-auto">
      <div className="relative rounded-xl shadow-4xl mb-16 border border-gray-200 overflow-hidden">
        <div className="flex flex-wrap">
          <div className="w-full md:w-7/12">
            <div className="py-12 px-6 lg:py-24 lg:pl-20 lg:pr-24">
              <div className="flex mb-4 items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="mx-3">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#D2DAD5"></circle>
                  </svg>
                </span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              <div className="max-w-md lg:max-w-lg">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="font-heading tracking-tight text-3xl md:text-4xl text-gray-900 font-semibold mb-6 hover:text-yellowGreen-600 transition-colors duration-200">
                    {post.title}
                  </h2>
                </Link>
                {post.excerpt && (
                  <p className="text-lg text-gray-500 mb-4">{post.excerpt}</p>
                )}
                <div className="flex items-center mb-8">
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
                <Link
                  className="group relative flex xs:inline-flex h-10 px-4 items-center justify-center text-sm font-semibold text-gray-700 hover:text-yellowGreen-600 border border-gray-200 hover:border-yellowGreen-600 shadow-sm hover:shadow-none rounded-lg transition duration-100"
                  href={`/blog/${post.slug}`}
                >
                  <span className="mr-2">Read more</span>
                  <span className="transform group-hover:translate-x-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.00016 8H12.3335M12.3335 8L8.3335 4M12.3335 8L8.3335 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            <div className="flex h-full w-full items-center justify-end">
              <Link href={`/blog/${post.slug}`}>
                <Image
                  className="block w-full hover:scale-105 transition-transform duration-300"
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostSection;