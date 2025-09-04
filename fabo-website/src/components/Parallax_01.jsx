const Parallax_01 = () => {
    return (
        <>
            {/* Parallax Section 1 - Deutsche Landschaft */}
            <section 
                className="relative h-[60vh] bg-fixed bg-cover bg-center"
                style={{ backgroundImage: "url('/images/eric-weber--KPwl1VaSyw-unsplash.jpg')" }}
            >
                {/* Overlay div for opacity */}
                <div className="absolute inset-0 bg-black opacity-30"></div>

                <div className="h-full flex items-center justify-center">
                    <h2 
                        className="text-white text-4xl font-bold drop-shadow-lg text-center"
                        data-lang-de="Aus Zahlen Chancen machen." 
                        data-lang-en="Turning numbers into opportunities.">
                        Aus Zahlen Chancen machen.
                    </h2>
                </div>
            </section>
        </>
    );
}   
export default Parallax_01;