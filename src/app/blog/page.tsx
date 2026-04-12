import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: "Blog — Food Stories & News",
  description: "Behind-the-scenes stories, food news and production updates from Ed's Bangers — award-winning artisan sausage makers from Hampshire.",
  alternates: { canonical: '/blog' },
  openGraph: {
    title: "Blog | Ed's Bangers® — Food Stories & News",
    description: "Behind-the-scenes stories, food news and production updates from Ed's Bangers — award-winning artisan sausage makers from Hampshire.",
    url: 'https://www.edsbangers.com/blog',
    images: [{ url: '/images/raw-sausages.jpg', alt: "Ed's Bangers award-winning artisan sausages" }],
  },
};

export default function BlogPage() {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-eds-cream pt-24 pb-16">
      <BreadcrumbJsonLd crumbs={[{ name: 'Blog', path: '/blog' }]} />
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <h1
          className="text-4xl md:text-5xl font-bold text-eds-charcoal text-center mb-4"
          style={{ fontFamily: 'var(--font-display), cursive' }}
        >
          📝 Blog
        </h1>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
          News, recipes, behind-the-scenes, and stories from the world of Ed&apos;s Bangers.
        </p>
      </div>

      {/* Blog Posts */}
      <div className="max-w-4xl mx-auto px-4">
        {blogPosts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
            <div className="text-6xl mb-4">✍️</div>
            <h2 className="text-2xl font-bold text-eds-charcoal mb-2">
              Coming Soon!
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;re working on some great content. Check back soon for recipes, news, and more!
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-eds-red text-white font-bold rounded-full hover:bg-eds-red-dark transition-all"
            >
              ← Back to Home
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                {/* Post Image */}
                {post.image ? (
                  <div className="h-64 bg-eds-charcoal relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
                      🌭
                    </div>
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-eds-red to-eds-red-dark flex items-center justify-center">
                    <div className="text-6xl">📰</div>
                  </div>
                )}

                {/* Post Content */}
                <div className="p-6 md:p-8">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">By {post.author}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-eds-charcoal mb-3 group-hover:text-eds-red transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-eds-cream text-sm text-gray-600 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-eds-red font-bold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter Signup */}
      <section className="max-w-4xl mx-auto px-4 mt-16">
        <div className="bg-eds-charcoal rounded-3xl p-8 md:p-12 text-white text-center">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display), cursive' }}
          >
            📬 Stay in the Loop
          </h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            Get recipes, event announcements, and behind-the-scenes content delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-full text-eds-charcoal outline-none focus:ring-2 focus:ring-eds-red"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-eds-red text-white font-bold rounded-full hover:bg-eds-red-dark transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
