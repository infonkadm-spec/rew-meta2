import Script from "next/script";

export default function PixelV3() {
  return (
    <Script id="pixel-v3" strategy="afterInteractive">
      {`
        window.googlePixelId = "6920f79745ab396fb596faa4";
        var a = document.createElement("script");
        a.setAttribute("async", "");
        a.setAttribute("defer", "");
        a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel-google.js");
        document.head.appendChild(a);
      `}
    </Script>
  );
} 