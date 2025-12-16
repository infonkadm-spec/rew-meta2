import Script from "next/script";

export default function PixelMeta() {
  return (
    <Script id="utmify-pixel-meta" strategy="afterInteractive">
      {`
        window.pixelId = "6920f79745ab396fb596faa4";
        var a = document.createElement("script");
        a.setAttribute("async", "");
        a.setAttribute("defer", "");
        a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
        document.head.appendChild(a);
      `}
    </Script>
  );
}







