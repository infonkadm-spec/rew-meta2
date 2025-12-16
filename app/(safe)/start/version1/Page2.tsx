import Image from "next/image";
import Option from "@/components/Option";
import { Frown, Meh, Smile } from "lucide-react";
import PixelV2 from "@/components/pixels/PixelV2";

export default function Page2({
  handleClick,
}:{
  handleClick: () => void,
}) {

  return (
    <>
      <PixelV2 />
      <div className="flex flex-col gap-3 sm:gap-4 text-sm appear">
        <div className="rounded-3xl border shadow-lg p-6 sm:p-7 bg-white border-gray-400/20 shadow-black/5">
          <Image
            width="500"
            height="396"
            src="/thumbs/thumb2.webp"
            alt="Question"
            priority
            quality={60}
          />
        </div>
        <div className="flex flex-col gap-2 text-center my-4">
          <span className="text-lg font-semibold">What is your reaction when you see the cover of this video?</span>
          <span className="text-sm text-gray-600">Select the option below ⬇️</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Option onClick={handleClick} className="active:!ring-green-500">
            <Smile size={45} className="text-green-400" />
          </Option>
          <Option onClick={handleClick} className="active:!ring-red-500">
            <Meh size={45} className="text-yellow-500" />
          </Option>
          <Option onClick={handleClick} className="active:!ring-red-500">
            <Frown size={45} className="text-red-500" />
          </Option>
        </div>
      </div>
    </>
  );

};