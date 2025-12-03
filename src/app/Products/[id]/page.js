"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import { productsData } from "@/data/productsData";

const ProductPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState(null);

  const product = productsData.find((p) => p.id === Number(id));

  const toggleSection = (key) =>
    setOpenSection(openSection === key ? null : key);

  if (!product) {
    return (
      <section className="bg-gradient-to-b from-[#f7fbfd] via-[#e6f3fa] to-[#dff3fc] min-h-screen py-16 px-4 mt-12 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
          <p className="text-2xl font-semibold text-[#013E5D] mb-4">
            Product not found
          </p>
          <button
            onClick={() => router.push("/Products")}
            className="mt-2 px-5 py-2 rounded-xl bg-[#013E5D] text-white font-semibold"
          >
            Back to Products
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-[#f7fbfd] via-[#e6f3fa] to-[#dff3fc] min-h-screen py-16 px-4 mt-12">
      {/* Back Button */}
      <div className="w-[100%] md:w-[90%] mx-auto mt-6">
        <button
          onClick={() => router.back()}
          className="relative flex items-center gap-1 text-[#013E5D] font-semibold mb-5 group"
        >
          <FaArrowLeft
            size={20}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#013E5D] transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>

      {/* Main Card */}
      <div className="w-[100%] md:w-[90%] mx-auto p-3 lg:p-12 bg-white rounded-3xl shadow-xl">
        {/* ========== TOP GRID (IMAGE + INFO) ========== */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Product Image */}
          <motion.div
            className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-inner p-6 flex justify-center items-center group overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={450}
              height={450}
              priority
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#013E5D] leading-snug tracking-wide mb-5">
                {product.name}
              </h1>

              {/* Basic Info */}
              <div className="space-y-4">
                {/* <p className="flex gap-2">
                  <span className="text-gray-500 font-semibold">Type:</span>
                  <span className="text-[#013E5D]">{product.type}</span>
                </p>

                <p className="flex gap-2">
                  <span className="text-gray-500 font-semibold">
                    Department:
                  </span>
                  <span className="text-[#013E5D]">{product.department}</span>
                </p> */}

                <p className="flex gap-2">
                  <span className="text-gray-500 font-semibold">Brand:</span>
                  <span className="text-[#013E5D]">{product.brand}</span>
                </p>

                {/* <p className="flex gap-2 items-center">
                  <span className="text-gray-500 font-semibold">Rating:</span>
                  <span className="flex text-yellow-400 text-lg">
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar key={i} />
                    ))}
                  </span>
                </p> */}
              </div>

              {/* Short Desc */}
              <p className="mt-6 w-full lg:w-[90%] text-gray-600 leading-relaxed text-[17px] border-l-4 border-[#013E5D] pl-4">
                {product.shortDesc}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mt-8 mb-7 px-2 py-2 w-[267px]  lg:w-[265px] bg-gray-50 rounded-xl border border-gray-200">
                <label className="text-lg text-gray-600 font-medium">
                  Quantity:
                </label>

                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((prev) => Math.max(1, Number(prev || 1) - 1))
                    }
                    className="px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                  >
                    -
                  </button>

                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(
                        e.target.value === "" ? "" : Number(e.target.value)
                      )
                    }
                    className="w-[70px] text-center border-x border-gray-300 py-2 outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => Number(prev || 1) + 1)}
                    className="px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={() => {
                  const message = `Hello, I am interested in placing an order.

📌 *Product Details:*
- Name: ${product.name}
- Type: ${product.type}
- Brand: ${product.brand}
- Quantity: ${quantity}

Kindly confirm availability.`;

                  window.open(
                    `https://wa.me/+905352522282?text=${encodeURIComponent(
                      message
                    )}`,
                    "_blank"
                  );
                }}
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-8 lg:px-4 py-4 rounded-xl font-semibold text-[15px] md:text-lg shadow-md transition-all duration-300"
              >
                <FaWhatsapp size={24} /> Order Now on WhatsApp
              </button>
            </div>
          </motion.div>
        </div>

        {/* ========== NEW CLEAN ACCORDION ========== */}

        <div className="mt-16 space-y-5">
          {[
            { key: "about", title: `About ${ product.name}` },
            { key: "composition", title: "Composition" },
            { key: "mechanism", title: "Mechanism of Action" },
            { key: "indications", title: "Indications" },
            { key: "dosage", title: "Dosage" },
            { key: "precautions", title: "Precautions" },
            { key: "sideEffects", title: "Side Effects" },
            { key: "storage", title: "Storage" },
            { key: "packaging", title: "Packaging" },
          ]
            .filter((sec) => product.fullDesc[sec.key])
            .map((section) => (
              <div
                key={section.key}
                className="border rounded-xl shadow-sm bg-white overflow-hidden transition-all border-[#d3e4ee]"
              >
                {/* Header */}
                <button
                  onClick={() => toggleSection(section.key)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#f3f9fc] transition"
                >
                  <span className="text-[#013E5D] font-semibold text-[18px]">
                    {section.title}
                  </span>

                  <svg
                    className={`w-5 h-5 text-[#013E5D] transition-transform ${
                      openSection === section.key ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Content */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openSection === section.key
                      ? "max-h-[800px] p-6 bg-[#f8fcff]"
                      : "max-h-0 p-0"
                  }`}
                >
                  {/* Array sections */}
                  {Array.isArray(product.fullDesc[section.key]) ? (
                    <div className="space-y-4">
                      {product.fullDesc[section.key].map((item, i) => (
                        <div
                          key={i}
                          className="flex gap-4 items-start bg-white p-4 rounded-lg border border-[#e2eef4]"
                        >
                          <div className="text-[#013E5D]">{item.icon}</div>
                          <div>
                            {item.title && (
                              <h4 className="font-semibold text-[#013E5D] mb-1">
                                {item.title}
                              </h4>
                            )}
                            <p className="text-gray-700 leading-relaxed text-[15px]">
                              {item.text ||
                                item.ingredient ||
                                item.amount ||
                                ""}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* String sections */
                    <p className="text-gray-700 leading-relaxed bg-white p-4 rounded-lg border border-[#e2eef4]">
                      {product.fullDesc[section.key]}
                    </p>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
