"use client";

import Link from "next/link";
import Image from 'next/image';

export default function Terminos() {
  return (
    <div className="min-h-screen flex flex-col bg-section-white">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-md border border-slate-200 p-8 space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-2">
            <span role="img" aria-label="documento">📄</span> Términos de Uso
          </h1>
          <p className="text-xs text-slate-500 mb-2">Última actualización: 21/04/2025</p>
          <p className="text-slate-700 text-base">
            Bienvenido a Tarifa de Inscripción. Al acceder y utilizar este sitio web y nuestros servicios, aceptas los siguientes términos y condiciones. Si no estás de acuerdo con alguno de estos términos, te recomendamos no utilizar nuestra plataforma.
          </p>
          <ol className="list-decimal pl-4 space-y-4 text-slate-700 text-base">
            <li>
              <strong>Uso del contenido</strong><br/>
              Todo el contenido ofrecido en este sitio —incluyendo textos, videos, audios, imágenes y documentos descargables— es propiedad intelectual de Tarifa de Inscripción y está protegido por leyes de derechos de autor.<br/>
              <br/>
              Queda estrictamente prohibido:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Reproducir, distribuir o vender el contenido sin autorización escrita.</li>
                <li>Compartir el acceso al curso con terceros.</li>
                <li>Usar el contenido con fines comerciales ajenos al curso.</li>
              </ul>
            </li>
            <li>
              <strong>Objetivo educativo</strong><br/>
              Este curso tiene fines exclusivamente educativos. No se garantiza ningún resultado financiero, profesional ni personal. El éxito depende de múltiples factores individuales, incluyendo el esfuerzo, la dedicación y la aplicación práctica de los conocimientos adquiridos.
            </li>
            <li>
              <strong>Acceso al curso</strong><br/>
              El acceso al curso es personal e intransferible. Nos reservamos el derecho de suspender o cancelar cuentas que violen nuestras políticas, sin previo aviso.
            </li>
            <li>
              <strong>Responsabilidad del usuario</strong><br/>
              Al utilizar nuestros materiales, el usuario acepta:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>No usar el contenido para actividades ilegales o engañosas.</li>
                <li>No hacer mal uso del soporte técnico o intentar vulnerar la plataforma.</li>
                <li>Respetar a otros estudiantes y al equipo de soporte.</li>
              </ul>
            </li>
            <li>
              <strong>Modificaciones</strong><br/>
              Tarifa de Inscripción se reserva el derecho de modificar estos términos en cualquier momento. Cualquier cambio será notificado en esta página.
            </li>
            <li>
              <strong>Contacto</strong><br/>
              Si tienes dudas sobre estos Términos de Uso, puedes contactarnos en cualquier momento:<br/>
              <span className="flex items-center gap-2 mt-2">
                <span role="img" aria-label="email">📩</span>
                <a href="mailto:soporte@tarifadeinscripcion.online" className="font-medium text-slate-900 underline hover:text-slate-700">soporte@tarifadeinscripcion.online</a>
              </span>
            </li>
          </ol>
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