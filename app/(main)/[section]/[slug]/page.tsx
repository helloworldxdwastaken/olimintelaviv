import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { getPostBySlug, getPostsBySection } from '@/data/posts';
import { formatDate } from '@/lib/utils';

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getPostsBySection(post.section)
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Article Header */}
      <div className="mb-8">
        <Link
          href={`/${post.section}`}
          className="inline-flex items-center text-primary hover:underline mb-4"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to {post.section.charAt(0).toUpperCase() + post.section.slice(1)}
        </Link>

        <div className="mb-4">
          <Badge variant="primary">{post.category}</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-slate">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{formatDate(post.date)}</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative aspect-video rounded-3xl overflow-hidden mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Article Content */}
      <GlassCard className="mb-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-slate mb-6">{post.excerpt}</p>
          <div className="whitespace-pre-line text-navy leading-relaxed">
            {post.content}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="muted">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-navy mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/${relatedPost.section}/${relatedPost.slug}`}>
                <GlassCard className="h-full hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="aspect-video relative rounded-2xl overflow-hidden mb-3">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-navy mb-2">{relatedPost.title}</h3>
                  <p className="text-sm text-slate">{relatedPost.excerpt}</p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

