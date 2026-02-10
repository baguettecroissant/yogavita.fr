import { getPostBySlug } from "@/lib/mdx";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};
    return {
        title: post.meta.title,
        description: post.meta.description,
    };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) notFound();

    // Simple TOC extraction
    const headings = post.content.match(/^##\s+(.+)$/gm)?.map((heading) => {
        const text = heading.replace(/^##\s+/, "");
        const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-");
        return { text, id };
    }) || [];

    const components = {
        h2: ({ children }: any) => {
            const id = children?.toString().toLowerCase().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-");
            return <h2 id={id} className="text-3xl font-serif font-bold text-stone-900 mt-12 mb-6 scroll-mt-24 relative">{children}</h2>;
        },
        p: ({ children }: any) => <p className="text-lg text-stone-700 leading-relaxed mb-6 font-light">{children}</p>,
        ul: ({ children }: any) => <ul className="list-disc pl-6 space-y-2 mb-6 text-stone-700 marker:text-clay-500">{children}</ul>,
        ol: ({ children }: any) => <ol className="list-decimal pl-6 space-y-2 mb-6 text-stone-700 marker:font-bold marker:text-clay-500">{children}</ol>,
        li: ({ children }: any) => <li className="pl-2">{children}</li>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-clay-500 pl-6 py-2 my-8 italic text-xl text-stone-600 bg-sand-200 rounded-r-lg">
                {children}
            </blockquote>
        ),
        a: ({ href, children }: any) => (
            <Link href={href || "#"} className="text-clay-600 font-medium underline decoration-clay-300 hover:decoration-clay-600 transition-all underline-offset-4">
                {children}
            </Link>
        ),
    };

    return (
        <article className="bg-sand-50 min-h-screen pt-40 pb-24">
            {/* Editorial Header */}
            <header className="container mx-auto px-4 max-w-4xl text-center mb-16 animate-[fadeInUp_0.8s_ease-out]">
                <Link href="/blog" className="inline-flex items-center text-sm font-semibold tracking-widest uppercase text-stone-500 hover:text-clay-600 mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Retour au journal
                </Link>

                <div className="flex items-center justify-center gap-4 text-sm font-medium text-clay-600 mb-6 uppercase tracking-wider">
                    <time dateTime={post.meta.date}>
                        {format(new Date(post.meta.date), "dd MMMM yyyy", { locale: fr })}
                    </time>
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                    <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {post.meta.readingTime || "5 min"}
                    </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-900 leading-[1.1] mb-8">
                    {post.meta.title}
                </h1>

                <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                    {post.meta.description}
                </p>

                {post.meta.image && (
                    <div className="aspect-video w-full relative overflow-hidden rounded-2xl shadow-xl">
                        <img
                            src={post.meta.image}
                            alt={post.meta.title}
                            className="h-full w-full object-cover"
                        />
                    </div>
                )}
            </header>

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-[1fr_300px] gap-12 max-w-6xl mx-auto">
                    {/* Main Content */}
                    <div className="prose prose-lg prose-stone max-w-none">
                        <MDXRemote source={post.content} components={components} />
                    </div>

                    {/* Sticky Sidebar */}
                    <aside className="hidden lg:block h-full">
                        <div className="sticky top-32 space-y-8">
                            {/* Table of Contents */}
                            {headings.length > 0 && (
                                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-sand-300 shadow-sm">
                                    <h3 className="font-serif font-bold text-stone-900 mb-4 text-lg">Sommaire</h3>
                                    <nav className="flex flex-col gap-3">
                                        {headings.map((heading) => (
                                            <a
                                                key={heading.id}
                                                href={`#${heading.id}`}
                                                className="text-sm text-stone-600 hover:text-clay-600 transition-colors border-l-2 border-transparent hover:border-clay-300 pl-3 -ml-3 py-1"
                                            >
                                                {heading.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            )}

                            {/* Share */}
                            <div className="bg-clay-900 text-sand-100 rounded-2xl p-6">
                                <h3 className="font-serif font-bold mb-2">Partagez l'inspiration</h3>
                                <p className="text-sm text-sand-300 mb-4">Vous avez aimé cet article ? Faites-le savoir.</p>
                                <button className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg transition-colors font-medium text-sm">
                                    <Share2 className="h-4 w-4" /> Partager
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}
