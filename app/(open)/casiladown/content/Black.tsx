import Progress from "@/components/Progress";
//import HotmartUpsell from "@/components/HotmartUpsell";
import Logo from "@/components/Logo";
import Balance from "@/components/Balance";
import Button from "@/components/Button";

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
        <div className="flex justify-between items-center w-full">
          <Logo />
          <Balance page={6} />
        </div>
        <div className="flex flex-col items-center gap-2.5 text-center">
          <span className="text-xs italic opacity-80">We are processing your fee payment…</span>
          <Progress progress={67} />
        </div>
        <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-gradient-to-t appear border-t px-5 py-6 from-gray-100 to-white border-gray-300">
          <div className="font-bold uppercase">
            <span className="text-sm font-semibold text-center">🎉 Congratulations! You won a surprise! 🎁</span>
            <br />
            <br />
            <span className="text-xs opacity-100">Click the green button below and receive it immediately!</span>
          </div>
          {/* <HotmartUpsell black={true} /> */}  
          {/* Upsell Actions */}
          <div style={{ width: "100%", maxWidth: "100%", margin: "0 auto" }} className="flex flex-col items-center gap-3">
            <a href="https://explodely.com/p/2147384814?ocu=yes" className="w-full">
              <Button className="!w-full !bg-green-600 !border-green-700 hover:!bg-green-500">
                I want to receive it immediately!
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>  
  );

};