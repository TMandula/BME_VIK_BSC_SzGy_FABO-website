import { useEffect, useState } from "react";

const ParallaxSection = ({ src, height = "60vh", children }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ height }}>
      {/* Parallax Image */}
      <img
        src={src}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
