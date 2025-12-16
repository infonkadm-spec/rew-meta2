import Button from "@/components/Button";
import ConfettiEffect from "@/components/Confetti";
import { CirclePlay, LoaderCircle } from 'lucide-react';
import PixelV3 from "@/components/pixels/PixelV3";

export default function Page5({
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
          <span>Your balance is available for immediate withdrawal! 🎉</span>
        </div>
        <div className="flex flex-col gap-3 rounded-lg border-2 border-dashed p-5 bg-green-50 border-green-500">
            <span className="font-bold uppercase">✅ You have already won US$ 213!</span>
          <span>These are your earnings for the 3 surveys you just completed.</span>
        </div>
        <div>
          <span>Click the button below and see the withdrawal guide! 👇</span>
        </div>
      </div>
      <Button
        onClick={handleClick}
        disabled={active}
        className="!bg-green-600 !border-green-700 hover:!bg-green-500"
      >
        {active ? (
          <LoaderCircle className="flex-none animate-spin" />
        ):(
          <>
            <CirclePlay className="flex-none" />
            <span>Yes, withdraw my balance now!</span>
          </>
        )}
      </Button>
      <ConfettiEffect />
    </>
  );

};