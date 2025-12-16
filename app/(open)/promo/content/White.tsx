"use client";

import { motion } from "framer-motion";
import ConfettiEffect from "@/components/Confetti";

export default function White() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      {/* Top banner - red bar with white text */}
      <div className="w-full bg-red-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-2 text-center text-sm md:text-base font-semibold">
          You got a super discount!
        </div>
      </div>
      {/* HERO - Branco (mesma promessa, sem VSL) */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
              Best Faceless YouTube Course
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-3xl mx-auto font-light">
              Learn exactly how to start and grow a faceless YouTube channel that can earn six-figures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MINI RESUMO - 3 vantagens */}
      <section className="w-full bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
          <img src="coursesales-image1.png" alt="Course Sales Image" className="mx-auto rounded-3xl" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">What’s In The Course?</h3>
              <p className="text-slate-700">Step-by-step lessons to start and grow a faceless YouTube or personal channel.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Why You Need It?</h3>
              <p className="text-slate-700">Turn YouTube into a real business with proven systems to reach six-figures.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">Why This Over Others?</h3>
              <p className="text-slate-700">Quality at the best price. Similar courses cost $500+. Ours is under $100.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL COM DESCONTO */}
      <section className="w-full bg-slate-50 text-center">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-8">
          <img src="course-image-computer.png" alt="Course Image" className="mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Ready To Make Money On YouTube?
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Special page-only discount. Limited time.
          </p>
          <button
            className="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-4 text-white font-medium shadow-sm hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 transition"
            onClick={() => window.open("https://explodely.com/p/424980977", "_blank")}
          >
            CLAIM YOUR DISCOUNT
          </button>
          <ConfettiEffect />
        </div>
      </section>
      <footer className="w-full text-center text-xs text-gray-500 px-6 py-6">
        Disclaimer: The earnings or income examples shared on this website are for informational purposes only and do not guarantee results. Your success depends on many factors outside our control, and individual results will vary.
      </footer>
    </div>
  );
}