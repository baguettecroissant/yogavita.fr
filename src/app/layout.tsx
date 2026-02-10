import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    template: "%s | Yogavita.fr",
    default: "Yogavita.fr - Bien-être, Yoga et Sérénité",
  },
  description: "Découvrez nos guides et conseils pour intégrer le yoga et le bien-être dans votre quotidien.",
  metadataBase: new URL("https://yogavita.fr"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn(inter.variable, playfair.variable)}>
      <body className="flex min-h-screen flex-col font-sans transition-colors duration-300">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
