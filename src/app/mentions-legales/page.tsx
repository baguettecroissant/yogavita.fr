export default function MentionsLegales() {
    return (
        <div className="bg-sand-50 min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-12 text-center">
                    Mentions Légales
                </h1>

                <div className="prose prose-stone prose-lg max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">

                    <h2 className="font-serif text-2xl text-stone-800 mt-0">1. Éditeur du site</h2>
                    <p>
                        Le site <strong>yogavita.fr</strong> est édité par la société :
                    </p>
                    <p className="bg-sand-100 p-6 rounded-lg border border-sand-200 not-italic">
                        <strong>WADE STUDIO LTD</strong><br />
                        Société enregistrée auprès du Registrar of Companies de Maurice.<br />
                        <strong>Business Registration Number (BRN) :</strong> C25227533<br />
                        <strong>File No :</strong> C227533<br />
                        <strong>Siège social :</strong> 432 Ave Bounty, Morcellement Balaclava, MAURITIUS.<br />
                        <br />
                        <strong>Directeur de la publication :</strong> Wade Timothy<br />
                        <strong>Email de contact :</strong> contact@yogavita.fr
                    </p>

                    <h2 className="font-serif text-2xl text-stone-800">2. Hébergement</h2>
                    <p>
                        Le site est hébergé par la société <strong>Vercel Inc.</strong><br />
                        Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.<br />
                        Le stockage des données est assuré sur des serveurs sécurisés.
                    </p>

                    <h2 className="font-serif text-2xl text-stone-800">3. Propriété intellectuelle</h2>
                    <p>
                        L'ensemble de ce site relève de la législation internationale sur le droit d'auteur et la propriété intellectuelle.
                        Tous les droits de reproduction sont réservés. La marque "WADE STUDIO LTD" et le nom de domaine "yogavita.fr" sont la propriété exclusive de l'éditeur.
                    </p>
                    <p>
                        Toute reproduction ou représentation, intégrale ou partielle, du site ou de l'un des éléments qui le composent,
                        sans l'autorisation expresse et préalable de l'éditeur, est interdite et constituerait une contrefaçon.
                    </p>

                    <h2 className="font-serif text-2xl text-stone-800">4. Limitation de responsabilité</h2>
                    <p>
                        Le site yogavita.fr a pour but de fournir des informations sur le yoga et le bien-être.
                        L'éditeur s'efforce de fournir des informations aussi précises que possible mais ne saurait garantir l'exactitude,
                        la complétude et l'actualité des informations diffusées sur son site.
                    </p>
                    <p>
                        La société WADE STUDIO LTD n'est pas responsable de l'utilisation faite des informations présentes sur le site
                        et de tout préjudice direct ou indirect pouvant en découler.
                    </p>
                </div>
            </div>
        </div>
    );
}
