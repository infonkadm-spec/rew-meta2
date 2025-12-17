/* eslint-disable @typescript-eslint/ban-ts-comment */

"use client";

import Script from "next/script";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

// PRICE LIST
const priceList: Record<string, string> = {
  "wbz5t6cu": "24,00",
  "m1jzg7zb": "29,90",
};

// COMPONENT TYPES
type HotmartCheckoutV1Props = {
  name?: string;
  title?: string;
  offer?: string;
  locale?: string;
  country?: string;
  email?: string;
};

export default function HotmartCheckoutV1({
  name,
  offer,
  locale,
  country,
  email,
}: HotmartCheckoutV1Props) {
  const userEmail = email || "";

  // COMPONENT STATES
  const [loading, setLoading] = useState(true);

  // LOADING EFFECT
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1750);
  }, []);

  // INIT CHECKOUT
  const initCheckout = () => {
    // @ts-expect-error
    if (typeof checkoutElements !== 'undefined') {
    // @ts-expect-error
      checkoutElements.init('inlineCheckout', {
        offer: offer || 'wbz5t6cu',
        countryIsoCode: country || 'US',
        locale: locale || 'en',
        prefilledInfo: {
          name: name || '',
          email: userEmail,
          doc: '',
          zip: '',
          phoneac: '',
          phonenumber: '',
          sck: ''
        },
        visibilityOptions: {
          hideCouponOption: '1',
        }
      }).mount('#inline_checkout');
      
      // Ultra-aggressive product element removal and custom overlay
      const overlayCustomContent = () => {
        // Force remove with maximum priority
        const elementsToRemove = [
          '._d-flex._flex-row-reverse',
          '.product-data-container',
          '[data-v-da45a853]',
          '[data-v-2e7eae4c]',
          '[data-v-cf996f3f]',
          '._bg-white._rounded._mb-4',
          '.product-image-container',
          '.product-infos',
          '.product-image',
          'img[src*="hotmart.com"]',
          'img[src*="static-media.hotmart.com"]',
          'h1._font-weight-bold._text-gray-800',
          'div._font-weight._text-gray-600',
          'div._font-weight-bold._text-blue-dark',
          '[data-testid="product-price"]'
        ];

        elementsToRemove.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          elements.forEach(element => {
            if (element instanceof HTMLElement) {
              const hasProductInfo = element.textContent?.includes('Faceless Channels') || 
                                   element.textContent?.includes('Games and Fun') ||
                                   element.textContent?.includes('$24.00') ||
                                   element.querySelector('.product-image') ||
                                   element.querySelector('img[src*="hotmart.com"]');
              
              if (hasProductInfo) {
                // Override ALL inline styles with maximum force
                const styles = [
                  'display: none',
                  'visibility: hidden',
                  'opacity: 0',
                  'height: 0',
                  'width: 0',
                  'position: absolute',
                  'left: -9999px',
                  'top: -9999px',
                  'transform: scale(0)',
                  'clip: rect(0,0,0,0)',
                  'overflow: visible',
                  'user-select: none',
                  'pointer-events: none',
                  'z-index: -9999'
                ];
                
                styles.forEach(style => {
                  const [property, value] = style.split(': ');
                  element.style.setProperty(property, value, 'important');
                });
                
                // Force remove from DOM
                element.remove();
              }
            }
          });
        });

        // Create custom overlay with maximum priority
        const checkoutContainer = document.querySelector('#inline_checkout');
        if (checkoutContainer && !checkoutContainer.querySelector('.custom-product-overlay')) {
          const customOverlay = document.createElement('div');
          customOverlay.className = 'custom-product-overlay';
          customOverlay.style.cssText = `
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            position: relative !important;
            z-index: 99999 !important;
            overflow: visible !important;
            user-select: text !important;
            pointer-events: auto !important;
            transform: translateZ(0) !important;
            will-change: transform !important;
          `;
          customOverlay.innerHTML = `
            <div class="flex items-start gap-5 mx-7 mt-7 mb-1">
              <div class="flex-none relative">
                <img alt="Logo" width="200" height="137" class="w-20 aspect-square rounded-full" src="/images/logo.png">
                <img alt="Logo" width="20" height="20" class="absolute bottom-0.5 right-0.5" src="/images/instagram-verify.png">
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-base font-semibold text-balance tracking-tighter">21 Day Personalized Plan</span>
                <span class="text-xs line-through tracking-wider leading-none text-gray-400">From US$ 129,90 for</span>
                <div class="flex items-center gap-1 -mt-0.5">
                  <span class="text-sm leading-none mt-1 text-green-600">Only</span>
                  <span class="text-2xl font-semibold tracking-tighter leading-none text-green-600">US$ 24,00</span>
                </div>
              </div>
            </div>
          `;
          checkoutContainer.insertBefore(customOverlay, checkoutContainer.firstChild);
        }

        // Create custom product overlay that sits directly on top of iframe
        const iframes = document.querySelectorAll('iframe[src*="hotmart.com"], iframe[src*="pay.hotmart.com"]');
        iframes.forEach(iframe => {
          if (iframe instanceof HTMLIFrameElement) {
            // Remove any existing overlays
            const existingOverlays = iframe.parentNode?.querySelectorAll('.iframe-product-overlay');
            existingOverlays?.forEach(overlay => overlay.remove());

            // Create custom product overlay that replaces the product section
            const iframeOverlay = document.createElement('div');
            iframeOverlay.className = 'iframe-product-overlay';
            iframeOverlay.style.cssText = `
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              width: 100% !important;
              height: auto !important;
              background: none !important;
              z-index: 99999 !important;
              pointer-events: none !important;
              border: none !important;
              margin: 0 !important;
              padding: 0 !important;
            `;
            iframeOverlay.innerHTML = `
              <div class="flex items-center gap-5 mx-7 py-6" style="position: relative; z-index: 100000; display: flex; visibility: visible; opacity: 1; pointer-events: auto; min-height: 120px;">
                <div class="flex-none relative">
                  <img alt="Logo" width="100" height="100" class="w-20 h-20" src="/logo.svg">
                  <img alt="Logo" width="30" height="30" class="absolute bottom-0.5 right-0.5" src="/instagram-verify.png">
                </div>
                <div class="flex flex-col gap-1">
                  <span class="text-base font-semibold text-balance tracking-tighter">YouTube Rewards</span>
                  <span class="text-xs line-through tracking-wider leading-none text-gray-400">From US$ 129,90 for</span>
                  <div class="flex items-center gap-1 -mt-0.5">
                    <span class="text-sm leading-none mt-1 text-green-600">Only</span>
                    <span class="text-2xl font-semibold tracking-tighter leading-none text-green-600">US$ 24,00</span>
                  </div>
                </div>
              </div>
            `;
            
            // Insert overlay over the iframe
            iframe.parentNode?.insertBefore(iframeOverlay, iframe);
          }
        });

        // Force the main product content to be on top with JavaScript
        const productElements = document.querySelectorAll('.flex.items-start.gap-5.mx-7.mt-7.mb-1, #inline_checkout > div:first-child');
        productElements.forEach(element => {
          if (element instanceof HTMLElement) {
            element.style.setProperty('position', 'relative', 'important');
            element.style.setProperty('z-index', '99999', 'important');
            element.style.setProperty('display', 'flex', 'important');
            element.style.setProperty('visibility', 'visible', 'important');
            element.style.setProperty('opacity', '1', 'important');
            element.style.setProperty('transform', 'translateZ(0)', 'important');
            element.style.setProperty('will-change', 'transform', 'important');
          }
        });
      };

      // Simplified nuclear option to avoid freezing
      const nuclearOption = () => {
        // Simple approach - just hide elements with product text
        const elements = document.querySelectorAll('*');
        let count = 0;
        for (const element of elements) {
          if (count > 100) break; // Limit to prevent freezing
          if (element instanceof HTMLElement) {
            const text = element.textContent?.toLowerCase() || '';
            if (text.includes('faceless channels') || 
                text.includes('games and fun') || 
                text.includes('$24.00')) {
              element.style.display = 'none';
              element.style.visibility = 'hidden';
              element.style.opacity = '0';
              count++;
            }
          }
        }
      };

      // Force override specific product text elements
      const overrideProductText = () => {
        // Target multiple selectors for "Faceless Channels"
        const selectors = [
          'p._font-weight-bold._flex-1._m-0',
          'section[aria-labelledby*="productSummaryHeader"] p._font-weight-bold._flex-1._m-0',
          'li._d-flex._text-1._text-gray p._font-weight-bold._flex-1._m-0',
          '[data-v-2e7eae4c] p._font-weight-bold._flex-1._m-0'
        ];
        
        selectors.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          elements.forEach(element => {
            if (element instanceof HTMLElement) {
              if (element.textContent?.includes('Faceless Channels')) {
                // Remove any existing overlay first
                const existingOverlay = element.querySelector('.text-overlay');
                if (existingOverlay) {
                  existingOverlay.remove();
                }
                
                // Create overlay to cover the text
                const overlay = document.createElement('div');
                overlay.className = 'text-overlay';
                overlay.style.cssText = `
                  position: absolute !important;
                  top: 0 !important;
                  left: 0 !important;
                  width: 100% !important;
                  height: 100% !important;
                  background: #ffffff !important;
                  z-index: 99999 !important;
                  display: flex !important;
                  align-items: center !important;
                  justify-content: flex-start !important;
                  padding: 0 8px !important;
                  font-weight: bold !important;
                  color: #1f2937 !important;
                  font-size: inherit !important;
                  line-height: inherit !important;
                `;
                overlay.textContent = 'YouTube Rewards';
                
                // Make parent element relative for positioning
                element.style.position = 'relative';
                element.style.zIndex = '1';
                
                // Insert overlay
                element.appendChild(overlay);
              }
            }
          });
        });
        
        // Also try to find any element containing "Faceless Channels" text
        const allElements = document.querySelectorAll('*');
        allElements.forEach(element => {
          if (element instanceof HTMLElement) {
            if (element.textContent === 'Faceless Channels' && element.tagName === 'P') {
              // Remove any existing overlay first
              const existingOverlay = element.querySelector('.text-overlay');
              if (existingOverlay) {
                existingOverlay.remove();
              }
              
              // Create overlay to cover the text
              const overlay = document.createElement('div');
              overlay.className = 'text-overlay';
              overlay.style.cssText = `
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                background: #ffffff !important;
                z-index: 99999 !important;
                display: flex !important;
                align-items: center !important;
                justify-content: flex-start !important;
                padding: 0 8px !important;
                font-weight: bold !important;
                color: #1f2937 !important;
                font-size: inherit !important;
                line-height: inherit !important;
              `;
              overlay.textContent = 'YouTube Rewards';
              
              // Make parent element relative for positioning
              element.style.position = 'relative';
              element.style.zIndex = '1';
              
              // Insert overlay
              element.appendChild(overlay);
            }
          }
        });
      };

      // Execute with maximum frequency
      overlayCustomContent();
      nuclearOption();
      overrideProductText();
      
      // Intercept iframe before it loads and create overlay
      const interceptIframe = () => {
        const iframes = document.querySelectorAll('iframe[src*="hotmart.com"], iframe[src*="pay.hotmart.com"]');
        iframes.forEach(iframe => {
          if (iframe instanceof HTMLIFrameElement) {
            // Create custom product overlay to replace the product section
            const overlay = document.createElement('div');
            overlay.style.cssText = `
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              width: 100% !important;
              height: 150px !important;
              background: #ffffff !important;
              z-index: 99999 !important;
              pointer-events: none !important;
            `;
            // Create the product element directly in the overlay
            overlay.innerHTML = `
              <div class="flex items-center gap-5 mx-7 py-6" style="position: relative; z-index: 100000; display: flex; visibility: visible; opacity: 1; pointer-events: auto; min-height: 120px;">
                <div class="flex-none relative">
                  <img alt="Logo" width="100" height="100" class="w-20 h-20" src="/logo.svg">
                  <img alt="Logo" width="30" height="30" class="absolute bottom-0.5 right-0.5" src="/instagram-verify.png">
                </div>
                <div class="flex flex-col gap-1">
                  <span class="text-base font-semibold text-balance tracking-tighter">YouTube Rewards</span>
                  <span class="text-xs line-through tracking-wider leading-none text-gray-400">From US$ 129,90 for</span>
                  <div class="flex items-center gap-1 -mt-0.5">
                    <span class="text-sm leading-none mt-1 text-green-600">Only</span>
                    <span class="text-2xl font-semibold tracking-tighter leading-none text-green-600">US$ 24,00</span>
                  </div>
                </div>
              </div>
            `;
            
            // Insert overlay before the iframe
            iframe.parentNode?.insertBefore(overlay, iframe);
            
            // Also try to modify the iframe src to hide product info
            const originalSrc = iframe.src;
            if (originalSrc.includes('hotmart.com')) {
              try {
                const url = new URL(originalSrc);
                url.searchParams.set('hideProductInfo', '1');
                url.searchParams.set('hideProductImage', '1');
                url.searchParams.set('hideProductName', '1');
                url.searchParams.set('hideProductPrice', '1');
                iframe.src = url.toString();
              } catch {
                // If URL modification fails, continue with overlay
              }
            }
          }
        });
      };

      // Run with reasonable intervals to avoid freezing
      setTimeout(overlayCustomContent, 100);
      setTimeout(overlayCustomContent, 500);
      setTimeout(overlayCustomContent, 1000);
      setTimeout(overlayCustomContent, 2000);
      setTimeout(overlayCustomContent, 3000);

      // Run nuclear option less frequently
      setTimeout(nuclearOption, 500);
      setTimeout(nuclearOption, 1500);
      setTimeout(nuclearOption, 3000);

      // Run text override
      setTimeout(overrideProductText, 500);
      setTimeout(overrideProductText, 1000);
      setTimeout(overrideProductText, 2000);
      setTimeout(overrideProductText, 3000);

      // Run iframe interception with delay
      setTimeout(interceptIframe, 1000);
      setTimeout(interceptIframe, 2000);

      // Simplified MutationObserver to avoid freezing
      let isProcessing = false;
      const observer = new MutationObserver(() => {
        if (!isProcessing) {
          isProcessing = true;
          setTimeout(() => {
            overlayCustomContent();
            isProcessing = false;
          }, 100);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: false
      });
    } else {
      console.error("checkoutElements is not available.");
    };
  };

  return (
    <div className="flex flex-col flex-auto rounded-3xl shadow-xl relative overflow-hidden border shadow-black/20 border-gray-100">
      <style jsx global>{`
        /* Ultra-aggressive hiding with maximum specificity to override inline styles */
        #inline_checkout ._d-flex._flex-row-reverse,
        #inline_checkout .product-data-container,
        #inline_checkout [data-v-da45a853],
        #inline_checkout [data-v-2e7eae4c],
        #inline_checkout [data-v-cf996f3f],
        #inline_checkout ._bg-white._rounded._mb-4,
        #inline_checkout .product-image-container,
        #inline_checkout .product-infos,
        #inline_checkout .product-image,
        #inline_checkout .product-image__image,
        #inline_checkout img[src*="hotmart.com"],
        #inline_checkout img[src*="static-media.hotmart.com"],
        #inline_checkout img[data-nuxt-img],
        #inline_checkout h1._font-weight-bold._text-gray-800,
        #inline_checkout div._font-weight._text-gray-600,
        #inline_checkout div._font-weight-bold._text-blue-dark,
        #inline_checkout [data-testid="product-price"],
        /* Global selectors with maximum specificity */
        html body ._d-flex._flex-row-reverse,
        html body .product-data-container,
        html body [data-v-da45a853],
        html body [data-v-2e7eae4c],
        html body [data-v-cf996f3f],
        html body ._bg-white._rounded._mb-4,
        html body .product-image-container,
        html body .product-infos,
        html body .product-image,
        html body .product-image__image,
        html body img[src*="hotmart.com"],
        html body img[src*="static-media.hotmart.com"],
        html body img[data-nuxt-img],
        html body h1._font-weight-bold._text-gray-800,
        html body div._font-weight._text-gray-600,
        html body div._font-weight-bold._text-blue-dark,
        html body [data-testid="product-price"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          width: 0 !important;
          max-height: 0 !important;
          max-width: 0 !important;
          min-height: 0 !important;
          min-width: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          position: absolute !important;
          left: -9999px !important;
          top: -9999px !important;
          transform: scale(0) !important;
          clip: rect(0,0,0,0) !important;
          font-size: 0 !important;
          line-height: 0 !important;
          text-indent: -9999px !important;
          overflow: visible !important;
          user-select: none !important;
          pointer-events: none !important;
          z-index: -9999 !important;
        }
        
        /* Force show custom content with maximum specificity */
        html body .custom-product-overlay {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          position: relative !important;
          z-index: 9999 !important;
          overflow: visible !important;
          user-select: text !important;
          pointer-events: auto !important;
        }

        /* Force the main product content to appear above the 150px overlay */
        .flex.items-start.gap-5.mx-7.mt-7.mb-1 {
          position: relative !important;
          z-index: 99999 !important;
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
          pointer-events: auto !important;
          transform: translateZ(0) !important;
          will-change: transform !important;
        }

        /* Ensure the product content container is above everything */
        #inline_checkout > div:first-child {
          position: relative !important;
          z-index: 99999 !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          pointer-events: auto !important;
          transform: translateZ(0) !important;
          will-change: transform !important;
        }

        /* Force ALL elements with the product content to be on top */
        div[class*="flex items-start gap-5"] {
          position: relative !important;
          z-index: 99999 !important;
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
          pointer-events: auto !important;
          transform: translateZ(0) !important;
          will-change: transform !important;
        }

        /* Force the main container to have stacking context */
        #inline_checkout {
          position: relative !important;
          z-index: 1 !important;
          transform: translateZ(0) !important;
        }

        /* Ultra-aggressive hiding for iframe content */
        iframe[src*="hotmart.com"] {
          position: relative !important;
        }

        /* Force overlay on iframe container */
        #inline_checkout {
          position: relative !important;
        }

        .iframe-product-overlay {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: auto !important;
          background: none !important;
          z-index: 99999 !important;
          pointer-events: none !important;
          border: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .iframe-product-overlay .flex.items-start.gap-5 {
          position: relative !important;
          z-index: 99999 !important;
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
          pointer-events: auto !important;
          transform: translateZ(0) !important;
          will-change: transform !important;
        }

        /* Hide any remaining product elements with maximum force */
        *[class*="product"],
        *[data-v-da45a853],
        *[data-v-cf996f3f],
        *[data-v-2e7eae4c] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          width: 0 !important;
          position: absolute !important;
          left: -9999px !important;
          top: -9999px !important;
          transform: scale(0) !important;
          clip: rect(0,0,0,0) !important;
          overflow: hidden !important;
          user-select: none !important;
          pointer-events: none !important;
          z-index: -9999 !important;
        }
      `}</style>
      <div id="inline_checkout" className="flex flex-auto justify-center items-start overflow-hidden -mr-4 mt-0" />
      
      <div className="text-xs font-light absolute space-y-[14.5px] bottom-0 px-8 pb-9.5 opacity-50 leading-normal tracking-normal bg-amber-300">
        <p>Have questions about the product? Please contact</p>
        <p>
          Can&apos;t complete this purchase? Please visit our Help Center<br />
          If you need to submit a request to our support team, please provide the code below:<br />
          CKTID-0000000000000-0000000000000-0000
        </p>
        <p>By clicking &quot;Buy Now&quot; I declare that I (i) understand that Hotmart is processing this order on behalf of Beast Business LLC and has no responsibility for the content and/or control over it; (ii) agree to Hotmart&apos;s Terms of Use, Privacy Policy and other company policies and (iii) am of legal age or authorized and accompanied by a legal guardian.</p>
        <p>Learn more about your purchase here.</p>
        <p>Hotmart © 2025 - All rights reserved<br />2025-06-25T10:40:19.469Z</p>
      </div>

      <Script
        src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
        strategy="afterInteractive"
        onLoad={initCheckout}
      />
      {loading && (
        <div className="flex justify-center items-center w-full h-full inset-0 absolute text-center z-40 text-gray-950 bg-[#F7F9FA]">
          <Loader2 size={50} className="animate-spin opacity-20" />
        </div>
      )}
    </div>
  );

};

