"use client";

import Link from "next/link";
import Image from 'next/image';

export default function Privacidad() {
  return (
    <div className="min-h-screen flex flex-col bg-section-white">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-md border border-slate-200 p-8 space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-2">
            <span role="img" aria-label="cadeado">🔒</span> Política de Privacidad
          </h1>
          <p className="text-xs text-slate-500 mb-2">Última actualización: 19/04/2025</p>
          <p className="text-slate-700 text-base">
            En Tarifa de Inscripción, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política explica cómo recopilamos, usamos y protegemos la información que compartes con nosotros.
          </p>
          <ol className="list-decimal pl-4 space-y-4 text-slate-700 text-base">
            <li>
              <strong>Información que recopilamos</strong><br/>
              Al registrarte en nuestra plataforma o ponerte en contacto con nosotros, podemos recopilar los siguientes datos:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>País de origen</li>
                <li>Información de pago (procesada de forma segura por terceros)</li>
              </ul>
            </li>
            <li>
              <strong>Uso de la información</strong><br/>
              Utilizamos tus datos para:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Proporcionarte acceso al curso y soporte personalizado</li>
                <li>Enviarte comunicaciones importantes (como actualizaciones o acceso a nuevos módulos)</li>
                <li>Mejorar la experiencia del usuario y la seguridad de nuestra plataforma</li>
              </ul>
              Nunca venderemos ni compartiremos tu información con terceros sin tu consentimiento, salvo cuando sea estrictamente necesario para el funcionamiento del curso (como pasarelas de pago o plataformas de email).
            </li>
            <li>
              <strong>Seguridad de los datos</strong><br/>
              Utilizamos medidas técnicas y organizativas para proteger tu información contra accesos no autorizados, pérdida o alteraciones. Aunque ningún sistema es 100% seguro, trabajamos continuamente para mejorar la protección de tus datos.
            </li>
            <li>
              <strong>Cookies</strong><br/>
              Nuestro sitio puede utilizar cookies para mejorar la experiencia del usuario y recolectar datos estadísticos. Puedes configurar tu navegador para rechazar cookies si así lo prefieres.
            </li>
            <li>
              <strong>Acceso, modificación y eliminación</strong><br/>
              Puedes solicitar el acceso, modificación o eliminación de tus datos personales en cualquier momento escribiéndonos a:<br/>
              <span className="flex items-center gap-2 mt-2">
                <span role="img" aria-label="email">📩</span>
                <a href="mailto:soporte@tarifadeinscripcion.online" className="font-medium text-slate-900 underline hover:text-slate-700">soporte@tarifadeinscripcion.online</a>
              </span>
              Responderemos tu solicitud lo antes posible, de forma transparente y conforme a las leyes de privacidad aplicables.
            </li>
            <li>
              <strong>Cambios en esta política</strong><br/>
              Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será informado en esta página.
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