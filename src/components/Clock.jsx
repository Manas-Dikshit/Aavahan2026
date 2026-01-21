import Countdown from "react-countdown";

const festStart = new Date("2026-02-27T00:00:00");
const festEnd = new Date("2026-02-28T23:59:59");

function suffix(day) {
  if (day === 1 || day === 21 || day === 31) return "ST";
  if (day === 2 || day === 22) return "ND";
  if (day === 3 || day === 23) return "RD";
  return "TH";
}

function Clock() {
  const startDay = festStart.getDate();
  const endDay = festEnd.getDate();

  return (
    <div className="w-screen flex flex-col items-center justify-center py-10 text-white font-clash bg-[#004aad]">

      <div className="flex flex-col xl:flex-row justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700/60 px-6 py-10 xl:px-10 xl:py-12 gap-6 xl:gap-8">

        {/* Countdown (starts at day 1) */}
        <div className="text-center">
          <Countdown
            date={festStart}
            className="text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] xl:text-[5rem]"
          />

          <div className="grid grid-cols-4 gap-6 mt-4 text-sm xl:text-lg font-chakra tracking-widest">
            <span>DAYS</span>
            <span>HOURS</span>
            <span>MINUTES</span>
            <span>SECONDS</span>
          </div>
        </div>

        {/* Date range */}
        <div className="flex flex-col items-center xl:border-l xl:pl-8 border-gray-700/80">
          <span className="text-[1.6rem] xl:text-[2rem] font-chakra">
            February <span className="text-gray-300">2026</span>
          </span>

          <span className="flex gap-4 text-[2rem] font-bold mt-2">
            <span>
              {startDay}
              <sup className="text-[10px] text-gray-400 ml-1">
                {suffix(startDay)}
              </sup>
            </span>

            <span className="text-gray-400">–</span>

            <span>
              {endDay}
              <sup className="text-[10px] text-gray-400 ml-1">
                {suffix(endDay)}
              </sup>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Clock;
