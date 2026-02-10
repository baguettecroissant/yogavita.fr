import { getAllPoses } from "@/lib/mdx";
import { Metadata } from "next";
import { PosesGrid } from "@/components/poses/PosesGrid";

export const metadata: Metadata = {
    title: "Asanathèque - Bibliothèque de Postures de Yoga",
    description: "Découvrez notre collection complète de postures de yoga (asanas) classées par niveau et bienfaits.",
};

export default function PosesPage() {
    const poses = getAllPoses();

    return (
        <div className="bg-sage-50 py-32 sm:py-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl font-serif">L'Asanathèque</h1>
                    <p className="mt-4 text-lg text-stone-600">
                        Explorez notre bibliothèque de postures pour enrichir votre pratique.
                    </p>
                </div>

                <PosesGrid initialPoses={poses} />
            </div>
        </div>
    );
}
