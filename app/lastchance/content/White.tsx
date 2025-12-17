"use client";

import React, { useEffect } from "react";
import Script from "next/script";

interface HotmartCheckoutElements {
  init: (type: string) => {
    mount: (selector: string) => void;
  };
}

declare global {
  interface Window {
    checkoutElements?: HotmartCheckoutElements;
  }
}

export default function White() {
  useEffect(() => {
    // Função para inicializar o widget do Hotmart
    const initHotmartWidget = () => {
      if (typeof window !== 'undefined' && window.checkoutElements) {
        try {
          window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
        } catch (error) {
          console.error('Error initializing Hotmart widget:', error);
        }
      }
    };

    // Tenta inicializar imediatamente se já estiver disponível
    if (typeof window !== 'undefined' && window.checkoutElements) {
      initHotmartWidget();
    }
  }, []);

  return (
    <>
      {/* Banner vermelho no topo */}
      <div className="w-full bg-red-600 text-white">
        <div className="mx-auto px-4 py-4">
          <div className="text-center font-semibold">
            You won a big discount!
          </div>
        </div>
      </div>

      {/* Conteúdo principal com fundo cinza claro */}
      <div className="min-h-screen bg-gray-50">
        <div className="flex flex-col w-full max-w-4xl gap-6 px-5 py-8 mx-auto">
          {/* Card branco com borda azul tracejada */}
          <div className="flex flex-col text-center rounded-3xl gap-6 bg-white appear border-2 border-dashed border-blue-500 shadow-lg px-5 py-8">
            {/* Título */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Last Chance Offer
              </h1>
              <p className="text-lg text-gray-600 font-light">
                Don&apos;t miss this unique opportunity.
              </p>
            </div>

            {/* Box de preço */}
            <div className="flex flex-col items-center gap-3 py-4">
              <span className="text-gray-500 text-sm">
                Regular price: <span className="line-through">$17.00</span>
              </span>
              <span className="text-5xl md:text-6xl font-bold text-green-500 leading-none">
                $8.50
              </span>
              <span className="text-gray-500 text-sm mt-2">
                One-time payment. Instant access.
              </span>
            </div>

            {/* Lista de benefícios */}
            <div className="flex flex-col gap-4 text-left">
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl mt-0.5">✓</span>
                <span className="text-gray-900 text-base">
                  Learn the basics of video editing step by step
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl mt-0.5">✓</span>
                <span className="text-gray-900 text-base">
                  Understand CapCut tools without technical jargon
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl mt-0.5">✓</span>
                <span className="text-gray-900 text-base">
                  Organize clips and create clean, engaging videos
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl mt-0.5">✓</span>
                <span className="text-gray-900 text-base">
                  Perfect for beginners with zero experience
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4 pt-2">
              <p className="text-gray-700 text-base text-center">
                Click below to add Play Pro to your order and start editing today:
              </p>
              
              {/* HOTMART - Sales Funnel Widget */}
              <div id="hotmart-sales-funnel" className="w-full min-h-[200px]"></div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">
              Beginner-friendly course. No previous editing experience required.
            </p>
          </div>
        </div>
      </div>

      {/* Script do Hotmart */}
      <Script
        src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.checkoutElements) {
            try {
              window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
            } catch (error) {
              console.error('Error mounting Hotmart widget:', error);
            }
          }
        }}
        onError={(e) => {
          console.error('Error loading Hotmart script:', e);
        }}
      />

      {/* Footer Disclaimer */}
      <footer className="w-full text-center text-xs text-gray-500 px-6 py-6 bg-gray-50">
        Disclaimer: The earnings or income examples shared on this website are for informational purposes only and do not guarantee results. Your success depends on many factors outside our control, and individual results will vary.
      </footer>
    </>
  );
}

