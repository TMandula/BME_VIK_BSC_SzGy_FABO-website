const Technologies = () => {
    return (
        <>  
            {/* TECHNOLOGIES */}
            <section id="technologies" className="bg-white py-16 px-4 max-w-5xl mx-auto">
                <div className="max-w-7xl mx-auto text-center">
                
                {/* Title */}
                <h2 className="text-4xl font-bold mb-4" 
                    data-lang-de="Technologien" 
                    data-lang-en="Technologies">
                    Technologies
                </h2>
                
                {/* Intro */}
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
                    data-lang-de="Unsere Fachkräfte sind in führenden ERP- 
                    und Buchhaltungssystemen geschult und können sich sofort 
                    in Ihre Prozesse einfügen:"
                    data-lang-en="Our professionals are proficient in leading ERP 
                    and accounting systems, ensuring smooth integration into 
                    your processes:">
                    Unsere Fachkräfte sind in führenden ERP- 
                    und Buchhaltungssystemen geschult und können sich sofort 
                    in Ihre Prozesse einfügen:
                </p>

                {/* Technology Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                    {/* Business Central */}
                    <div className="flex flex-col items-center">
                        <div className="tech-tile  border-2 border-gray-300 p-6 mb-6 hover:border-[#0FE0F2]">
                            <i className="fas fa-cogs text-[#0FE0F2] text-6xl"></i>
                        </div>
                        <p className="text-blue-900 font-semibold">Business Central</p>
                    </div>

                    {/* Datev */}
                    <div className="flex flex-col items-center">
                        <div className="tech-tile  border-2 border-gray-300 p-6 mb-6 hover:border-[#90d034]">
                            <i className="fas fa-file-invoice text-[#90d034] text-6xl"></i>
                        </div>
                        <p className="text-blue-900 font-semibold">DATEV</p>
                    </div>

                    {/* Lexware */}
                    <div className="flex flex-col items-center">
                        <div className="tech-tile  border-2 border-gray-300 p-6 mb-6 hover:border-[#ff4654]">
                            <i className="fas fa-chart-line text-[#ff4654] text-6xl"></i>
                        </div>
                        <p className="text-blue-900 font-semibold">Lexware</p>
                    </div>

                    {/* SAP Hana */}
                    <div className="flex flex-col items-center">
                        <div className="tech-tile  border-2 border-gray-300 p-6 mb-6 hover:border-[#1c5cbc]">
                            <i className="fas fa-database text-[#1c5cbc] text-6xl"></i>
                        </div>
                        <p className="text-blue-900 font-semibold">SAP HANA</p>
                    </div>

                </div>

                {/* Disclaimer */}
                <p className="mt-12 text-gray-500 text-sm max-w-3xl mx-auto"
                    data-lang-de="Alle Produktnamen, Logos und Marken sind Eigentum 
                    ihrer jeweiligen Inhaber. 
                    Die Verwendung dieser Namen impliziert keine Zugehörigkeit 
                    oder Billigung."
                    data-lang-en="All product names, logos, and brands are the 
                    property of their respective owners. 
                    Use of these names does not imply any affiliation or endorsement.">
                    Alle Produktnamen, Logos und Marken sind Eigentum 
                    ihrer jeweiligen Inhaber. 
                    Die Verwendung dieser Namen impliziert keine Zugehörigkeit 
                    oder Billigung.
                </p>
                </div>
            </section>
        </>
    );
}

export default Technologies;