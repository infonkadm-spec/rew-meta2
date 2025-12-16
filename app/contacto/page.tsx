"use client";

import Link from "next/link";
import Image from 'next/image';

export default function Contacto() {
  return (
    <div className="min-h-screen flex flex-col bg-section-white">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-md border border-slate-200 p-8 space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-2">
            <span role="img" aria-label="carta">📬</span> Contáctanos
          </h1>
          <p className="text-slate-700 text-base">
            ¿Tienes preguntas, sugerencias o necesitas ayuda con tu acceso al curso?
          </p>
          <p className="text-slate-700 text-base">
            Nuestro equipo está disponible para ti 24 horas al día, los 7 días de la semana.
          </p>
          <div className="flex items-center gap-2 text-base">
            <span role="img" aria-label="email">📩</span>
            <a href="mailto:soporte@tarifadeinscripcion.online" className="font-medium text-slate-900 underline hover:text-slate-700">soporte@tarifadeinscripcion.online</a>
          </div>
          <p className="text-slate-700 text-base">
            Si tu consulta está relacionada con el acceso al curso, por favor incluye el correo electrónico con el que te registraste para poder ayudarte más rápido.
          </p>
          <p className="text-slate-700 text-base">
            Gracias por formar parte de Tarifa de Inscripción.<br/>
            Estamos aquí para apoyarte en cada paso de tu camino digital.
          </p>
        </div>
      </main>
      <footer className="w-full bg-slate-100 border-t border-slate-200 mt-8 py-8 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex justify-center mb-4">
            <Image src="/logo you.png" alt="Logo" width={48} height={48} className="h-12 w-auto" />
          </div>
          <p className="text-xs text-slate-500">
            Este curso no garantiza resultados financieros de ningún tipo. El contenido aquí compartido tiene fines exclusivamente educativos y busca enseñar habilidades digitales relacionadas con plataformas digitales. Cualquier resultado económico dependerá única y exclusivamente de la aplicación individual, el esfuerzo personal y factores externos que no pueden ser controlados. No vendemos fórmulas mágicas ni prometemos ingresos rápidos. Por favor, utiliza este material con responsabilidad y sentido crítico.
          </p>
          <nav className="flex flex-wrap justify-center gap-4 text-xs text-slate-600">
            <Link href="/contacto" className="hover:underline">Contacto</Link>
            <span>|</span>
            <Link href="/terminos" className="hover:underline">Términos de Uso</Link>
            <span>|</span>
            <Link href="/descargo" className="hover:underline">Descargo de Responsabilidad</Link>
            <span>|</span>
            <Link href="/privacidad" className="hover:underline">Política de Privacidad</Link>
            <span>|</span>
            <Link href="/reembolso" className="hover:underline">Política de Reembolso</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
} 