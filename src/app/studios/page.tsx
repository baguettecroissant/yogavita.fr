import studiosData from "@/data/studios.json";
import cityCoordinates from "@/data/city-coordinates.json";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, ArrowRight } from "lucide-react";
import { FranceMap } from "@/components/studios/FranceMap";

export const metadata: Metadata = {
    title: "Annuaire des Studios de Yoga en France - Yogavita",
    description: "Trouvez le meilleur studio de yoga près de chez vous. Consultez nos sélections par ville avec notre carte interactive.",
};

import { slugify } from "@/lib/utils";

export default function StudiosIndex() {
    // Extract unique cities and count studios
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

    // Build map data with coordinates
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
        <div className="bg-sage-50 py-32 sm:py-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-5xl font-serif">
                        Trouvez votre Studio
                    </h1>
                    <p className="mt-4 text-lg text-stone-600">
                        {cities.reduce((s, c) => s + c.count, 0)} studios dans {cities.length} villes en France. Cliquez sur une ville pour découvrir notre sélection.
                    </p>
                </div>

                {/* Interactive Map */}
                <div className="mb-20">
                    <FranceMap cities={mapCities} />
                </div>

                {/* City Grid */}
                <div className="mx-auto max-w-2xl text-center mb-12">
                    <h2 className="text-2xl font-bold text-stone-900 font-serif">
                        Toutes les villes
                    </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {cities
                        .sort((a, b) => b.count - a.count)
                        .map((city) => (
                            <Link
                                key={city.name}
                                href={`/studios/${city.slug}`}
                                className="group flex items-center justify-between p-4 rounded-xl bg-white border border-stone-200 hover:border-terracotta-300 hover:shadow-md transition-all"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-terracotta-100 flex items-center justify-center">
                                        <MapPin className="h-4 w-4 text-terracotta-600" />
                                    </div>
                                    <div>
                                        <span className="font-semibold text-stone-900 group-hover:text-terracotta-600 transition-colors">
                                            {city.name}
                                        </span>
                                        <span className="text-xs text-stone-400 block">
                                            {city.count} studio{city.count > 1 ? "s" : ""}
                                        </span>
                                    </div>
                                </div>
                                <ArrowRight className="h-4 w-4 text-stone-300 group-hover:text-terracotta-500 group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
}
