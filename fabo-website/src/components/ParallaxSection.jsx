import { useEffect, useState, useRef } from "react";

const ParallaxSection = ({ src, height = "60vh", children }) => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setOffset(-rect.top);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ height }}>
      <img
        src={src}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
export { ParallaxSection };