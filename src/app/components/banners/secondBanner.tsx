import Image from "next/image";
import React from "react";

export default function SecondBanner() {
  return (
    <div className="grid grid-cols-3 max-[800px]:grid-cols-2 gap-[10px]">
      <div className="h-[250px] max-[800px]:h-[100px] relative rounded-[5px] overflow-hidden">
        <Image
          src="/images/495fdc096dc84134cdd0876f245b23d2148e19b4.png"
          alt={""}
          sizes="500px"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="h-[250px] max-[800px]:h-[100px] relative rounded-[5px] overflow-hidden">
        <Image
          src="/images/07a073bc0d991d58e6c921c9073d6f867830b344.png"
          alt={""}
          sizes="500px"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="h-[250px] max-[800px]:h-[85px] rounded-[5px] grid grid-cols-2 max-[800px]:col-span-2 max-[800px]:grid-cols-4 gap-[10px]">
        <div className="relative rounded-[5px] overflow-hidden">
          <Image
            src="/images/c97bf7fe777fc9f54bda404d524053406525bffa.png"
            alt={""}
            sizes="500px"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top left",
            }}
          />
        </div>
        <div className="relative rounded-[5px] overflow-hidden">
          <Image
            src="/images/d415326c319594bd5bde3cf94c6cd0ad516c14da.png"
            alt={""}
            sizes="500px"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top left",
            }}
          />
        </div>
        <div className="relative rounded-[5px] overflow-hidden">
          <Image
            src="/images/8ce77b53290bf5c3d2440e373b2cd42e5fde4eb1.png"
            alt={""}
            sizes="500px"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top left",
            }}
          />
        </div>
        <div className="relative rounded-[5px] overflow-hidden">
          <Image
            src="/images/20b262499b28dfc732bfa433af9e0cc491432525.png"
            alt={""}
            sizes="500px"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top left",
            }}
          />
        </div>
      </div>
    </div>
  );
}
