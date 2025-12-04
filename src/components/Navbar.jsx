"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [showNavbar, setShowNavbar] = useState(true);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Products", href: "/Products" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.innerWidth >= 768) return;

      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (pathname !== "/") {
        if (pathname.toLowerCase().startsWith("/products")) {
          setActive("Products");
        } else {
          setActive("");
        }
      } else {
        if (hash === "#about") {
          setActive("About Us");
        } else if (hash === "#contact") {
          setActive("Contact");
        } else {
          setActive("Home");
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300  ",
          "backdrop-blur-xl bg-[#14658B] shadow-lg ",
          "border-b border-white/10",
          !showNavbar && "translate-y-[-100%]"
        )}
      >
        <div className="w-[90%] mx-auto flex justify-between items-center px-1 md:px-4 py-2 md:py-3">
          <Link href="/">
            <Image
              src="/logowhite.png"
              alt="Company Logo"
              width={150}
              height={60}
              className="object-contain h-[40px] md:h-[55px] w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 font-medium text-[15px] items-center">
            {navLinks.map((link) => (
              <li key={link.name} className="group">
                <Link
                  href={link.href}
                  onClick={() => setActive(link.name)}
                  className={clsx(
                    "uppercase tracking-wide transition-all duration-300 pb-1 relative",
                    active === link.name
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {link.name}

                  {/* Underline */}
                  <span
                    className={clsx(
                      "absolute left-0 bottom-[-5px] h-[2px] w-full scale-x-0 origin-left transition-transform duration-300 rounded-full",
                      active === link.name
                        ? "scale-x-100 bg-white"
                        : "group-hover:scale-x-100 bg-white/50"
                    )}
                  ></span>
                </Link>
              </li>
            ))}

            {/* Contact Us Button */}
            <li>
              <Link
                href="/#contact"
                onClick={() => setActive("Contact")}
                className={clsx(
                  "ml-3 px-6 py-2 rounded-full font-semibold uppercase tracking-wide",
                  "text-[#0A3C52] bg-white border border-white/70",
                  "transition-all duration-200",
                  "hover:bg-[#F3F9FC] hover:border-white hover:scale-[1.03]",
                  active === "Contact" && "bg-white text-[#0A3C52]"
                )}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-3xl cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex  flex-col gap-4 text-white font-medium text-base px-6 pt-4 pb-5 bg-[#056087] backdrop-blur-md animate-slideDown">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => {
                    setActive(link.name);
                    setIsOpen(false);
                  }}
                  className={clsx(
                    "block py-2 px-3 rounded transition text-center",
                    active === link.name
                      ? "bg-white text-[#0A3C52] font-semibold"
                      : "hover:bg-white/10"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Contact Us Mobile */}
            <li>
              <Link
                href="/#contact"
                onClick={() => {
                  setActive("Contact");
                  setIsOpen(false);
                }}
                className={clsx(
                  "block py-2 px-3 rounded-full text-center transition font-semibold  uppercase",
                  "bg-[#7BCF34] text-[#0A3C52] shadow-md hover:scale-[1.03]"
                )}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        )}
      </nav>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/+964 773 865 1046"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ boxShadow: "0 0 0px rgba(37, 211, 102, 0.7)" }}
        animate={{
          boxShadow: [
            "0 0 10px rgba(37, 211, 102, 0.7)",
            "0 0 20px rgba(37, 211, 102, 1)",
            "0 0 10px rgba(37, 211, 102, 0.7)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="fixed bottom-6 z-50 right-6 w-14 h-14 rounded-full bg-green-700 flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,1)] transition-transform"
      >
        <Image
          src="/WhatsApp.svg"
          alt="WhatsApp"
          width={60}
          height={60}
          className="w-14 h-14"
        />
      </motion.a>
    </>
  );
};

export default Navbar;
