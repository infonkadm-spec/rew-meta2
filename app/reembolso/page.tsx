"use client";

import Link from "next/link";
import Image from 'next/image';

export default function Reembolso() {
  return (
    <div className="min-h-screen flex flex-col bg-section-white">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-md border border-slate-200 p-8 space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-2">
            <span role="img" aria-label="dinheiro">💰</span> Política de Reembolso
          </h1>
          <p className="text-xs text-slate-500 mb-2">Última actualización: 18/04/2025</p>
          <p className="text-slate-700 text-base">
            En Tarifa de Inscripción, queremos que tengas la mejor experiencia posible con nuestro curso. Si por cualquier motivo no estás satisfecho con tu compra, esta es nuestra política de reembolso:
          </p>
          <ol className="list-decimal pl-4 space-y-4 text-slate-700 text-base">
            <li>
              <strong>Garantía de satisfacción</strong><br/>
              Ofrecemos una garantía de 60 días desde la fecha de compra. Si dentro de ese período decides que el curso no es para ti, puedes solicitar un reembolso completo, sin preguntas.
            </li>
            <li>
              <strong>Requisitos para solicitar el reembolso</strong><br/>
              Para ser elegible para el reembolso:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>La solicitud debe realizarse dentro de los primeros 7 días naturales tras la compra.</li>
                <li>Debes enviar un correo desde el mismo email utilizado al registrarte.</li>
                <li>Solo se aceptará una solicitud de reembolso por persona (no aplicable a compras repetidas del mismo curso).</li>
              </ul>
            </li>
            <li>
              <strong>Cómo solicitar tu reembolso</strong><br/>
              Envía un correo electrónico a:<br/>
              <span className="flex items-center gap-2 mt-2">
                <span role="img" aria-label="email">📩</span>
                <a href="mailto:soporte@tarifadeinscripcion.online" className="font-medium text-slate-900 underline hover:text-slate-700">soporte@tarifadeinscripcion.online</a>
              </span>
              Asunto: Solicitud de reembolso<br/>
              Incluye:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Tu nombre completo</li>
                <li>Correo con el que realizaste la compra</li>
                <li>Motivo (opcional)</li>
              </ul>
              Nuestro equipo procesará tu solicitud lo antes posible.
            </li>
            <li>
              <strong>Excepciones</strong><br/>
              No se otorgarán reembolsos fuera del plazo indicado o en casos donde se haya detectado uso indebido del contenido, distribución no autorizada o intento de fraude.
            </li>
            <li>
              <strong>Cambios en esta política</strong><br/>
              Nos reservamos el derecho de actualizar esta política en cualquier momento. Cualquier cambio será notificado en esta página.
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