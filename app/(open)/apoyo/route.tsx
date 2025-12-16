import { NextResponse } from 'next/server';

export async function GET() {
  // Redireciona diretamente para o protocolo mailto
  return NextResponse.redirect("mailto:soporte@tarifadeinscripcion.online");
};