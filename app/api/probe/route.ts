import { NextRequest, NextResponse } from 'next/server';
import { detectAdSource } from '@/utils/detectSource';

export async function POST(req: NextRequest) {
  try {
    const { ref, ua } = await req.json();
    
    // Criar headers simulados para detecção
    const headers = new Headers();
    headers.set('referer', ref);
    headers.set('user-agent', ua);
    
    const source = detectAdSource(headers);
    
    // Salvar em cookie ou KV
    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: 'source_hint',
      value: source,
      path: '/',
      maxAge: 60 * 60 * 24, // 24 horas
      httpOnly: false,
    });
    
    return response;
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}