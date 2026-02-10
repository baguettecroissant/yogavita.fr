import { getPoseBySlug, getPoseSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Play, AlertOctagon } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
    const poses = getPoseSlugs();
    return poses.map((pose) => ({
        slug: pose.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const pose = getPoseBySlug(slug);
    if (!pose) {
        return {};
    }
    return {
        title: `${pose.meta.title} - Asanathèque`,
        description: `Découvrez la posture ${pose.meta.title} (${pose.meta.sanskritName}).`,
    };
}

export default async function PosePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const pose = getPoseBySlug(slug);

    if (!pose) {
        notFound();
    }

    const components = {
        h2: ({ children }: any) => <h2 className="text-3xl font-serif font-bold text-stone-900 mt-12 mb-6 border-b border-sand-300 pb-2">{children}</h2>,
        ul: ({ children }: any) => <ul className="space-y-4 mb-8">{children}</ul>,
        li: ({ children }: any) => <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-sand-100 shadow-sm"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay-500 shrink-0" /><span>{children}</span></li>,
        p: ({ children }: any) => <p className="text-lg text-stone-700 leading-relaxed mb-6">{children}</p>,
        blockquote: ({ children }: any) => (
            <blockquote className="bg-sand-200 border-l-4 border-moss-500 rounded-lg p-6 my-8 italic text-stone-700">
                {children}
            </blockquote>
        )
    };

    return (
        <div className="bg-sand-50 min-h-screen pb-24">
            {/* Immersive Header */}
            <div className="relative bg-stone-900 text-sand-50 py-32 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-40 bg-cover bg-center transition-opacity"
                    style={{ backgroundImage: `url('${pose.meta.image || 'https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop'}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
                <div className="container relative z-10 px-4">
                    <Link href="/poses" className="inline-flex items-center text-sm font-medium text-sand-300 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Retour à l'Asanathèque
                    </Link>
                    <div className="flex flex-wrap gap-4 mb-6">
                        <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm font-medium text-white border border-white/20">
                            {pose.meta.difficulty}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-clay-500/20 backdrop-blur-sm px-4 py-1 text-sm font-medium text-clay-200 border border-clay-500/30 uppercase tracking-widest">
                            {pose.meta.category}
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-4 tracking-tight">
                        {pose.meta.title}
                    </h1>
                    <p className="text-2xl md:text-3xl text-sand-300 font-serif italic">
                        {pose.meta.sanskritName}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-12 relative z-20">
                <div className="grid lg:grid-cols-[1fr_350px] gap-8">
                    {/* Main Content */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-sand-200 prose prose-lg prose-stone max-w-none">
                        <MDXRemote source={pose.content} components={components} />
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Benefits */}
                        <div className="bg-moss-800 text-sand-50 rounded-3xl p-8">
                            <h3 className="font-serif font-bold text-2xl mb-6 flex items-center gap-2">
                                <Play className="h-5 w-5 fill-current" /> Bienfaits clés
                            </h3>
                            <ul className="space-y-4">
                                {pose.meta.benefits.map((benefit, index) => (
                                    <li key={index} className="flex gap-3 text-sand-200">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-moss-500 shrink-0" />
                                        <span className="leading-snug">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contraindications */}
                        <div className="bg-clay-50 border border-clay-200 rounded-3xl p-8">
                            <h3 className="font-serif font-bold text-xl text-clay-900 mb-4 flex items-center gap-2">
                                <AlertOctagon className="h-5 w-5" /> Attention
                            </h3>
                            <ul className="space-y-3">
                                {pose.meta.contraindications.map((item, index) => (
                                    <li key={index} className="flex gap-2 text-clay-800 text-sm">
                                        <span>•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
