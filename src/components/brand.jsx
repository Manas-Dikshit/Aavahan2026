import Image from "next/image";

function Brand() {
  return (
    <>
      <div className="w-[100%] h-[600px] overflow-hidden hidden xl:flex items-center justify-center" style={{ backgroundColor: '#004aad' }}>
        <Image src="/AAVAHAN (1).svg" alt="AAVAHAN26" width={1500} height={300} className="p-4" />
      </div>
    </>
  );
}

export default Brand;