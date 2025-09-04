const Parallax_02 = () => {
    return (
        <>
            {/* Parallax - Berliner Fernsehturm */}
            <section 
                className="relative h-[60vh] bg-fixed bg-cover bg-center"
                style={{ backgroundImage: "url('/images/tim-hufner-d7TjlJ4MNMs-unsplash.jpg')" }}
            >
                {/* Overlay div for opacity */}
                <div className="absolute inset-0 bg-black opacity-30"></div>

                <div className="h-full flex items-center justify-center">
                <h2 
                    className="text-white text-4xl font-bold drop-shadow-lg text-center" 
                    data-lang-de="Erfolg durch Präzision und Partnerschaft." 
                    data-lang-en="Success through precision and partnership.">
                    Erfolg durch Präzision und Partnerschaft.
                </h2>
                </div>
            </section>
        </>
    );
}

export default Parallax_02;