"use client";

import Link from "next/link";
import { Flower, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none">
                <div className="mx-auto max-w-5xl">
                    <div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-sm pointer-events-auto transition-all duration-300 hover:shadow-md hover:bg-white/80 bg-white/60 backdrop-blur-md">
                        <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
                            <div className="bg-clay-500 rounded-full p-1.5 text-white transition-transform group-hover:rotate-12">
                                <Flower className="h-4 w-4" />
                            </div>
                            <span className="text-lg font-bold tracking-tight text-stone-900 font-serif">Yogavita<span className="text-clay-500">.</span></span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
                            <Link href="/blog" className="hover:text-clay-600 transition-colors">
                                Journal
                            </Link>
                            <Link href="/poses" className="hover:text-clay-600 transition-colors">
                                Postures
                            </Link>
                            <Link href="/studios" className="hover:text-clay-600 transition-colors">
                                Studios
                            </Link>
                            <Link href="/a-propos" className="hover:text-clay-600 transition-colors">
                                Philosophie
                            </Link>
                        </nav>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden text-stone-600 p-1"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-sand-100/95 backdrop-blur-xl md:hidden flex items-center justify-center animate-[fadeIn_0.3s_ease-out]">
                    <nav className="flex flex-col items-center gap-8 text-2xl font-serif text-stone-800">
                        <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-clay-600 transition-colors">
                            Accueil
                        </Link>
                        <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-clay-600 transition-colors">
                            Journal
                        </Link>
                        <Link href="/poses" onClick={() => setIsOpen(false)} className="hover:text-clay-600 transition-colors">
                            Postures
                        </Link>
                        <Link href="/studios" onClick={() => setIsOpen(false)} className="hover:text-clay-600 transition-colors">
                            Studios
                        </Link>
                        <Link href="/a-propos" onClick={() => setIsOpen(false)} className="hover:text-clay-600 transition-colors">
                            Philosophie
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}

