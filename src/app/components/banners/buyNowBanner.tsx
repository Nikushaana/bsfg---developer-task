import Image from "next/image";

export default function BuyNowBanner() {
  return (
    <div className="h-[110px] max-[800px]:h-auto border-[1px] border-custGray bg-darkestBlue rounded-[5px] px-[24px] max-[800px]:p-[14px] flex max-[800px]:flex-col items-center justify-between">
      <h1 className="text-[20px] text-white max-[800px]:text-center  max-[800px]:mb-[10px]">
        You don’t have Crypto? <br />
        No problem.
      </h1>

      <div className="flex flex-wrap max-[800px]:justify-center items-center gap-[15px] max-[800px]:gap-[10px]">
        {[
          "/images/Group 2131328619.png",
          "/images/Group 2131328620.png",
          "/images/Group 2131328621.png",
          "/images/Group 2131328622.png",
          "/images/Group 2131328623.png",
          "/images/Group 2131328611.png",
          "/images/Group 2131328610.png",
        ].map((item) => (
          <div key={item} className=" relative h-[55px] w-[80px] bg-[#141F2B]">
            <Image
              src={item}
              alt={""}
              sizes="500px"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>

      <div className="bg-freshBlue text-white flex items-center justify-center cursor-pointer h-[40px] max-[800px]:mt-[10px] w-[175px] max-[800px]:w-full rounded-[3px]">
        <h1>BUY NOW</h1>
      </div>
    </div>
  );
}
