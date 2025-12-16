import Button from "@/components/Button";
import ConfettiEffect from "@/components/Confetti";
import { LoaderCircle } from "lucide-react";
import PixelV3 from "@/components/pixels/PixelV3";

export default function Page1({
  active,
  handleClick,
}:{
  active: boolean,
  handleClick: () => void,
}) {

  return (
    <>
      <PixelV3 />
      <div className="flex flex-col text-center text-sm rounded-3xl gap-7 bg-gradient-to-t appear border-t px-8 py-8 from-gray-50 to-gray-200/50 border-gray-300">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-semibold">🎁 Congratulations! 🎁</span>
          <span>You&apos;ve been selected for YouTube&apos;s new rewards program!</span>
        </div>
        <div className="rounded-lg border-2 border-dashed shadow-lg p-5 bg-green-50 border-green-500">
          <span className="font-bold uppercase">✅ You have already won US$ 39!</span>
        </div>
        <div className="flex flex-col gap-4">
          <span>Complete 3 more evaluations and make your first withdrawal!</span>
          <span>Click the button below to start! 👇</span>
        </div>
      </div>
      <Button
        onClick={handleClick}
        disabled={active}
        className="!bg-green-500 !border-green-600 hover:!bg-green-500 active:!bg-green-700"
      >
        {active ? <LoaderCircle className="flex-none animate-spin" /> : "Click here and get started!"}
      </Button>
      <ConfettiEffect />
    </>
  );

};