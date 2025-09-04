const Parallax_03 = () => {
    return (
        <>
            {/* Parallax - Brangengurger Tor */}
            <section 
                className="relative h-[60vh] bg-fixed bg-center bg-cover" 
                style={{ backgroundImage: "url('/images/alvaro-sanchez-h8Tvv2fTNs8-unsplash.jpg')" }}
                >
                {/* Overlay div for opacity */}
                <div className="absolute inset-0 bg-black opacity-30"></div>

                <div className="h-full flex items-center justify-center">
                    <h2 
                        className="text-white text-4xl font-bold drop-shadow-lg text-center" 
                        data-lang-de="Ihr Erfolg ist unser Geschäft – jedes Detail zählt." 
                        data-lang-en="Your success is our business — every detail matters.">
                        Ihr Erfolg ist unser Geschäft – jedes Detail zählt.
                    </h2>
                </div>
            </section>
        </>
    );
}

export default Parallax_03;