// src/components/sections/FAQ.tsx
"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What services does your agency offer?",
    answer:
      "We specialize in UI/UX design, custom web development, e-commerce solutions, and SEO performance optimization.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary based on scope, but most standard projects are completed within 3 to 6 weeks.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide ongoing support, maintenance, and performance tuning after launch.",
  },
  {
    question: "Can you work with clients outside of India?",
    answer:
      "Absolutely. We collaborate remotely with clients across different time zones using tools like Zoom, Slack, and Notion.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="w-full bg-blue-50 px-6 md:px-20 lg:px-32 py-24">
      <div className="max-w-full mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 capitalize">
          frequently <span className="text-blue-500">asked</span> questions
        </h2>

        <p className="text-center text-gray-800 text-body-small md:text-body mb-12 max-w-3xl mx-auto">
          Here are answers to some of the most common questions we get.
        </p>

        <div className="space-y-6">
          {faqs.map((faq: FAQItem, index: number) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-shadow duration-300 ${
                  isOpen ? "border-blue-500 bg-blue-100 shadow-lg" : "border-gray-700 bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-6 md:p-8 cursor-pointer"
                >
                  <span className="text-h5 md:text-h5 xl:text-h4 font-semibold text-black">
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
