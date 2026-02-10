import Link from "next/link";
import { Facebook, Instagram, Linkedin, Send } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-clay-900 text-sand-100 pt-20 pb-10">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand & Manifesto */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="font-serif text-3xl font-bold bg-gradient-to-r from-sand-100 to-sand-300 bg-clip-text text-transparent">
                                Yogavita.
                            </span>
                        </Link>
                        <p className="text-sand-300 leading-relaxed font-light">
                            Votre sanctuaire quotidien pour cultiver l'équilibre entre le corps et l'esprit. Du tapis de yoga à la vie active, nous vous guidons vers une meilleure version de vous-même.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
                            <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
                            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-serif text-xl mb-6 text-sand-50">Explorer</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/poses">Asanathèque</FooterLink>
                            <FooterLink href="/studios">Studios & Retraites</FooterLink>
                            <FooterLink href="/blog">Le Journal</FooterLink>
                            <FooterLink href="/a-propos">Notre Philosophie</FooterLink>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-serif text-xl mb-6 text-sand-50">Information</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/mentions-legales">Mentions Légales</FooterLink>
                            <FooterLink href="/politique-confidentialite">Politique de Confidentialité</FooterLink>
                            <FooterLink href="#">CGU</FooterLink>
                            <FooterLink href="#">Contact</FooterLink>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-serif text-xl mb-6 text-sand-50">Restez Inspiré</h4>
                        <p className="text-sand-300 text-sm mb-4">
                            Recevez nos meilleurs conseils et postures chaque semaine. Pas de spam, promis.
                        </p>
                        <form className="flex flex-col gap-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="w-full bg-clay-800 border border-clay-700 rounded-lg px-4 py-3 text-sand-100 placeholder-clay-500 focus:outline-none focus:border-sand-400 transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-sand-200 text-clay-900 rounded-md hover:bg-white transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                            <span className="text-xs text-clay-500">
                                En vous inscrivant, vous acceptez notre politique de confidentialité.
                            </span>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-clay-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-clay-500">
                    <p>© {new Date().getFullYear()} Yogavita. Tous droits réservés.</p>
                    <p>Fait avec ❤️ et beaucoup de 🧘‍♀️ à Paris.</p>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link
                href={href}
                className="text-sand-300 hover:text-white transition-colors duration-300 flex items-center group"
            >
                <span className="w-0 h-px bg-sand-200 mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2 opacity-0 group-hover:opacity-100" />
                {children}
            </Link>
        </li>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="w-10 h-10 rounded-full bg-clay-800 flex items-center justify-center text-sand-300 hover:bg-sand-200 hover:text-clay-900 transition-all duration-300 transform hover:-translate-y-1"
        >
            {icon}
        </a>
    );
}
