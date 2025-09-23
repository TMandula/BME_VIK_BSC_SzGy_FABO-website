import { useTranslation } from "react-i18next";

const ParallaxSection = ({ src, translationKey, height = "60vh" }) => {
  const { t } = useTranslation();

  return (
    <section 
        className="relative bg-fixed bg-center bg-cover" 
        style={{ height, backgroundImage: `url(${src})`, }}>

      {/* Overlay div for opacity */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="h-full flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold drop-shadow-lg text-center">
            {translationKey ? t(translationKey) : null}
        </h2>
      </div>
    
    </section>
  );
};

export default ParallaxSection;
