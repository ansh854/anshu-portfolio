import HeroContent from "../components/hero/HeroContent";
import HeroImage from "../components/hero/HeroImage";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#030712] flex items-center"
    >
      {/* Background Glow */}

      <div className="absolute -left-44 top-10 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[180px]" />

      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto w-full px-8 lg:px-16 pt-28 pb-20 grid lg:grid-cols-2 gap-20 items-center">

        <HeroContent />

        <HeroImage />

      </div>
    </section>
  );
}

export default Hero;