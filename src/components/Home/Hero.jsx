import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[98vh] w-full overflow-hidden flex items-center">
      {/* BG Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpeg"
          alt="Pharmaceutical Background"
          fill
          className="object-cover object-center brightness-[0.78]"
        />
      </div>

      {/* Softer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#062E3F]/55 via-[#0A3C52]/25 to-transparent"></div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#062E3F]/45 to-transparent"></div>

      {/* Content */}
      <div className="relative z-20 w-[90%] mx-auto max-w-[900px] flex flex-col gap-4 ">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.15] md:ml-0 ml-2">
          Elevating Pharmaceutical
          <br /> Excellence in Iraq
        </h1>

        <p className="text-[15px] md:text-lg text-white/85 max-w-[620px] leading-relaxed md:ml-0 ml-2">
          Delivering evidence-based pharmaceutical solutions that bridge global
          innovation with the real needs of healthcare professionals in Iraq.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-3 md:ml-0 ml-2">
          <Link
            href="/Products"
            className="px-7 py-2.5 rounded-full font-semibold text-[#0A3C52] 
             bg-white border border-white/70 
             transition-all duration-200 
             hover:-translate-y-[2px] hover:shadow-[0_6px_12px_rgba(255,255,255,0.25)] 
             hover:bg-[#F2FAFF]"
          >
            View Products
          </Link>

          <Link
            href="/#about"
            className="px-7 py-2.5 rounded-full font-semibold 
             text-white border border-white/60 
             transition-all duration-200 
             hover:bg-white hover:text-[#0A3C52] 
             hover:-translate-y-[2px] hover:shadow-[0_6px_12px_rgba(255,255,255,0.25)]"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
