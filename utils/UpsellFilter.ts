import { headers } from 'next/headers';

// SET FILTER DATA

const blockedCountryList = ['BR', 'RU', 'KP', 'IR'];

// SET PARAMS PASSWORDS

const localTestPass = 'xTp2JCo4dP8ALUC6ei';

// BOT DETECT

function isBot(userAgent: string): boolean {
  return /bot|spider|crawler|google|bing|yandex|read-aloud|facebookexternalhit/i.test(userAgent);
};

export async function getUserLayerUpsell(): Promise<number> {

  // GET HEADERS DATA

  const hdrs = await headers();
  const url = hdrs.get('x-url') || ''; 
  const country = hdrs.get('x-vercel-ip-country') || '';
  const userAgent = hdrs.get('User-Agent') || '';

  // GET PARAMS DATA

  let params: URLSearchParams;
  try {
    params = url ? new URL(url).searchParams : new URLSearchParams();
  } catch {
    params = new URLSearchParams();
  }
  const localParam = params.get('test') || '';

  console.log('HEADERS:', Object.fromEntries(hdrs.entries()));

  // LOCAL TEST VERIFY

  if (localParam === localTestPass) {
    console.log('BLACK UPSELL: LOCAL TEST');
    return 3;
  };

  // BOT FILTER

  if (isBot(userAgent)) {
    console.error('WHITE UPSELL: BOT');
    return 2;
  };

  // COUNTRY FILTER

  if (!country || blockedCountryList.includes(country)) {
    console.error('WHITE UPSELL: COUNTRY');
    return 2;
  };

  const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

  // DEVICE FILTER

  if (!isMobile) {
    console.error('WHITE UPSELL: DEVICE');
    return 2;
  };

  console.log('BLACK UPSELL: CLEAN');
  return 3;

};