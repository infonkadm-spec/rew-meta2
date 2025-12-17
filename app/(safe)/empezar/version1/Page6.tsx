import CommentsV2 from "@/components/CommentsV2";
import VSLBlackV2 from "@/components/videos/VSLBlackV2";
import PixelV2 from "@/components/pixels/PixelV2";
import Image from "next/image";
//import PlacesAlert from '@/components/PlacesAlert';
//import AlertBoxUrgente from "@/components/AlertBoxUrgente";
import { useLayer } from '@/context/LayerProvider';
import { useEffect } from 'react';

export default function Page6() {
  // COMPONENT STATES
  // const [visible] = useState<boolean>(false);

  // IMPORT CONTEXT DATA
  const userLayer = useLayer();

  // USER LAYER DATA
  const userHost = userLayer.host;

  // SET CONTENT DATA (A/B IDs)
  // const videoIdA = "68c35f645dfbf05254f3a8a1"; // A
  // const videoIdB = "68c35f645dfbf05254f3a8a1"; // B
  const backLink = `https://${userHost}/promo`;

  // VIDEO VERIFY (A=573s, B=702s)
  useEffect(() => {
    // Removida a lógica duplicada de verificação de tempo
    // O AlertBoxUrgente agora controla isso através do hook useVturbAbVideoTime
  }, []);

  // BACK REDIRECT
  useEffect(() => {
    function setBackRedirect(url: string) {
      let urlBackRedirect = url;
      urlBackRedirect =
        urlBackRedirect.trim() +
        (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') +
        document.location.search.replace('?', '').toString();
      history.pushState({}, '', location.href);
      history.pushState({}, '', location.href);
      history.pushState({}, '', location.href);
      window.addEventListener('popstate', () => {
        console.log('onpopstate', urlBackRedirect);
        setTimeout(() => {
          location.href = urlBackRedirect;
        }, 1);
      });
    }

    setBackRedirect(backLink);
  }, [backLink]);

  return (
    <>
      <PixelV2 />
      <div className="flex items-center flex-col gap-1 relative">
        <VSLBlackV2 />
        {/*<AlertBoxUrgente
          videoIdA={videoIdA}
          videoIdB={videoIdB}
          thresholdASeconds={573}
          thresholdBSeconds={702}
        />*/}
      </div>
      
      {/* Video Info */}
      <div className="flex flex-col gap-2 px-4">
        <h2 className="text-lg font-semibold">Your money is almost in your hands — watch this step-by-step withdrawal guide</h2>
        <p className="text-sm text-gray-600">591K views - 2 days ago</p>
        <hr className="border-gray-200" />
        
        {/* Channel Info */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-1">
            <Image
              width="40"
              height="40"
              src="/logos/logochannel.png"
              alt="Youtube"
              className="rounded-full"
            />
            <span className="text-xl font-bold leading-none text-gray-900">YouTube</span>
          </div>
          <div className="flex items-center gap-1 bg-black px-2 py-1 rounded-full">
            <Image
              width="16"
              height="16"
              quality={100}
              src="/steps/instagram-verify.png"
              alt="Verified"
            />
            <span className="text-sm font-medium text-white">Official Channel</span>
          </div>
        </div>
      </div>
      
      <CommentsV2 />
    </>
  );
}