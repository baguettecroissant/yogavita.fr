import { Metadata } from "next";
import { Heart, Sun, Users, Leaf, Sparkles, Anchor, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Notre Philosophie - À Propos",
    description: "Découvrez l'histoire de Yogavita.fr, notre mission pour un bien-être accessible et notre approche holistique du yoga.",
};

export default function AboutPage() {
    return (
        <div className="bg-sand-50">
            {/* Hero Manifesto */}
            <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-clay-500/5 blur-3xl -z-10" />
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sand-200 mb-8 animate-[fadeInUp_0.8s_ease-out]">
                        <Sparkles className="h-4 w-4 text-clay-500" />
                        <span className="text-xs font-bold tracking-widest uppercase text-stone-500">Manifesto</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-8 leading-[1.1] animate-[fadeInUp_1s_ease-out]">
                        Le Yoga n'est pas une performance.<br />
                        <span className="text-clay-500 italic">C'est un retour à soi.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed animate-[fadeInUp_1.2s_ease-out]">
                        Dans un monde qui glorifie la vitesse et la perfection, Yogavita est votre sanctuaire de lenteur. Nous croyons en une pratique décomplexée, joyeuse et profondément humaine.
                    </p>
                </div>
            </section>

            {/* Our Story / Founder Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200 order-2 lg:order-1">
                            {/* Placeholder Image */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1926&auto=format&fit=crop')] bg-cover bg-center" />
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">L'histoire Yogavita</h2>
                            <div className="prose prose-lg prose-stone text-stone-600">
                                <p>
                                    Tout a commencé par un constat simple : le yoga moderne intimide. Entre les postures acrobatiques sur Instagram et les studios élitistes, il est facile de se sentir "pas assez souple" ou "pas assez zen".
                                </p>
                                <p>
                                    J'ai créé **Yogavita avec Poupynails et Nailsy** pour briser ces barrières. Venant du monde de l'esthétique et du soin, je sais à quel point le corps peut souffrir de gestes répétitifs et du stress professionnel.
                                </p>
                                <p>
                                    Notre approche est pragmatique : comment le yoga peut-il soulager votre dos après 8h de travail ? Comment la méditation peut-elle calmer votre anxiété le dimanche soir ?
                                </p>
                                <blockquote className="border-l-4 border-clay-500 pl-4 italic text-stone-800 font-serif text-xl my-6">
                                    "Le bien-être n'est pas un luxe, c'est une nécessité vitale pour durer et s'épanouir."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid (Bento Style) */}
            <section className="py-24 bg-sand-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Nos Piliers</h2>
                        <p className="text-stone-600">Ce qui guide chacune de nos publications et recommandations.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-sand-200">
                            <div className="h-12 w-12 bg-sand-100 rounded-full flex items-center justify-center mb-6 text-clay-600">
                                <Sun className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">Clarté Radicale</h3>
                            <p className="text-stone-600">Pas de jargon mystique incompréhensible. Nous expliquons le "pourquoi" et le "comment" de chaque posture avec des mots simples.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-clay-900 text-sand-50 p-8 rounded-3xl shadow-md md:scale-105 transform">
                            <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-6 text-clay-300">
                                <Heart className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-serif">Bienveillance Totale</h3>
                            <p className="text-sand-200">Votre corps n'est pas un ennemi à dompter. Nous encourageons l'écoute, l'adaptation et l'utilisation d'accessoires sans honte.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-sand-200">
                            <div className="h-12 w-12 bg-sand-100 rounded-full flex items-center justify-center mb-6 text-clay-600">
                                <Anchor className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">Ancrage Réel</h3>
                            <p className="text-stone-600">Le yoga doit servir votre vie réelle. Nous créons des ponts entre sagesse ancienne et défis modernes (télétravail, stress, sommeil).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team / Community */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Rejoignez le mouvement</h2>
                    <p className="text-xl text-stone-600 mb-12">
                        Déjà plus de 1000 lecteurs mensuels apprennent à ralentir avec nous.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/blog" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-stone-900 rounded-full hover:bg-clay-600 transition-colors">
                            Lire nos derniers articles
                        </Link>
                        <Link href="/studios" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-stone-900 bg-sand-200 rounded-full hover:bg-sand-300 transition-colors">
                            Trouver un cours près de chez vous
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
