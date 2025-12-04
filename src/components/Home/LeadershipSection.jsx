"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Dr. Zahir",
    title: "Chief Executive Officer (CEO)",
    image: "/zahir.jpeg",
    bio: `Chief Executive Officer with a strong background in healthcare business management and 
    scientific office leadership. Oversees company strategy, partnerships, and market expansion while 
    ensuring high standards of professionalism and service. Focused on building trusted relationships 
    with international suppliers and maintaining sustainable growth in the pharmaceutical sector 
    through quality-driven operations and innovative business approaches.`,
  },
  {
    name: "Dr. Doaa",
    title: "Product & Business Development Manager",
    image: "/ceo.jpeg",
    bio: `Product & Business Development Manager with extensive experience in the pharmaceutical 
    and healthcare sector. Specialized in launching new products, market analysis, portfolio 
    development, and building strong relationships with manufacturers and partners. Actively involved 
    in developing medical and scientific strategies, overseeing team training, and contributing to 
    business expansion plans. Known for a results-driven approach, strategic mindset, and strong 
    communication skills within the pharmaceutical industry.`,
  },
];

const LeadershipSection = () => {
  return (
    <section
      className="py-12 md:py-20 bg-gradient-to-b from-[#E9F3F8] via-[#F5FAFC] to-white"
      id="leadership"
    >
      <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#023E58] tracking-tight">
          Leadership Team
        </h2>

        <div className="w-32 h-1 bg-gradient-to-r from-[#1A7250] to-[#23A6A6] mx-auto mt-5 rounded-full"></div>

        <p className="mt-6 text-[#55616E] text-[15px] md:text-lg max-w-2xl mx-auto leading-relaxed">
          Our leaders drive Al-Faraheedi Scientific Bureau with integrity,
          strategic vision, and a deep commitment to scientific excellence.
        </p>
      </div>

      <div className="space-y-12 md:space-y-24 max-w-6xl mx-auto px-5 md:px-0">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative bg-white/60 backdrop-blur-xl rounded-3xl border border-white/40 shadow-[0px_15px_40px_rgba(0,0,0,0.08)] overflow-hidden  transition-all duration-500"
          >
            {/* Decorative Gradient Circle */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-[#23A6A6]/30 to-[#1A7250]/10 rounded-full blur-2xl"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center px-8 py-8 md:px-14 md:py-16 relative z-10">
              {/* IMAGE SIDE */}
              <div className="relative mx-auto md:mx-0 w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-[6px] border-white/70">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TEXT SIDE */}
              <div className="md:col-span-2 mt-2 md:mt-0">
                <h3 className="text-3xl md:text-4xl font-bold text-[#023E58] tracking-tight ">
                  {leader.name}
                </h3>

                <p className="text-[#1A7250] text-[16px] md:text-xl font-medium mt-1 ">
                  {leader.title}
                </p>

                {/* Signature Line */}
                <div className="w-24 h-[3px] bg-gradient-to-r from-[#1A7250] to-[#23A6A6] mt-4 rounded-full"></div>

                <p className="mt-7 text-[#4C5A67] leading-relaxed text-[15px] md:text-[17px]">
                  {leader.bio}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;
