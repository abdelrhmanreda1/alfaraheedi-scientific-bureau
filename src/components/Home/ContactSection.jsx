import { FiMail, FiMapPin, FiPhone, FiClock } from "react-icons/fi";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-20 md:px-4 px-0 bg-gradient-to-br from-[#f7fbfd] via-white to-[#e6f3fa] text-gray-800"
    >
      <div className="w-[90%] mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#035182] mb-3">
            Contact Us
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#1A7250] to-[#23A6A6] mx-auto mt-5 rounded-full"></div>
          <p className="mt-2 text-[#475569] text-[15px] md:text-lg max-w-2xl mx-auto">
            Get in touch with us for inquiries or partnership opportunities.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT – Contact Info */}
          <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl md:p-10  p-7 shadow-md space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <FiMapPin className="text-[#013E5D] md:w-7 w-8  h-7" />
              <div>
                <h3 className="font-semibold text-[#1e293b]">Address</h3>
                <p className="text-[#475569] leading-relaxed">
                  Al-Baradhiya, Basra Governorate, Iraq
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <FiPhone className="text-[#013E5D] w-7 h-7" />
              <div>
                <h3 className="font-semibold text-[#1e293b]">Phone</h3>

                <a
                  href="tel:+9647738651046"
                  className="text-[#475569] hover:text-[#0ea5e9]"
                >
                  +964 773 865 1046
                </a>

                <a
                  href="tel:+9647727924861"
                  className="text-[#475569] hover:text-[#0ea5e9] block"
                >
                  +964 772 792 4861
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <FiMail className="text-[#013E5D] md:w-7 w-8 h-7" />
              <div>
                <h3 className="font-semibold text-[#1e293b]">Email</h3>
                <a
                  href="mailto:info@alfaraheedi-scientific-bureau.com"
                  className="text-[#475569] break-all hover:text-[#0ea5e9]"
                >
                  info@alfaraheedi-scientific-bureau.com
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4">
              <FiClock className="text-[#013E5D] w-7 h-7" />
              <div>
                <h3 className="font-semibold text-[#1e293b]">Business Hours</h3>
                <p className="text-[#475569]">Monday - Friday: 10AM - 4PM</p>
                <p className="text-[#475569]">Saturday & Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* RIGHT – WhatsApp CTA */}
          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-br from-[#013E5D] to-[#035182] text-white p-10 rounded-3xl shadow-lg w-full">
              <h3 className="text-3xl font-bold mb-3">Ready to Talk?</h3>
              <p className="mb-6 text-lg opacity-90">
                Contact us now on WhatsApp!
              </p>

              <a
                href="https://wa.me/+9647738651046"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-2xl shadow-md transition inline-flex items-center gap-3 justify-center w-full"
              >
                <Image
                  src="/WhatsApp.svg"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
