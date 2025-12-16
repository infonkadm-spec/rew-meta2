import Button from "@/components/Button";
import ConfettiEffect from "@/components/Confetti";
import { CirclePlay, LoaderCircle, CheckCircle2 } from 'lucide-react';
import PixelV2 from "@/components/pixels/PixelV2";
import CountUp from "@/components/CountUp";

export default function Page5({
  active,
  handleClick,
}:{
  active: boolean,
  handleClick: () => void,
}) {

  return (
    <>
      <PixelV2 />
      <div className="flex flex-col items-center text-center text-sm rounded-3xl gap-6 appear px-6 sm:px-8 py-6 sm:py-8">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-green-500 animate-pulse" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Congratulations!</h2>
          </div>
          <p className="text-sm sm:text-base text-gray-700 font-medium">Your balance is available for immediate withdrawal</p>
        </div>
        
        <div className="flex flex-col gap-3 rounded-xl p-6 sm:p-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-dashed border-2 border-green-400 shadow-lg w-full max-w-md transform transition-all hover:scale-105 hover:shadow-xl animate-pulse">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-3xl font-bold leading-none text-green-600">US$ <CountUp start={125} end={180} duration={3000} /></span>
          </div>
          <div className="flex items-center justify-center gap-2 pt-2 border-t border-dashed border-green-400">
            <p className="text-sm sm:text-base text-gray-700 font-semibold">Earnings from 3 completed surveys</p>
          </div>
        </div>
        
        <div className="w-full max-w-md">
          <p className="text-sm sm:text-base text-gray-700 font-medium mb-1">Ready to withdraw your earnings?</p>
          <p className="text-xs sm:text-sm text-gray-500">Click the button below to see the withdrawal guide</p>
        </div>
      </div>
      
      <Button
        onClick={handleClick}
        disabled={active}
        className="!bg-green-600 !border-green-700 hover:!bg-green-500 active:!bg-green-700"
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