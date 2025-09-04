const Services = () => {
  return (
    <>            
        {/* SERVICES SECTION */}
        <section id="services" className="bg-gray-200 py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl font-bold mb-8" 
                    data-lang-de="Dienstleistungen" 
                    data-lang-en="Services">
                    Dienstleistungen
                </h2>

                {/* Intro */}
                <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12"
                    data-lang-de="Wir bieten flexible Outsourcing-Lösungen 
                    in allen wichtigen Bereichen der Buchhaltung 
                    und des Finanzwesens."
                    data-lang-en="We provide tailored outsourcing solutions 
                    for all key areas of accounting and finance.">
                    Wir bieten flexible Outsourcing-Lösungen 
                    in allen wichtigen Bereichen der Buchhaltung 
                    und des Finanzwesens.
                </p>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto ">

                    {/* AP/AR */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition transition-all duration-300 border-b-4 border-transparent hover:-translate-y-2 hover:border-blue-500">
                        <div className="text-blue-500 text-5xl mb-4">
                            <i className="fas fa-file-invoice-dollar"></i>
                        </div>
                        <h3 className="font-bold text-xl mb-6" 
                            data-lang-de="AP/AR" 
                            data-lang-en="AP/AR">
                            AP/AR
                        </h3>
                        <p className="text-gray-600 text-left mb-4"
                            data-lang-de="AP/AR-Prozesse sind zeitaufwendig 
                            und entscheidend für einen reibungslosen 
                            Monats- und Jahresabschluss."
                            data-lang-en="AP/AR processes are time-intensive 
                            and critical for smooth month- and year-end closings.">
                            AP/AR-Prozesse sind zeitaufwendig 
                            und entscheidend für einen reibungslosen 
                            Monats- und Jahresabschluss.
                        </p>
                        <p className="text-gray-600 text-left"
                            data-lang-de="Wir beschleunigen diese Abläufe 
                            und sichern Genauigkeit und Kontinuität – 
                            durch die Verstärkung Ihres Teams 
                            oder durch die Bereitstellung eines kompletten Expertenteams."
                            data-lang-en="Our teams accelerate these tasks, 
                            ensuring accuracy and continuity — 
                            either by strengthening your existing staff 
                            or by providing a dedicated team.">
                            Wir beschleunigen diese Abläufe 
                            und sichern Genauigkeit und Kontinuität – 
                            durch die Verstärkung Ihres Teams 
                            oder durch die Bereitstellung eines kompletten Expertenteams.
                        </p>
                    </div>

                    {/* Treasury */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition transition-all duration-300 border-b-4 border-transparent hover:-translate-y-2 hover:border-green-500">
                        <div className="text-green-500 text-5xl mb-4">
                            <i className="fas fa-piggy-bank"></i>
                        </div>
                        <h3 className="font-bold text-xl mb-6" 
                            data-lang-de="Treasury" 
                            data-lang-en="Treasury">
                            Treasury
                        </h3>
                        <p className="text-gray-600 mb-10 text-left"
                            data-lang-de="Treasury erfordert höchste Sorgfalt 
                            und Vertraulichkeit."
                            data-lang-en="Treasury management requires precision and confidentiality.">
                            Treasury erfordert höchste Sorgfalt 
                            und Vertraulichkeit.
                        </p>
                        <p className="text-gray-600 text-left"
                            data-lang-de="Unsere erfahrenen Fachkräfte unterstützen Sie 
                            in den täglichen Abläufen, der Liquiditätsplanung 
                            und im Reporting – stets mit Fokus auf Compliance 
                            und Transparenz."
                            data-lang-en="Our experienced professionals support you 
                            in daily operations, liquidity planning, 
                            and reporting, ensuring compliance and control at every step.">
                            Unsere erfahrenen Fachkräfte unterstützen Sie 
                            in den täglichen Abläufen, der Liquiditätsplanung 
                            und im Reporting – stets mit Fokus auf Compliance 
                            und Transparenz.
                        </p>
                    </div>

                    {/* Hauptbuchhaltung */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition transition-all duration-300 border-b-4 border-transparent hover:-translate-y-2 hover:border-blue-900">
                        <div className="text-blue-900 text-5xl mb-4" style={{ color: "#073D7F" }}>
                            <i className="fas fa-book"></i>
                        </div>
                        <h3 className="font-bold text-xl mb-6" 
                            data-lang-de="Hauptbuchhaltung" 
                            data-lang-en="General Accounting">
                            Hauptbuchhaltung
                        </h3>
                        <p className="text-gray-600 mb-4 text-left"
                            data-lang-de="Rückstellungen, Anlagenbuchhaltung und 
                            Hauptbuchungen sind das Fundament eines korrekten Abschlusses."
                            data-lang-en="Accruals, Fixed Asset, and General Ledger bookings are essential for accurate financial statements.">
                            Rückstellungen, Anlagenbuchhaltung und Hauptbuchungen sind 
                            das Fundament eines korrekten Abschlusses.
                        </p>
                        <p className="text-gray-600 text-left"
                            data-lang-de="Wir übernehmen diese Aufgaben effizient 
                            und stellen sicher, dass Ihre Monats- und Jahresabschlüsse 
                            rechtzeitig und fehlerfrei erfolgen."
                            data-lang-en="We accelerate these processes 
                            and provide expert support for timely and correct closings.">
                            Wir übernehmen diese Aufgaben effizient 
                            und stellen sicher, dass Ihre Monats- und Jahresabschlüsse 
                            rechtzeitig und fehlerfrei erfolgen.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    </>
  );
};

export default Services;