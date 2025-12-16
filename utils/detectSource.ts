// utils/detectSource.ts
export type AdSource = 'meta' | 'google' | 'youtube' | 'unknown';

export function detectAdSource(headers: Headers, url?: string): AdSource {
  const ua = (headers.get('user-agent') || '').toLowerCase();
  const ref = (headers.get('referer') || '').toLowerCase();
  const xrw = (headers.get('x-requested-with') || '').toLowerCase();

  const search = url ? new URL(url).searchParams : null;

  // ------ META (FB/IG) ------
  let metaScore = 0;
  if (/fb_iab|fbav|fban|instagram|iabmv/i.test(ua)) metaScore += 2;
  if (xrw.includes('com.facebook.katana') || xrw.includes('com.instagram.android')) metaScore += 2;
  if (ref.includes('facebook.com') || ref.includes('instagram.com')) metaScore += 1;
  if (search && (search.has('fbclid') || search.has('igshid'))) metaScore += 1;

  // ------ GOOGLE / YOUTUBE ------
  let gScore = 0;
  // Usar headers do middleware se disponíveis, senão usar URL
  const gclid = headers.get('x-gclid') || search?.get('gclid');
  const wbraid = headers.get('x-wbraid') || search?.get('wbraid');
  const gbraid = headers.get('x-gbraid') || search?.get('gbraid');
  const gadSource = (headers.get('x-gad-source') || search?.get('gad_source') || '').toLowerCase();
  
  const hasGclid  = !!gclid;
  const hasWbraid = !!wbraid;
  const hasGbraid = !!gbraid;

  // Presença de identificadores Google Ads
  if (hasGclid || hasWbraid || hasGbraid) gScore += 2;

  // gad_source existe em TODO clique vindo de Google Ads (Search/Display/YouTube…)
  if (gadSource) gScore += 2;

  // Referrer pode vir vazio; quando vem, considerar *.google.* / *.youtube.*
  if (ref.includes('google.') || ref.includes('youtube.')) gScore += 1;

  // Heurística simples para separar YouTube de "Google genérico"
  const utmSource = (search?.get('utm_source') || '').toLowerCase();
  const looksYoutube =
    utmSource === 'youtube' ||
    ref.includes('youtube.') ||
    // alguns setups populam utm_content/term com placement de vídeo
    /yt|youtube/.test(search?.get('utm_content') || '') ||
    /yt|youtube/.test(search?.get('utm_term') || '') ||
    // opcional: você pode mapear alguns valores de gad_source via seus próprios logs
    (gadSource && /youtube/.test(gadSource)); // só se você padronizar nos seus templates

  if (metaScore >= 2) return 'meta';
  if (gScore >= 2) return looksYoutube ? 'youtube' : 'google';
  return 'unknown';
}
