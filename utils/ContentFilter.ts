import { isSuspiciousIP } from '@/utils/IPChecker';
import { cookies, headers } from 'next/headers';
import { isFacebookOrInstagramBrowser, isGoogleOrYouTubeBrowser } from '@/utils/BrowseDetector2';

// SET FILTER DATA

const blockedCountryList = ['BR', 'RU', 'KP', 'IR'];
const blockedLanguageList = ['pt-br'];

// SET PARAMS PASSWORDS

const localTestPass = '$@23tg8141';

// BOT DETECT

function isBot(userAgent: string): boolean {
  return /bot|spider|crawler|google|bing|yandex|read-aloud|facebookexternalhit/i.test(userAgent);
};

export async function getUserLayer(): Promise<number> {

  // GET HEADERS DATA

  const cks = await cookies()
  const hdrs = await headers();
  const ip = hdrs.get('x-real-ip') || hdrs.get('x-forwarded-for') || '';
  const url = hdrs.get('x-url') || ''; 
  const country = hdrs.get('x-vercel-ip-country') || 'BR';
  const userAgent = hdrs.get('User-Agent') || '';
  const userLanguage = hdrs.get('Accept-Language')?.toLowerCase() || "";

  // GET PARAMS DATA

  let params: URLSearchParams;
  try {
    params = url ? new URL(url).searchParams : new URLSearchParams();
  } catch {
    params = new URLSearchParams();
  }
  const catParam = cks.get('cat_valid');
  const localParam = params.get('test') || '';

  console.log('HEADERS:', Object.fromEntries(hdrs.entries()));

  // LOCAL TEST VERIFY

  if (localParam === localTestPass) {
    console.log('BLACK CONTENT: LOCAL TEST');
    return 3;
  };

  // BOT FILTER

  if (isBot(userAgent)) {
    console.error('WHITE CONTENT: BOT');
    return 1;
  };

  // BROWSER AND REFFERER FILTER - Verificar cedo para otimizar
  const isFBIG = isFacebookOrInstagramBrowser(hdrs, url);
  const isGoogleYT = isGoogleOrYouTubeBrowser(hdrs, url);

  if (!isFBIG && !isGoogleYT) {
    console.warn('GRAY CONTENT: BROWSER/REFERRER - Not from Meta or Google/YouTube');
    return 1;
  };

  // PARAMS FILTER

  if (catParam?.value !== '1') {
    console.error('WHITE CONTENT: PARAMS');
    return 1;
  };

  // COUNTRY FILTER

  if (blockedCountryList.includes(country)) {
    console.error('WHITE CONTENT: COUNTRY');
    return 1;
  };

  // LANGUAGE FILTER

  if (blockedLanguageList.includes(userLanguage)) {
    console.error('WHITE CONTENT: LANGUAGE');
    return 1;
  };

  const connectionFilter = await isSuspiciousIP(ip);

  // CONNECTION VERIFY
  
  if (connectionFilter) {
    console.warn('GRAY CONTENT: CONNECTION');
    return 1;
  };

  console.log('BLACK CONTENT: CLEAN');
  return 3;

};