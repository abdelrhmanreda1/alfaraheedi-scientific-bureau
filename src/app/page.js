import AboutUs from "@/components/Home/AboutUs";
import ContactSection from "@/components/Home/ContactSection";
import Hero from "@/components/Home/Hero";
import LeadershipSection from "@/components/Home/LeadershipSection";

import React from "react";

function page() {
  return (
    <>
      <Hero />
      <AboutUs />
      <LeadershipSection />
      <ContactSection />
    </>
  );
}

export default page;
