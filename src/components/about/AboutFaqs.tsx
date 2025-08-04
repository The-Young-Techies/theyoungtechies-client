// src/components/sections/FAQ.tsx

"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { aboutFAQs } from "@/utils/data";
import { type FAQItem } from "@/utils/interface";

export default function AboutFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="w-full mb-20 px-6 sm:px-10 md:px-14 lg:px-16">
      <div className="max-w-full mx-auto">
           <p className="text-xs sm:text-sm tracking-widest uppercase text-blue-500 font-bold mb-2 text-center">
                          faqs
                        </p>
        <h2 className="text-h6 md:text-h5 xl:text-h3 leading-tight font-bold text-center mb-4 capitalize">
          frequently <span className="text-blue-500">asked</span> questions
        </h2>

        <p className="text-center text-body-small xl:text-h6 xl:text-para md:text-body text-gray-600 mb-12 max-w-3xl mx-auto">
          Here are answers to some of the most common questions we get.
        </p>

        <div className="space-y-6">
          {aboutFAQs.map((faq: FAQItem, index: number) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-shadow duration-300 ${
                  isOpen
                    ? "border-blue-500 bg-blue-100 shadow-lg"
                    : "border-gray-700 bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-6 md:p-8 cursor-pointer"
                >
                  <span className="text-body xl:text-para font-semibold text-black">
                    {faq.question}
                  </span>
                  <FontAwesomeIcon
                    icon={isOpen ? faChevronUp : faChevronDown}
                    className={`text-lg text-blue-500 transition-transform`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  <motion.div
                    key={isOpen ? `open-${index}` : `closed-${index}`}
                    initial="collapsed"
                    animate={isOpen ? "open" : "collapsed"}
                    exit="collapsed"
                    variants={{
                      open: { height: "auto", opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden px-6 md:px-8"
                  >
                    <motion.div
                      variants={{
                        open: { opacity: 1, transition: { delay: 0.1 } },
                        collapsed: { opacity: 0 },
                      }}
                      className="pb-6"
                    >
                      <p className="text-gray-700 text-body-small md:text-body leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
