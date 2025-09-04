const Summary = () => {
    return (
        <>
            {/* SUMMARY ABOUT US */}
            <section id="summary" className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl font-bold"
                        data-lang-de="FABO Accounting im Überblick"
                        data-lang-en="FABO Accounting at a Glance">
                        Über uns
                    </h2>
                    <p className="mt-3 text-slate-600"
                        data-lang-de="Wir sind ein spezialisiertes Outsourcing-Team 
                        mit Fokus auf deutsche Standards und einer klaren 
                        Hands-on-Mentalität."
                        data-lang-en="We are a specialized outsourcing team 
                        with a strong focus on German accounting standards 
                        and a hands-on mentality.">
                        Wir sind ein spezialisiertes Outsourcing-Team 
                        mit Fokus auf deutsche Standards und einer klaren 
                        Hands-on-Mentalität.
                    </p>
                    <p className="mt-3 text-slate-600"
                        data-lang-de="Unser Versprechen: transparente Kommunikation, 
                        feste Ansprechpartner und messbare Ergebnisse."
                        data-lang-en="Our approach: transparent communication, 
                        fixed contact persons, and measurable results.">
                        Unser Versprechen: transparente Kommunikation, 
                        feste Ansprechpartner und messbare Ergebnisse.
                    </p>
                    <ul className="mt-4 text-slate-700 list-disc pl-5">
                    <li><p data-lang-de="Remote-First-Zusammenarbeit" 
                        data-lang-en="Remote-first cooperation">
                        Remote-First-Zusammenarbeit
                        </p>
                    </li>
                    <li><p data-lang-de="Schnelle Verfügbarkeit & Skalierbarkeit" 
                        data-lang-en="Fast availability & scalability">
                        Schnelle Verfügbarkeit & Skalierbarkeit
                        </p>
                    </li>
                    <li><p data-lang-de="Sichere, SLA-basierte und auditierbare Prozesse" 
                        data-lang-en="Secure, SLA-based, and auditable processes">
                        Sichere, SLA-basierte und auditierbare Prozesse
                        </p>
                    </li>
                    </ul>
                </div> 
                <img 
                    src="/images/summary-about-us.jpg" 
                    alt="Teamarbeit im Finanzwesen" 
                    className="w-full h-full object-contain rounded-2xl object-cover w-full h-72" 
                    loading="eager" />
                </div>
            </section>
        </>
    );
}

export default Summary;