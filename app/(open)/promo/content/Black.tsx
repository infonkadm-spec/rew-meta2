import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Balance from "@/components/Balance";
import ConfettiEffect from "@/components/Confetti";
import PixelV2 from "@/components/pixels/PixelV2";
import { headers } from "next/headers";

export default async function Page() {
  // GET DOMAIN ID
  const hdrs = await headers();
  const domainId = hdrs.get("x-domain-id") || "1";
  const url = hdrs.get("x-url") || "";

  const promoLinks: Record<string, string> = {
    "1": "https://site.burnerhot.com/yt-checkout-17usd",
    "2": "https://site.burnerhot.com/yt-checkout-17usd",
    "3": "https://site.burnerhot.com/yt-checkout-17usd",
  };
  let promoLink = promoLinks[domainId] || "https://site.burnerhot.com/yt-checkout-17usd";

  // Repassar todos os parâmetros UTM da URL atual para o promoLink
  try {
    if (url) {
      const urlObj = new URL(url);
      const searchParams = urlObj.searchParams;
      const promoUrl = new URL(promoLink);
      
      // Copiar todos os parâmetros que começam com "utm_"
      searchParams.forEach((value, param) => {
        if (param.startsWith('utm_')) {
          promoUrl.searchParams.set(param, value);
        }
      });
      
      promoLink = promoUrl.toString();
    }
  } catch {
    // Se houver erro, usar o promoLink original
  }

  return (
    <div className="flex flex-col flex-auto items-center font-medium gap-2">
      <div className="flex w-full justify-center p-5 bg-green-600 text-white">
        <span className="text-base text-center font-semibold">🚨 WAIT! YOU JUST GOT A <u>SUPER DISCOUNT</u>!</span>
      </div>
      <div className="flex flex-col max-w-xl font-medium gap-5 p-5 pb-10">
        <div className="flex justify-between items-center">
          <Logo />
          <Balance page={6} />
        </div>
        <div className="flex flex-col text-center text-base rounded-2xl gap-6 bg-gradient-to-t appear px-5 py-8 from-gray-50 to-gray-200">
          <span className="text-lg sm:text-xl font-semibold tracking-tight">Only one step left to withdraw all your available balance! ✅</span>
          <span>You just received a <strong className="text-red-500">super discount</strong> so don&apos;t miss this unique opportunity.</span>
          <span>⬇️ Just this page ⬇️</span>
          <div className="flex flex-col gap-1.5 rounded-lg border-2 border-dashed p-4 bg-green-50 border-green-500">
            <div className="text-sm font-semibold">
              <span className="leading-none">From <strong className="line-through">US$ 24.00</strong> for</span>
            </div>
            <span className="text-green-500 text-4xl font-extrabold leading-none">US$ 17,00</span>
          </div>
          <div>
            <a href={promoLink}>
              <Button className="!bg-green-600 !border-green-700 hover:!bg-green-500">
                Yes, I want to enjoy it!
              </Button>
            </a>
          </div>
        </div>
      </div>
      <ConfettiEffect />
      <PixelV2 />
    </div>
  );

};
