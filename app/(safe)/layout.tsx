import WhiteContent from '@/pages/whiteContent/Home';
import { headers, cookies } from 'next/headers';
import { getUserLayer } from '@/utils/ContentFilter';
import { LayerProvider } from '@/context/LayerProvider';
import PixelMeta from '@/components/pixels/PixelMeta';

export default async function Layout({
  children,
}:{
  children: React.ReactNode;
}) {

  // GET DOMAIN ID
  const hdrs = await headers();
  const host = hdrs.get("x-host") || "www.youtubeganancias.com";
  const domainId = hdrs.get("x-domain-id") || "1";

  // GET USER LAYER
  const userLayer = await getUserLayer();
  const whiteContent = userLayer === 1;
  
  // CHECK IF CAT PARAM IS PRESENT (Meta Ads traffic)
  const cks = await cookies();
  const catValid = cks.get('cat_valid')?.value === '1';
  
  // WHITE CONTENT
  if (whiteContent) {
    return <WhiteContent />;
  };

  // BLACK CONTENT
  return (
    <LayerProvider layer={userLayer} domain={domainId} host={host}>
      {catValid && <PixelMeta />}
      <div className="min-h-screen flex flex-col items-center">
        {children}
      </div>
    </LayerProvider>
  );
  
};