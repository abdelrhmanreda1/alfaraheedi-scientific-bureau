"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFlask,
  FaMicroscope,
  FaHandshake,
  FaBullseye,
  FaEye,
} from "react-icons/fa";

const iconBadge =
  "w-10 h-10 md:w-13 md:h-13 flex-none flex items-center justify-center rounded-full bg-gradient-to-br from-[#1fb4d6] to-[#0275aa] text-white  hover:shadow-xl hover:scale-105 transition-all duration-300";
const premiumCard =
  "bg-gradient-to-br from-[#ffffff] to-[#f9fcff] p-5 md:p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-transparent bg-clip-padding relative overflow-hidden hover:shadow-[0_6px_26px_rgba(0,0,0,0.07)] transition-all duration-300";

const AboutUs = () => {
  return (
    <section id="about" className="relative bg-[#f2f9ff] py-12 md:py-20 px-5 md:px-10">
      <div className="w-[95%] md:w-[85%] mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#024d75] tracking-wide">
            About Us
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#1A7250] to-[#23A6A6] mx-auto mt-5 rounded-full"></div>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2  gap-16">
          {/* LEFT – ABOUT POINTS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-12 order-2 md:order-1"
          >
            {/* Point 1 */}
            <div className="flex items-start gap-6">
              <span className={`${iconBadge} md:mt-0 mt-2 `}>
                <FaFlask className="w-6 h-6" />
              </span>
              <p className="text-[14px] md:text-xl leading-9 text-gray-800">
                <span className="font-bold text-[#024d75]">
                  Al-Farahidi Scientific Bureau
                </span>{" "}
                is a leading pharmaceutical scientific office based in Basra,
                Iraq, dedicated to delivering high-quality, evidence-based
                pharmaceutical products.
              </p>
            </div>

            {/* Point 2 */}
            <div className="flex items-start gap-6">
              <span className={`${iconBadge} md:mt-0 mt-2 `}>
                <FaMicroscope className="w-6 h-6" />
              </span>
              <p className="text-[14px] md:text-xl leading-8 text-gray-700">
                We focus on strong scientific communication, medical engagement,
                and supporting healthcare professionals with accurate, trusted
                knowledge.
              </p>
            </div>

            {/* Point 3 */}
            <div className="flex items-start gap-6">
              <span className={`${iconBadge} md:mt-0 mt-2 `}>
                <FaHandshake className="w-8 h-8" />
              </span>
              <p className="text-[14px] md:text-xl leading-8 text-gray-700">
                Since our establishment, we’ve built a solid reputation for
                integrity, professionalism, and sustainable partnerships with
                global pharmaceutical manufacturers.
              </p>
            </div>
          </motion.div>

          {/* RIGHT – IMAGE */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#d6ecf7]">
              <Image
                src="/about.jpeg"
                alt="About Us"
                width={600}
                height={450}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-12 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={premiumCard}
          >
            <div>
              <div className="flex items-center gap-4">
                <span className={iconBadge}>
                  <FaBullseye className="w-5 md:w-7 md:h-7 h-5" />
                </span>
                <h3 className="text-2xl font-bold text-[#024d75]">
                  Our Mission
                </h3>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-[#e4f2fb] my-3 md:my-6"></div>

              <p className="text-gray-700 leading-8 md:text-[17px] text-[15px]">
                To elevate healthcare outcomes in Iraq by delivering
                scientifically proven pharmaceutical solutions, empowering
                medical professionals with accurate knowledge, and ensuring
                ethical, impactful market presence.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={premiumCard}
          >
            <div>
              <div className="flex items-center gap-4">
                <span className={iconBadge}>
                  <FaEye className="w-5 md:w-7 md:h-7 h-5" />
                </span>
                <h3 className="text-2xl font-bold text-[#024d75]">
                  Our Vision
                </h3>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-[#e4f2fb] my-3 md:my-6"></div>

              <p className="text-gray-700 leading-8 md:text-[17px] text-[15px]">
                To become one of Iraq’s most trusted and respected scientific
                offices, known for quality, innovation, and sustainable growth
                in the pharmaceutical field.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
