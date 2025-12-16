import Button from "@/components/Button";
import ConfettiEffect from "@/components/Confetti";
import { LoaderCircle } from "lucide-react";
import PixelV2 from "@/components/pixels/PixelV2";
import LogoV2 from "@/components/LogoV2";

export default function Page1({
  active,
  handleClick,
}:{
  active: boolean,
  handleClick: () => void,
}) {

  return (
    <>
      <PixelV2 />
      <div className="flex flex-col items-center justify-center gap-7 appear px-4 py-4">
        <div className="flex flex-col items-center text-center text-sm rounded-3xl gap-7 pt-[40%]">
          <div className="scale-150">
            <LogoV2 />
          </div> 
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold">Earn money by rating videos</span>
            <div className="text-lg text-gray-600 flex flex-col gap-2">
              <span>Congratulations! You&apos;ve just won a free license to evaluate ads in our app.</span>
              <span>Click the button below to start watching videos and claim your bonus!</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <Button
            onClick={handleClick}
            disabled={active}
            className="flex flex-row justify-center items-center !bg-green-600 !border-green-700 hover:!bg-green-500 active:!bg-green-700 w-1/2 whitespace-nowrap"
          >
          {active ? <LoaderCircle className="flex-none animate-spin" /> : "Start Now"}
          </Button>
        </div>
      </div>
      <ConfettiEffect />
    </>
  );

};