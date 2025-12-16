import Progress from "@/components/Progress";
import HotmartUpsell from "@/components/HotmartUpsell";

export default function Black() {

  return (
    <>
      <div className="w-full bg-red-600 text-white">
        <div className="mx-auto px-4 sm:px-6 py-4 font-medium">
          <div className="text-sm font-semibold text-center">
          Please do not close or refresh this page, as errors may occur when paying the fee!
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-xl gap-6 px-5 py-6 mx-auto">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <span className="text-xs italic opacity-60">We are processing your fee payment…</span>
          <Progress progress={88} />
        </div>
                <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-gradient-to-t appear border-t px-5 py-6 from-gray-100 to-white border-gray-300">
          <div className="font-bold uppercase text-lg text-green-600 tracking-wide animate-pulse">
            Congratulations! Your surprise is our profit multiplier!
          </div>
          <div className="text-sm font-medium text-gray-700 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-200 shadow-sm">
             <span className="text-sm font-medium text-gray-700">Do you want to activate your functionality?</span> 
          </div>
          <HotmartUpsell black={true} />
        </div>
      </div>
    </>  
  );

}; 