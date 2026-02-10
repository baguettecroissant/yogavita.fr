import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { ArrowRight, Leaf, Sparkles, MapPin, Feather } from "lucide-react";
import { FranceMap } from "@/components/studios/FranceMap";
import studiosData from "@/data/studios.json";
import cityCoordinates from "@/data/city-coordinates.json";

import { slugify } from "@/lib/utils";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  // Prepare Map Data
  const cityStats = studiosData.reduce((acc, studio) => {
    const city = studio.city;
    if (!acc[city]) {
      acc[city] = { count: 0 };
    }
    acc[city].count += 1;
    return acc;
  }, {} as Record<string, { count: number }>);

  const cities = Object.entries(cityStats).map(([name, stat]) => ({
    name,
    ...stat,
    slug: slugify(name),
  }));

  const coords = cityCoordinates as Record<string, { lat: number; lng: number }>;
  const mapCities = cities
    .filter((c) => coords[c.name])
    .map((c) => ({
      name: c.name,
      count: c.count,
      lat: coords[c.name].lat,
      lng: coords[c.name].lng,
      slug: c.slug,
    }));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Immersive Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-40 pb-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-stone-900/40" /> {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" /> {/* Bottom Fade */}
        </div>

        <div className="container relative z-10 text-center px-4 animate-[fadeInUp_1s_ease-out]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-md mb-8">
            <Sparkles className="h-4 w-4 text-sand-100" />
            <span className="text-xs font-bold tracking-widest uppercase text-sand-50">Holistic Wellness</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tight leading-[0.9] mb-8 drop-shadow-sm">
            L'Art du<br />
            <span className="text-clay-300 italic">Mouvement</span> conscient.
          </h1>

          <p className="text-xl md:text-2xl text-sand-100 max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-sm">
            Explorez le yoga, la méditation et la sagesse ancienne pour une vie moderne équilibrée.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/poses" className="h-12 px-8 rounded-full bg-sand-100 text-stone-900 font-medium flex items-center gap-2 hover:bg-white hover:scale-105 transition-all duration-300">
              Découvrir les postures
            </Link>
            <Link href="/studios" className="h-12 px-8 rounded-full bg-transparent border border-sand-300 text-white font-medium flex items-center gap-2 hover:bg-white/10 hover:border-white transition-all duration-300">
              Trouver un studio <MapPin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy / Features (Bento Grid) */}
      <section className="py-24 bg-white/50">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="md:col-span-2 bg-sand-200 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-moss-800/5 group-hover:bg-moss-800/10 transition-colors" />
              <Feather className="h-10 w-10 text-moss-800 mb-4" />
              <h3 className="text-3xl font-serif text-stone-900 mb-2">Philosophie</h3>
              <p className="text-stone-600 max-w-md">Le yoga n'est pas une performance, c'est une connexion. Nous prônons une pratique douce, respectueuse et adaptée à chaque corps.</p>
            </div>
            <div className="bg-clay-900 text-sand-100 rounded-3xl p-8 flex flex-col justify-between group hover:scale-[1.02] transition-transform">
              <Leaf className="h-10 w-10 text-clay-500" />
              <div>
                <div className="text-4xl font-bold mb-1">100+</div>
                <div className="text-sm opacity-80 uppercase tracking-widest">Articles & Guides</div>
              </div>
            </div>
            <div className="bg-white border border-sand-300 rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:border-clay-500 transition-colors">
              <h3 className="text-2xl font-serif text-stone-900 mb-2">Communauté</h3>
              <Link href="/studios" className="text-clay-600 font-medium underline underline-offset-4 hover:text-clay-800">Rejoindre un cours &rarr;</Link>
            </div>
            <div className="md:col-span-2 bg-sand-100 rounded-3xl p-8 flex items-center justify-between border border-transparent hover:border-stone-200 transition-colors">
              <div>
                <h3 className="text-2xl font-serif text-stone-900 mb-2">Commencer aujourd'hui</h3>
                <p className="text-stone-600">Sélectionnez votre niveau et laissez-vous guider.</p>
              </div>
              <Link href="/poses" className="h-10 w-10 rounded-full bg-stone-900 text-white flex items-center justify-center hover:rotate-45 transition-transform">
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-24 bg-sand-50">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <span className="text-clay-600 font-bold tracking-widest uppercase text-xs mb-2 block">Communauté</span>
            <h2 className="text-4xl font-serif text-stone-900 mb-4">Trouvez un studio près de chez vous</h2>
            <p className="text-stone-600">Explorez notre carte interactive pour découvrir les meilleurs studios de yoga à travers la France.</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <FranceMap cities={mapCities} />
          </div>
          <div className="mt-12 text-center">
            <Link href="/studios" className="inline-flex items-center text-clay-600 font-semibold hover:text-clay-700">
              Voir l'annuaire complet par ville <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-24">
        <div className="container px-4">
          <div className="flex items-end justify-between mb-12 max-w-6xl mx-auto">
            <div>
              <span className="text-clay-600 font-bold tracking-widest uppercase text-xs mb-2 block">Le Journal</span>
              <h2 className="text-4xl font-serif text-stone-900">Dernières Publications</h2>
            </div>
            <Link href="/blog" className="hidden md:inline-flex items-center text-stone-500 hover:text-clay-600 transition-colors">
              Voir tout <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/blog" className="font-semibold text-clay-600 hover:text-clay-700">
              Voir tous les articles <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
