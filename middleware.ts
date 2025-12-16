import { NextRequest, NextResponse } from 'next/server';

const CLOAKER_PARAM_PASS = 'b6mP2e7KIKH7i2w'; // Parâmetro único para todas as fontes

const domainMap: Record<string, string> = {
  "www.youtube-rewards.online": "1",
  "en.cashinyourwallet.app": "2",
  "www.youtubepremios.com": "3",
};

export function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const url = nextUrl.toString();
  const host = nextUrl.hostname.toLowerCase();
  const searchParams = nextUrl.searchParams;

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-url', url);
  requestHeaders.set('x-host', host);

  const domainId = domainMap[host] || "0";
  requestHeaders.set('x-domain-id', domainId);

  const catParam = searchParams.get('cat');
  const gclid = searchParams.get('gclid');
  const wbraid = searchParams.get('wbraid');
  const gbraid = searchParams.get('gbraid');
  const gadSource = searchParams.get('gad_source');

  // Passar parâmetros Google via headers para o ContentFilter
  if (gclid) requestHeaders.set('x-gclid', gclid);
  if (wbraid) requestHeaders.set('x-wbraid', wbraid);
  if (gbraid) requestHeaders.set('x-gbraid', gbraid);
  if (gadSource) requestHeaders.set('x-gad-source', gadSource);

  // Parâmetro CLOAKER é obrigatório para todas as fontes (Meta, Google, YouTube)
  if (catParam === CLOAKER_PARAM_PASS) {
    searchParams.delete('cat');
    const newUrl = req.nextUrl.clone();
    newUrl.search = searchParams.toString();
  
    const response = NextResponse.redirect(newUrl, { status: 302 });
    
    response.cookies.set({
      name: 'cat_valid',
      value: '1',
      path: '/',
      maxAge: 60 * 60 * 72,
      httpOnly: false,
    });
  
    return response;
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/:path*"],
};