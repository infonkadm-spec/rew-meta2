"use client";

import Link from "next/link";
import Image from 'next/image';

export default function Descargo() {
  return (
    <div className="min-h-screen flex flex-col bg-section-white">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-md border border-slate-200 p-8 space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-2">
            <span role="img" aria-label="aviso">⚠️</span> Descargo de Responsabilidad
          </h1>
          <p className="text-xs text-slate-500 mb-2">Última actualización: 21/04/2025</p>
          <p className="text-slate-700 text-base">
            La información contenida en este sitio y en el curso Tarifa de Inscripción tiene únicamente fines educativos e informativos. No representa asesoramiento financiero, legal, profesional ni garantiza resultados específicos.
          </p>
          <ol className="list-decimal pl-4 space-y-4 text-slate-700 text-base">
            <li>
              <strong>No ofrecemos garantías de ingresos</strong><br/>
              Aunque se muestran estrategias y casos reales de uso de plataformas digitales, Tarifa de Inscripción no promete ni asegura ingresos. Los resultados pueden variar según la dedicación, experiencia, país de residencia y otros factores externos que no podemos controlar.
            </li>
            <li>
              <strong>Responsabilidad individual</strong><br/>
              El uso de la información proporcionada es responsabilidad exclusiva del usuario. El estudiante es quien decide si aplica o no lo aprendido y en qué condiciones lo hace.
            </li>
            <li>
              <strong>Terceros y plataformas externas</strong><br/>
              El curso puede mencionar herramientas o plataformas como YouTube o sitios de terceros. Tarifa de Inscripción no tiene ninguna afiliación oficial con estas empresas ni puede garantizar cambios en sus políticas, algoritmos o términos de uso.
            </li>
            <li>
              <strong>No somos una fuente de asesoría profesional</strong><br/>
              Este curso no sustituye la orientación de un experto certificado en áreas como finanzas, marketing, impuestos o leyes. Si tienes dudas sobre cómo aplicar ciertos conocimientos en tu país, te recomendamos consultar con un profesional adecuado.
            </li>
            <li>
              <strong>Contacto</strong><br/>
              Si tienes preguntas sobre este descargo de responsabilidad, puedes comunicarte con nuestro equipo en cualquier momento:<br/>
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