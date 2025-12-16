import CountUp from "@/components/CountUp";

// SET COMPONENT DATA
const startBalance: Record<number, number> = {
  1: 39,
  2: 39,
  3: 49,
  4: 86,
  5: 133,
  6: 180,
  7: 180,
};

// SET COMPONENT DATA
const endBalance: Record<number, number> = {
  1: 34,
  2: 34,
  3: 71,
  4: 125,
  5: 180,
  6: 180,
  7: 180,
};

export default function Balance({
  page,
}:{
  page: number,
}) {

  return (
    <div className="flex items-center gap-3 rounded-lg border-dashed border-2 shadow-sm p-3 border-green-300 bg-white">
      <span className="text-[10px] text-right font-semibold uppercase leading-3 text-gray-900">Your<br />balance:</span>
      <span className="text-2xl font-semibold leading-none text-green-600">US$ <CountUp start={startBalance[page]} end={endBalance[page]} duration={3000} /></span>
    </div>
  );

};