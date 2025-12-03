"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const images = ["/slider3.jpeg", "/slider2.jpeg", "/slider1.jpeg"];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeout = useRef(null);
  const router = useRouter();

  const goToProducts = () => {
    router.push("/Products");
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    renderMode: "performance",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const clearNext = () => timeout.current && clearTimeout(timeout.current);

    const autoPlay = () => {
      clearNext();
      timeout.current = setTimeout(() => {
        if (instanceRef.current) instanceRef.current.next();
      }, 3000);
    };

    autoPlay();
    instanceRef.current?.on("slideChanged", autoPlay);

    return () => clearNext();
  }, [instanceRef]);

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider h-[86vh] lg:h-[92vh]">
        {images.map((src, i) => (
          <div key={i} className="keen-slider__slide relative">
            <Image
              src={src}
              alt={`slide-${i}`}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />

            {/* TEXT + BUTTON */}
            <div className="absolute mt-20 inset-0 flex flex-col justify-center items-center text-center px-4">
              {/* HERO TITLE */}
              <motion.h2
                key={currentSlide + "-text"}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[25px] mt-20 md:text-7xl font-extrabold text-white leading-tight mb-6
                drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] tracking-wide"
              >
                Bringing Health Solutions <br /> Across Borders
              </motion.h2>

              {/* CTA BUTTON */}
              <motion.button
                onClick={goToProducts}
                key={currentSlide + "-btn"}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
                className="relative mt-7 md:mt-12 px-6 md:px-8 py-3 cursor-pointer rounded-full 
  bg-white text-[#035182] text-lg font-semibold overflow-hidden group shadow-md"
              >
                {/* الشريط اللي بيتمدد */}
                <span
                  className="absolute top-0 left-0 h-full w-7 
    bg-gradient-to-r from-[#1592A6] to-[#7BCF34]
    rounded-r-full transition-all duration-500 ease-out 
    group-hover:w-full group-hover:rounded-none"
                ></span>

                {/* النص */}
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  View All Products
                </span>
              </motion.button>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => instanceRef.current?.moveToIdx(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer 
              ${
                currentSlide === i
                  ? "bg-[#7BCF34]" // الأخضر لما يكون Active
                  : "bg-white/60 border border-white"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
