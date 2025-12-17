import { detectAdSource, AdSource } from './detectSource';

export function isFacebookOrInstagramBrowser(headers: Headers, url?: string): boolean {
  const source = detectAdSource(headers, url);
  return source === 'meta';
}

// Nova função para detectar Google/YouTube
export function isGoogleOrYouTubeBrowser(headers: Headers, url?: string): boolean {
  const source = detectAdSource(headers, url);
  return source === 'google' || source === 'youtube';
}

// Função para detectar qualquer fonte de ads válida
export function isAdSourceBrowser(headers: Headers, url?: string): boolean {
  const source = detectAdSource(headers, url);
  return source !== 'unknown';
}

// Função para obter o tipo específico de fonte
export function getAdSource(headers: Headers, url?: string): AdSource {
  return detectAdSource(headers, url);
}