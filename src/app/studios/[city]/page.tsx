import studiosData from "@/data/studios.json";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Star, ExternalLink, ArrowLeft } from "lucide-react";

// Types
type Studio = {
    id: string;
    name: string;
    city: string;
    address: string;
    type: string[];
    rating: number;
    website: string;
};

// Data Helper
import { slugify } from "@/lib/utils";

// Data Helper
// In a real app, this would be a DB call
const studios = studiosData as Studio[];

function getStudiosByCity(slug: string) {
    return studios.filter((s) => slugify(s.city) === slug);
}

export async function generateStaticParams() {
    const cities = Array.from(new Set(studios.map((s) => s.city)));
    return cities.map((city) => ({
        city: slugify(city),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city } = await params;
    const cityStudios = getStudiosByCity(city);

    // Fallback if no studio found (should be handled by notFound below but good for types)
    if (cityStudios.length === 0) return {};

    const cityName = cityStudios[0].city;
    const count = cityStudios.length;

    return {
        title: `Meilleurs Cours de Yoga à ${cityName} (Top ${count}) - Yogavita`,
        description: `Découvrez notre sélection des ${count} meilleurs studios de yoga à ${cityName}. Avis, tarifs, et styles (Hatha, Vinyasa, Bikram...).`,
    };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
    const { city } = await params;
    const cityStudios = getStudiosByCity(city);

    if (cityStudios.length === 0) {
        notFound();
    }

    const cityName = cityStudios[0].city;

    if (cityStudios.length === 0) {
        notFound();
    }

    return (
        <div className="bg-sage-50 min-h-screen pb-16 pt-32 lg:pb-24 lg:pt-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="mb-8 inline-flex items-center text-sm font-medium text-stone-500 hover:text-terracotta-600">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour à l'accueil
                </Link>

                <header className="mb-12 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl font-serif mb-6">
                        Les meilleurs cours de Yoga à <span className="text-terracotta-600">{cityName}</span>
                    </h1>
                    <p className="text-lg text-stone-600">
                        Vous cherchez à pratiquer le yoga à {cityName} ? Découvrez notre sélection indépendante des studios les mieux notés par la communauté.
                    </p>
                </header>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cityStudios.map((studio) => (
                        <div key={studio.id} className="bg-white rounded-xl p-6 shadow-sm border border-stone-200 flex flex-col hover:border-terracotta-200 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl font-bold text-stone-900 font-serif line-clamp-1">{studio.name}</h2>
                                <div className="flex items-center gap-1 bg-sage-100 text-sage-800 px-2 py-1 rounded-md text-sm font-bold">
                                    <Star className="h-3 w-3 fill-current" />
                                    {studio.rating}
                                </div>
                            </div>

                            <div className="flex items-start gap-2 text-stone-500 text-sm mb-4">
                                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                                <span className="line-clamp-2">{studio.address}</span>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {studio.type.slice(0, 3).map((t) => (
                                    <span key={t} className="text-xs font-medium px-2 py-1 bg-stone-100 text-stone-600 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto pt-4 border-t border-stone-100">
                                <a
                                    href={studio.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full gap-2 text-sm font-semibold text-white bg-stone-800 hover:bg-stone-900 rounded-lg px-4 py-2.5 transition-colors"
                                >
                                    Visiter le site <ExternalLink className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
