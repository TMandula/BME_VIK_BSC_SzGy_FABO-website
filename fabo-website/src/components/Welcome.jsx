const Welcome = () => {
    return (
        <>
            {/* WELCOME TEXT SECTION */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <div className="mx-auto">
                    <h2 className="text-3xl font-bold mb-10" 
                        data-lang-de="Willkommen bei FABO Accounting" 
                        data-lang-en="Welcome to FABO Accounting">
                        Herzlich willkommen
                    </h2>
                    <p className="text-lg font-bold leading-relaxed mb-2" 
                        data-lang-de="Wir bieten Outsourcing-Lösungen zur Optimierung der Arbeitsabläufe deutscher Unternehmen." 
                        data-lang-en="We provide outsourced accounting solutions that make your financial workflows more efficient.">
                        Wir freuen uns, Sie auf unserer Webseite begrüßen zu dürfen. Unser Unternehmen steht für Qualität, Innovation und Kundenorientierung. Mit einem engagierten Team und modernen Technologien arbeiten wir daran, Ihre Visionen in die Realität umzusetzen.
                    </p>
                    <p className="text-lg leading-relaxed mb-6" 
                        data-lang-de="Unsere Experten integrieren sich schnell in Ihre Strukturen, übernehmen zeitintensive Aufgaben und sichern reibungslose Abläufe." 
                        data-lang-en="Our professionals integrate seamlessly into your company structure, taking over time-consuming or sensitive processes and ensuring smooth operations.">
                        Egal ob Sie ein kleines Start-up oder ein etabliertes Unternehmen sind – wir bieten maßgeschneiderte Lösungen, die Ihre individuellen Bedürfnisse erfüllen. Unser Ziel ist es, nicht nur Ihre Erwartungen zu erfüllen, sondern sie zu übertreffen.
                    </p>
                    <p className="text-lg leading-relaxed" 
                        data-lang-de="Ob für kurzfristige Projekte oder langfristige Unterstützung – wir sind der verlässliche Partner an Ihrer Seite." 
                        data-lang-en="Whether for short-term projects or long-term support – we are the reliable partner at your side.">
                        Schauen Sie sich um, lernen Sie unser Team kennen und entdecken Sie, wie wir gemeinsam Großes erreichen können.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Welcome;
