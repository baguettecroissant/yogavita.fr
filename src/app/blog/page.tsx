import { getAllPosts } from "@/lib/mdx";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Le Blog",
    description: "Explorez nos derniers articles sur le yoga, la santé et le bien-être au quotidien.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="bg-sage-50 py-32 sm:py-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl font-serif">Le Blog Yogavita</h1>
                    <p className="mt-4 text-lg text-stone-600">
                        Retrouvez tous nos conseils pour une vie plus zen et équilibrée.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <ArticleCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
