/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import Option from "@/components/Option";
import { Frown, Meh, Smile } from "lucide-react";

export default function Page3({
  page,
  setPage,
}:{
  page: number,
  setPage: any,
}) {

  return (
    <>
      <div className="flex flex-col gap-8 text-base appear">
        <div className="rounded-3xl border shadow-lg p-6 sm:p-7 bg-gray-200 border-gray-400/10 shadow-black/5">
          <Image
            width="500"
            height="396"
            src="/thumbs/etapa2.webp"
            alt="Question"
            priority
          />
        </div>
        <div className="flex flex-col gap-2 text-center">
          <span className="text-lg font-semibold">¿Cuál es tu reacción cuando ves la portada de este vídeo?</span>
          <span className="text-gray-600 text-sm">Seleccione la opción a continuación ⬇️</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Option onClick={() => setPage(page + 1)}><Smile size={45} className="text-green-300" /></Option>
          <Option onClick={() => setPage(page + 1)}><Meh size={45} className="text-yellow-500" /></Option>
          <Option onClick={() => setPage(page + 1)}><Frown size={45} className="text-red-500" /></Option>
        </div>
      </div>
    </>
  );

};