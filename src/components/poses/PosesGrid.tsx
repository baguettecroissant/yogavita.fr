"use client";

import { Pose } from "@/lib/mdx";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { useState, useMemo } from "react";

interface PosesGridProps {
    initialPoses: Pose[];
}

export function PosesGrid({ initialPoses }: PosesGridProps) {
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>("Tous");
    const [selectedCategory, setSelectedCategory] = useState<string>("Toutes");

    // Extract unique categories
    const categories = useMemo(() => {
        const cats = new Set(initialPoses.map((p) => p.meta.category));
        return ["Toutes", ...Array.from(cats).sort()];
    }, [initialPoses]);

    const difficulties = ["Tous", "Débutant", "Intermédiaire", "Avancé"];

    const filteredPoses = useMemo(() => {
        return initialPoses.filter((pose) => {
            const matchDiff = selectedDifficulty === "Tous" || pose.meta.difficulty === selectedDifficulty;
            const matchCat = selectedCategory === "Toutes" || pose.meta.category === selectedCategory;
            return matchDiff && matchCat;
        });
    }, [initialPoses, selectedDifficulty, selectedCategory]);

    const difficultyColor: Record<string, string> = {
        "Débutant": "bg-sage-100 text-sage-800",
        "Intermédiaire": "bg-terracotta-100 text-terracotta-800",
        "Avancé": "bg-stone-100 text-stone-800",
    };

    return (
        <div>
            {/* Filters */}
            <div className="mb-12 space-y-6">
                {/* Difficulty Filter */}
                <div className="flex flex-wrap justify-center gap-2">
                    {difficulties.map((diff) => (
                        <button
                            key={diff}
                            onClick={() => setSelectedDifficulty(diff)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedDifficulty === diff
                                ? "bg-stone-900 text-white shadow-md"
                                : "bg-white text-stone-600 hover:bg-stone-100 border border-sand-200"
                                }`}
                        >
                            {diff}
                        </button>
                    ))}
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedCategory === cat
                                ? "bg-clay-500 text-white shadow-sm"
                                : "bg-transparent text-stone-500 hover:text-stone-900 border border-transparent hover:border-sand-300"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPoses.map((pose) => (
                    <Link
                        key={pose.slug}
                        href={`/poses/${pose.slug}`}
                        className="group relative flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-terracotta-200"
                    >
                        {/* Image */}
                        <div className="relative h-48 w-full overflow-hidden bg-stone-200">
                            {pose.meta.image ? (
                                <img
                                    src={pose.meta.image}
                                    alt={pose.meta.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            ) : (
                                <div className="h-full w-full flex items-center justify-center text-stone-400 bg-stone-100">
                                    <span className="text-sm">Pas d'image</span>
                                </div>
                            )}
                            <div className="absolute top-3 left-3">
                                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium backdrop-blur-md shadow-sm border border-black/5 ${difficultyColor[pose.meta.difficulty] || 'bg-white/90 text-gray-800'}`}>
                                    {pose.meta.difficulty}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col h-full bg-white relative z-10">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-stone-500 uppercase tracking-wider">
                                    {pose.meta.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-stone-900 font-serif mb-1 group-hover:text-terracotta-600 transition-colors">
                                {pose.meta.title}
                            </h3>
                            <p className="text-sm text-stone-500 italic mb-4">
                                {pose.meta.sanskritName}
                            </p>

                            <div className="mt-auto pt-4 border-t border-stone-100">
                                <div className="flex items-center gap-2 text-sm text-stone-600 mb-2">
                                    <Zap className="h-4 w-4 text-terracotta-500" />
                                    <span className="truncate">{pose.meta.benefits[0]}</span>
                                </div>
                                <div className="flex items-center text-sm font-medium text-terracotta-600 mt-4 group-hover:translate-x-1 transition-transform">
                                    Voir la fiche technique <ArrowRight className="ml-1 h-4 w-4" />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {filteredPoses.length === 0 && (
                <div className="text-center py-12 text-stone-500">
                    Aucune posture ne correspond à vos critères.
                </div>
            )}
        </div>
    );
}
