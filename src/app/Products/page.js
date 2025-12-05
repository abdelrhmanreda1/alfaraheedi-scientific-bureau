"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { emptyBrands, productsData } from "@/data/productsData";

const ITEMS_PER_PAGE = 8;

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("Newest");
  const [filterOption, setFilterOption] = useState("All Companies");
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  // Italian brands (Distributor only)
  const italianBrands = ["CT Italy", "Pharmilano"];

  // identify selected empty brand
  const emptyBrandSelected = emptyBrands.find((b) => b.brand === filterOption);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...productsData];

    if (filterOption !== "All Companies") {
      filtered = filtered.filter((product) => product.brand === filterOption);
    }

    const normalizeText = (text) =>
      (text || "")
        .toLowerCase()
        .replace(/[-_/.,]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    if (searchTerm.trim() !== "") {
      const terms = normalizeText(searchTerm)
        .split(" ")
        .filter((t) => t.length > 0);

      filtered = filtered.filter((product) => {
        const haystack = [
          product.name,
          product.shortDesc,
          product.category,
          ...(product.fullDesc?.about?.map((item) => item.text) || []),
        ]
          .map(normalizeText)
          .join(" ");

        return terms.every((term) => haystack.includes(term));
      });
    }

    switch (sortOption) {
      case "Newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      case "Oldest":
        filtered.sort((a, b) => a.id - b.id);
        break;
      case "A-Z":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return filtered;
  }, [filterOption, sortOption, searchTerm]);

  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / ITEMS_PER_PAGE
  );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredAndSortedProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#f7fbfd] via-[#e6f3fa] to-[#dff3fc]">
      <div className="w-[90%] mx-auto py-12">
        {/* -------- Header -------- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 mt-[120px]">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#013E5D] uppercase">
              {filterOption === "All Companies"
                ? "All Companies"
                : `${filterOption} Products`}
            </h2>

            {/* ✨✨ NEW: Show distributor + origin ONLY for Italian brands ✨✨ */}
            {italianBrands.includes(filterOption) && (
              <div className="mt-3 p-3 bg-white/70 backdrop-blur-md rounded-lg border border-gray-200 max-w-xs shadow-sm">
               
           

                {/* Origin */}
                <p className="text-sm text-[#013E5D] font-semibold">
                  Origin:{" "}
                  <span className="font-normal text-gray-700">Italy</span>
                </p>

                {/* Distributor */}
                <p className="text-sm text-[#013E5D] font-semibold mt-1">
                  Distributor
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-[82%] sm:w-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#013E5D] w-full sm:w-64"
              value={searchTerm}
              onChange={handleSearchChange}
            />

            <div className="flex gap-6">
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#013E5D]"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="A-Z">A - Z</option>
                <option value="Z-A">Z - A</option>
              </select>

              <select
                className="capitalize border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#013E5D]"
                value={filterOption}
                onChange={handleFilterChange}
              >
                <option value="All Companies">All Companies</option>

                {[
                  ...new Set(productsData.map((p) => p.brand)),
                  ...emptyBrands.map((b) => b.brand),
                ].map((brand) => (
                  <option key={brand} value={brand} className="capitalize">
                    {brand}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* -------- Products or Coming Soon -------- */}
        {currentItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentItems.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="relative group bg-white/70 backdrop-blur-md border border-white/20 rounded-3xl cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden"
                >
                  <span className="absolute top-4 left-4 bg-[#013E5D]/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                    {product.category}
                  </span>

                  <div className="relative h-64 w-full flex justify-center items-center overflow-hidden mt-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="object-contain max-h-64 transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>

                  <div className="px-5 pb-5 text-center mt-[-15px]">
                    <h3 className="text-lg font-bold text-[#013E5D] mb-2">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-2 mb-5">
                      {product.shortDesc}
                    </p>

                    <button
                      onClick={() => router.push(`/Products/${product.id}`)}
                      className="relative w-full py-3 rounded-xl bg-[#013E5D] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      View Details
                      <FiArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-full ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400"
                      : "bg-white text-[#013E5D] border border-gray-300 hover:bg-[#013E5D] hover:text-white"
                  }`}
                >
                  <FaChevronLeft size={14} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      currentPage === i + 1
                        ? "bg-[#013E5D] text-white shadow"
                        : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-full ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400"
                      : "bg-white text-[#013E5D] border border-gray-300 hover:bg-[#013E5D] hover:text-white"
                  }`}
                >
                  <FaChevronRight size={14} />
                </button>
              </div>
            )}
          </>
        ) : emptyBrandSelected ? (
          <div className="flex flex-col items-center justify-center py-6 md:py-12 px-0 md:px-6 text-center">
            <div className="bg-white border border-[#d4e4ee] shadow rounded-3xl p-10 w-full max-w-lg">
              <div className="mx-auto w-24 h-24 flex items-center justify-center rounded-full bg-[#013E5D] text-white text-4xl font-bold tracking-tight shadow-md">
                {emptyBrandSelected.brand[0]}
              </div>

              <h2 className="mt-6 text-3xl font-bold text-[#013E5D] uppercase tracking-wide">
                {emptyBrandSelected.brand}
              </h2>

              <div className="w-20 h-1 bg-[#013E5D] mx-auto rounded-full mt-4 mb-4"></div>

              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {emptyBrandSelected.message}
              </p>

              <div className="coming-box mx-auto mt-10">
                <span className="coming-text">COMING SOON</span>
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-6 max-w-md leading-relaxed">
              This brand is currently under development. Our medical team is
              preparing high-quality pharmaceutical solutions to join the
              catalog soon.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <Image
              src="/no-product-removebg.png"
              alt="No products"
              width={200}
              height={200}
              className="opacity-80"
            />
            <p className="text-gray-600 text-xl mt-4">
              Try adjusting your search or filter to find what you need.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
