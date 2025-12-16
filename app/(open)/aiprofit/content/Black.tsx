import Button from "@/components/Button";
import Progress from "@/components/Progress";
import Logo from "@/components/Logo";
import Balance from "@/components/Balance";

export default function Black() {

  return (
    <>
      <div className="w-full bg-green-600 text-white">
        <div className="mx-auto px-4 sm:px-6 py-4 font-medium">
          <div className="text-sm font-semibold text-center">
            Congratulations! Your purchase was successful!
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-xl gap-6 px-5 py-6 mx-auto">
        <div className="flex justify-between items-center w-full">
          <Logo />
          <Balance page={6} />
        </div>
        <div className="flex flex-col items-center gap-2.5 text-center">
          <span className="text-xs italic opacity-60">We are processing your fee payment…</span>
          <Progress progress={88} />
        </div>
        <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-gradient-to-t appear border-t px-5 py-6 from-gray-100 to-white border-gray-300 border-2 border-dashed border-green-500">
          <div className="text-base leading-relaxed">
            Imagine having an artificial intelligence that works for you 24/7, automatically increasing your profits while you focus on growing your business. With AI Profit, you&apos;ll unlock the power of full automation — optimized campaigns, repetitive tasks eliminated, and real-time data decisions that keep your income rising. For just $17, you can activate AI Profit today and let artificial intelligence do the hard work for you.
          </div>
          {/* Checkout Actions */}
          <div style={{ width: "100%", maxWidth: "100%", margin: "0 auto" }} className="flex flex-col items-center gap-3">
            <a href="https://explodely.com/p/2062208753?ocu=yes" className="w-full">
              <Button className="!w-full !bg-green-600 !border-green-700 hover:!bg-green-500">
              I want to pay $17 to activate
              </Button>
            </a>
            <a href="/turbo" className="text-blue-700 hover:underline text-sm">
              No, thanks
            </a>
          </div>
        </div>
      </div>
    </>  
  );

};
