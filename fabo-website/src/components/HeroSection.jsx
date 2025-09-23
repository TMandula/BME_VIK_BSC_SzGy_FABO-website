const HeroSection = ({ id, image, height }) => (
  <section
    id={id}
    className="w-full bg-cover bg-center flex items-center justify-center text-white"
    style={{
      backgroundImage: `url('${image}')`,
      height: `${height}px`
    }}
  />
);

export default HeroSection;
