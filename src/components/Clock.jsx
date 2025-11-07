import Countdown from "react-countdown";

function Clock() {
  return (
    <div className="w-screen flex flex-col items-center justify-center py-10 text-white font-clash">
      {/* Countdown Box */}
      <div className="flex flex-col xl:flex-row justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700/60 px-6 py-10 xl:px-10 xl:py-12 gap-6 xl:gap-8">
        
        {/* Countdown Timer */}
        <div className="flex flex-col justify-center items-center text-center">
          <Countdown
            date={new Date("2026-02-20T00:00:00")}
            className="text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] xl:text-[5rem] tracking-widest drop-shadow-md"
          />

          <div className="relative mt-4 text-[0.8rem] sm:text-[1rem] xl:text-[1.4rem] tracking-wider font-chakra">
            <div className="grid grid-cols-4 gap-4 sm:gap-8">
              <span>DAY</span>
              <span>HOURS</span>
              <span>MINUTES</span>
              <span>SECONDS</span>
            </div>
          </div>
        </div>

        {/* Date Info */}
        <div className="hidden xl:flex flex-col justify-center items-center border-l border-gray-700/80 pl-8">
          <span className="font-chakra text-[1.8rem] xl:text-[2rem]">
            February <span className="font-clash text-gray-300">2026</span>
          </span>
          <span className="flex gap-4 text-[2.2rem] font-chakra font-bold mt-2">
            <div className="flex flex-col items-center">
              <span>20</span>
              <b className="text-[12px] text-gray-400">TH</b>
            </div>
            <div className="flex flex-col items-center">
              <span>21</span>
              <b className="text-[12px] text-gray-400">ST</b>
            </div>
            <div className="flex flex-col items-center">
              <span>22</span>
              <b className="text-[12px] text-gray-400">ND</b>
            </div>
          </span>
        </div>
      </div>

      {/* Mobile Date Section */}
      <div className="xl:hidden mt-6 text-center font-chakra">
        <span className="text-[1.5rem] sm:text-[1.8rem]">
          February <span className="font-clash text-gray-300">2026</span>
        </span>
        <div className="flex justify-center gap-6 text-[1.8rem] font-bold mt-2">
          <span>20<sup className="text-[10px] text-gray-400">TH</sup></span>
          <span>21<sup className="text-[10px] text-gray-400">ST</sup></span>
          <span>22<sup className="text-[10px] text-gray-400">ND</sup></span>
        </div>
      </div>
    </div>
  );
}

export default Clock;
