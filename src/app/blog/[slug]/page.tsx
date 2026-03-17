import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

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
      <article className="max-w-3xl mx-auto px-4">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-eds-red font-bold mb-8 hover:underline"
        >
          ← Back to Blog
        </Link>

        {/* Header Image */}
        <div className="h-64 md:h-80 bg-gradient-to-br from-eds-red to-eds-red-dark rounded-2xl mb-8 flex items-center justify-center">
          <div className="text-8xl">📰</div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-gray-500">{formatDate(post.date)}</span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-500">By {post.author}</span>
        </div>

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl font-bold text-eds-charcoal mb-6"
          style={{ fontFamily: '"Fredoka One", cursive' }}
        >
          {post.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white text-sm text-gray-600 rounded-full shadow"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Content — HTML is authored in src/lib/data.ts (trusted internal source) */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            lineHeight: 1.8,
          }}
        />

        {/* Share */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="font-bold text-eds-charcoal mb-4">Share this post:</p>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://edsbangers.com/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-eds-charcoal text-white rounded-full text-sm font-bold hover:bg-eds-charcoal-dark transition-all"
            >
              Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://edsbangers.com/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-eds-charcoal text-white rounded-full text-sm font-bold hover:bg-eds-charcoal-dark transition-all"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-eds-red rounded-2xl p-8 text-white text-center">
          <h3
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: '"Fredoka One", cursive' }}
          >
            Hungry for more?
          </h3>
          <p className="opacity-90 mb-6">
            Try our award-winning sauces or book us for your next event!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="px-6 py-3 bg-white text-eds-red font-bold rounded-full hover:bg-eds-cream transition-all"
            >
              Shop Now
            </Link>
            <Link
              href="/weddings"
              className="px-6 py-3 bg-transparent text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-eds-red transition-all"
            >
              Book for Events
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
