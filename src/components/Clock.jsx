import Countdown from "react-countdown";

function Clock() {
  return (
    <div className="w-screen flex justify-center mt-4 lg:mb-8 md:mt-4 sm:mt-4 ">
      <div className="xl:border px-3 rounded-l-md border-gray/80 xl:mt-[8rem] pb-5 xl:pb-10 w-[100] xl:w-[35rem] flex flex-col justify-center items-center z-[10] text-white tracking-[1rem] font-clash">
        <Countdown date={new Date("2025-09-15T00:00:00")}
          className="text-[1.6rem] md:text-[2.5rem] xl:text-[4rem]"
        />

        <div className="text-[.8rem] md:text-[.9rem] lg:text-[1rem] xl:text-[1.5rem] bottom-0 relative -tracking-tight">
          <span className="absolute left-[-9rem] md:left-[-11rem] xl:left-[-15rem]">DAY</span>
          <span className="absolute left-[-5rem] md:left-[-5.2rem] xl:left-[-7.5rem] ">HOURS</span>
          <span className="absolute left-[.6rem] md:left-[1rem] xl:left-[.6rem] ">MINUTES</span>
          <span className="absolute left-[6rem] md:left-[7.5rem] xl:left-[9rem] ">SECONDS</span>
        </div>
      </div>

      <div className="hidden xl:block pl-4 border min-w-min-[3rem] rounded-r-md border-gray/80 p-3 mt-[8rem] text-white">
        <div className="flex flex-col gap-2 justify-center items-center h-[100%]">
          <span className="font-chakra text-[1.8rem]">
            September <span className="font-clash">2025</span>
          </span>
          <span className="flex gap-2 text-[2rem] font-chakra font-bold">
            15
            <b className="text-[12px]">TH</b>
            16
            <b className="text-[12px]">TH</b>
            17
            <b className="text-[12px]">TH</b>
          </span>
        </div>
      </div>

    </div>
  );
}

export default Clock;
