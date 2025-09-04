const Footer = () => {
    return (
        <>
            {/* FOOTER */}
            <footer className="bg-slate-900 text-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="text-xl font-extrabold text-white">
                            FABO Accounting
                        </div>
                        <p className="mt-3 text-slate-400 text-sm"
                            data-lang-de="Budapest · Miskolc · Ungarn"
                            data-lang-en="Budapest · Miskolc · Hungary">Budapest · Miskolc · Ungarn</p>
                    </div>
                    <nav className="space-y-2">
                        <div className="font-semibold text-white" 
                            data-lang-de="Standorte" 
                            data-lang-en="Locations">Standorte</div>
                        <p className="mt-3 text-slate-400 text-sm"
                            data-lang-de="Budapest, Ungarn"
                            data-lang-en="Budapest, Hungary">Budapest, Hungary
                        </p>
                        <p className="mt-3 text-slate-400 text-sm"
                            data-lang-de="Miskolc, Ungarn"
                            data-lang-en="Miskolc, Hungary">Miskolc, Hungary</p>
                    </nav>
                    <nav className="space-y-2">
                        <div className="font-semibold text-white" 
                            data-lang-de="Menü" 
                            data-lang-en="Menu">Menü</div>
                        <a href="#home" 
                            className="block w-max min-w-[16ch] text-slate-400 hover:text-white"
                            data-lang-de="Startseite" 
                            data-lang-en="Home">Home</a>
                        <a href="#about"  
                            className="block w-max min-w-[16ch] text-slate-400 hover:text-white"
                            data-lang-de="Über uns" 
                            data-lang-en="About us">About us</a>
                        <a href="#services"  
                            className="block w-max min-w-[16ch] text-slate-400 hover:text-white"
                            data-lang-de="Dienstleistungen" 
                            data-lang-en="Services">Services</a>
                        <a href="#technologies"  
                            className="block w-max min-w-[16ch] text-slate-400 hover:text-white"
                            data-lang-de="Technologien" 
                            data-lang-en="Technologies">Technologies</a>
                        <a href="#contact"  
                            className="block w-max min-w-[16ch] text-slate-400 hover:text-white"
                            data-lang-de="Kontakt" 
                            data-lang-en="Contact">Contact</a>
                    </nav>
                    <div className="space-y-2">
                        <div className="font-semibold text-white">Kontakt</div>
                        <a href="mailto:fabobudapest@gmail.com" 
                            className="text-slate-400 text-sm hover:text-white">
                            ✉ fabobudapest@gmail.com
                        </a><br />
                        <a href="tel:+49123456789" 
                            className="text-slate-400 text-sm hover:text-white">
                            ☎ +49 123 456 789
                        </a>
                    </div>
                </div>
                <div className="border-t border-slate-800"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-400 flex items-center justify-between">
                    <span>© 2025 FABO Accounting. Alle Rechte vorbehalten.</span>
                    <div className="flex gap-4">
                        <a href="/impressum.html" 
                            className="hover:text-white"
                            data-lang-de="Impressum"
                            data-lang-en="Imprint">
                            Impressum
                        </a>
                        <a href="/datenschutz.html" 
                            className="hover:text-white"
                            data-lang-de="Datenschutz"
                            data-lang-en="Privacy Policy">
                            Datenschutz
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer