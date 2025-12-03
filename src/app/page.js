import AboutUs from "@/components/Home/AboutUs";
import ContactSection from "@/components/Home/ContactSection";

import Slider from "@/components/Home/Slider";
import React from "react";

function page() {
  return (
    <>
      <Slider />
      <AboutUs />

      <ContactSection />
    </>
  );
}

export default page;
