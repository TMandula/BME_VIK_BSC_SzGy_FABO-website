const About = () => {
    return (
        <>
            {/* About Us Section */}
            <section id="about" className="max-w-4xl mx-auto px-6 py-16">
                <div className="mx-auto">
                    <h2 className="text-3xl font-bold mb-6" data-lang-de="Über uns" data-lang-en="About Us">Über uns</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4" 
                        data-lang-de="Wir sind ein ungarisches Wirtschaftsprüfungs - 
                        und Buchhaltungsunternehmen mit Sitz in Budapest – 
                        spezialisiert auf die Zusammenarbeit 
                        mit internationalen und deutschen Firmen." 
                        data-lang-en="FABO Accounting is a Hungarian auditing 
                        and accounting firm based in Budapest, 
                        working primarily with international and German companies.">
                        Wir sind ein ungarisches Wirtschaftsprüfungs - 
                        und Buchhaltungsunternehmen mit Sitz in Budapest – 
                        spezialisiert auf die Zusammenarbeit 
                        mit internationalen und deutschen Firmen.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4" 
                        data-lang-de="Unsere jungen, hochqualifizierten Finanzexperten verfügen 
                        über Erfahrung mit deutschen und internationalen Standards 
                        (HGB, IFRS, Umsatzsteuerrecht) und unterstützen Sie 
                        zuverlässig bei allen buchhalterischen Aufgaben." 
                        data-lang-en="Our young yet experienced financial professionals 
                        are skilled in German and international standards 
                        (HGB, IFRS, VAT regulations) and can support you 
                        in a wide range of accounting and reporting tasks.">
                        Unsere jungen, hochqualifizierten Finanzexperten verfügen 
                        über Erfahrung mit deutschen und internationalen Standards 
                        (HGB, IFRS, Umsatzsteuerrecht) und unterstützen Sie 
                        zuverlässig bei allen buchhalterischen Aufgaben.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed" 
                        data-lang-de="Mit uns gewinnen Sie nicht nur Kapazität, sondern einen Partner, dem Sie vertrauen können." 
                        data-lang-en="With us, you don’t just gain extra capacity – 
                        you gain a trustworthy partner who understands your needs 
                        and delivers reliable results.">
                        Mit uns gewinnen Sie nicht nur Kapazität, sondern einen Partner, dem Sie vertrauen können.
                    </p>
                </div>
            </section>
        </>
    )
}

export default About;