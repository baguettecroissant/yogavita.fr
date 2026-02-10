import Link from "next/link";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Post } from "@/lib/mdx";

export function ArticleCard({ post }: { post: Post }) {
    return (
        <article className="group flex flex-col items-start">
            <Link href={`/blog/${post.slug}`} className="block w-full mb-4 overflow-hidden rounded-2xl bg-sand-200">
                <div className="aspect-[4/3] w-full bg-stone-200 group-hover:scale-105 transition-transform duration-500 relative">
                    {post.meta.image ? (
                        <img
                            src={post.meta.image}
                            alt={post.meta.title}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-stone-300 opacity-20" />
                    )}
                </div>
            </Link>

            <div className="flex items-center gap-3 text-xs font-medium text-stone-500 mb-3 uppercase tracking-wider">
                <time dateTime={post.meta.date}>
                    {format(new Date(post.meta.date), "dd MMM yyyy", { locale: fr })}
                </time>
                <span className="w-1 h-1 rounded-full bg-clay-500" />
                <span>{post.meta.readingTime || "5 min"}</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-stone-900 group-hover:text-clay-700 transition-colors mb-2 leading-tight">
                <Link href={`/blog/${post.slug}`}>
                    {post.meta.title}
                </Link>
            </h3>

            <p className="text-stone-600 line-clamp-2 leading-relaxed mb-4">
                {post.meta.description}
            </p>

            <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-stone-900 underline underline-offset-4 decoration-clay-500/30 hover:decoration-clay-500 transition-all">
                Lire l'article
            </Link>
        </article>
    );
}
