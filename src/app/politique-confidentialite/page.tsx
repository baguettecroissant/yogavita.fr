export default function PolitiqueConfidentialite() {
    return (
        <div className="bg-sand-50 min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4 text-center">
                    Politique de Confidentialité
                </h1>
                <p className="text-center text-stone-500 mb-12">Dernière mise à jour : {new Date().getFullYear()}</p>

                <div className="prose prose-stone prose-lg max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">

                    <h2 className="font-serif text-2xl text-stone-800 mt-0">1. Responsable du traitement</h2>
                    <p>
                        Le responsable du traitement des données collectées sur ce site est la société <strong>WADE STUDIO LTD</strong>,
                        sise au 432 Ave Bounty, Morcellement Balaclava, MAURITIUS (BRN: C25227533).
                    </p>

                    <h2 className="font-serif text-2xl text-stone-800">2. Nature des données collectées</h2>
                    <p>
                        Dans le cadre de l'utilisation de notre site, nous pouvons être amenés à collecter les données suivantes :
                    </p>
                    <ul>
                        <li><strong>Données de navigation :</strong> Adresse IP, type de navigateur, pages visitées (via les cookies).</li>
                        <li><strong>Données de contact :</strong> Adresse email (via le formulaire de newsletter).</li>
                    </ul>

                    <h2 className="font-serif text-2xl text-stone-800">3. Finalité du traitement</h2>
                    <p>Vos données sont collectées pour :</p>
                    <ul>
                        <li><strong>Amélioration du service :</strong> Analyser l'audience du site pour optimiser l'expérience utilisateur.</li>
                        <li><strong>Communication :</strong> Vous envoyer la newsletter si vous y avez souscrit (désinscription possible à tout moment).</li>
                    </ul>

                    <h2 className="font-serif text-2xl text-stone-800">4. Transmission des données à des tiers</h2>
                    <p>
                        WADE STUDIO LTD s'engage à ne pas vendre vos données à des tiers.
                        Les données peuvent transiter par des prestataires techniques (hébergement, outil d'envoi d'emails)
                        dans le strict respect de la sécurité de vos informations.
                    </p>

                    <h2 className="font-serif text-2xl text-stone-800">5. Transfert de données hors UE</h2>
                    <p>
                        L'éditeur du site étant établi à Maurice, les données peuvent transiter techniquement hors de l'Union Européenne.
                        WADE STUDIO LTD s'engage à prendre toutes les mesures de sécurité nécessaires pour garantir un niveau de protection
                        des données conforme aux standards du RGPD.
                    </p>

                    <h2 className="font-serif text-2xl text-stone-800">6. Vos droits (RGPD)</h2>
                    <p>
                        Conformément à la réglementation européenne, vous disposez d'un droit d'accès, de rectification,
                        de suppression et d'opposition concernant vos données.
                    </p>
                    <p>
                        Pour exercer ce droit, contactez-nous à : <a href="mailto:contact@yogavita.fr" className="text-clay-600 hover:underline">contact@yogavita.fr</a>
                    </p>

                    <h2 className="font-serif text-2xl text-stone-800">7. Cookies</h2>
                    <p>
                        Ce site utilise des cookies pour le fonctionnement technique et l'analyse de trafic anonyme.
                        Vous pouvez configurer votre navigateur pour refuser les cookies.
                    </p>

                </div>
            </div>
        </div>
    );
}
