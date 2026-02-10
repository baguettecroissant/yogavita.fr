import { getAllPosts, getAllPoses } from "@/lib/mdx";
import studiosData from "@/data/studios.json";
import { MetadataRoute } from "next";
import { slugify } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();
    const poses = getAllPoses();
    const studios = studiosData;
    const baseUrl = "https://yogavita.fr";

    const postsUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.meta.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    const posesUrls = poses.map((pose) => ({
        url: `${baseUrl}/poses/${pose.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    const cities = Array.from(new Set(studios.map((s) => s.city)));
    const citiesUrls = cities.map((city) => ({
        url: `${baseUrl}/studios/${slugify(city)}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/poses`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/a-propos`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        ...postsUrls,
        ...posesUrls,
        ...citiesUrls,
    ];
}
