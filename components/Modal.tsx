import CountUp from "@/components/CountUp";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// SET COMPONENT DATA
const randomValue = Math.floor(Math.random() * 300);

export default function Modal({
  value,
}:{
  value: number,
}) {

  return (
    <>
      <div className="flex justify-center items-center fixed inset-0 z-10 backdrop-blur-sm p-10 bg-black/40">
        <div className="flex flex-col items-center gap-5 text-center rounded-3xl shadow-lg modal px-8 py-10 bg-gray-50">
          <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-green-100">
            <DotLottieReact
              src="/lotties/check.lottie"
              loop={false}
              autoplay={true}
            />
          </div>
          <span className="text-4xl font-bold text-gray-900">
            US$ <CountUp start={0} end={value || randomValue} duration={500} />
          </span>
          <div className="flex flex-col gap-4 text-sm text-gray-600">
            <span>This is the amount you received for this answer!</span>
          </div>
        </div>
      </div>
    </>
  );

};