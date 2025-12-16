/* eslint-disable @typescript-eslint/no-explicit-any */

import Button from "@/components/Button";
import ConfettiEffect from "@/components/Confetti";

export default function Page1({
  page,
  setPage,
}:{
  page: number,
  setPage: any,
}) {

  return (
    <>
      <div className="flex flex-col text-center text-sm rounded-3xl gap-7 bg-gradient-to-t appear border-t px-8 py-8 from-gray-50 to-gray-200/50 border-gray-300">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-semibold">🎁 ¡Felicitaciones! 🎁</span>
          <span>¡Has sido seleccionado para el nuevo programa de recompensas de YouTube!</span>
        </div>
        <div className="rounded-lg border-2 border-dashed shadow-lg p-5 bg-green-50 border-green-500">
          <span className="font-bold uppercase">✅ ¡Ya ganaste US$ 39!</span>
        </div>
        <div className="flex flex-col gap-4">
          <span>¡Realiza 3 evaluaciones más y haz tu primer retiro!</span>
          <span>Haga clic en el botón de abajo para comenzar! 👇</span>
        </div>
      </div>
      <Button onClick={() => setPage(page + 1)} className="!bg-green-600 !border-green-700 hover:!bg-green-500">
        ¡Haga clic aquí y comience!
      </Button>
      <ConfettiEffect />
    </>
  );

};