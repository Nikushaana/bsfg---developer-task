import React from "react";

export default function AboutCasinoComponent() {
  return (
    <div
      className="border-[1px] border-custGray rounded-[4px] pt-[14px] pb-[20px] flex flex-col gap-y-[5px] px-[24px] max-[800px]:p-[14px]
     bg-linear-to-t from-[#1E2A38] to-darkestBlue relative max-[800px]:h-[280px]"
    >
      <h1 className="text-[18px] text-white">
        CASINO <strong>Casino</strong>
      </h1>
      <p className="text-[14px] text-white max-[800px]:h-[90%] max-[800px]:mb-[5px] max-[800px]:overflow-hidden">
        CASINO is your premier online casino platform, offering a world-class
        gaming experience with hundreds of top-tier casino games, exclusive
        bonuses, and lightning-fast payouts. Whether you're a fan of classic
        slots, live dealer games, table games, or jackpot progressives, CASINO
        delivers everything you need for high-stakes excitement and non-stop fun
        — all from the comfort of your home or mobile device.
        <br /> Join thousands of players worldwide who trust CASINO for its
        secure, fair, and licensed gameplay. We partner with the industry's most
        reputable software providers to bring you an unbeatable selection of
        games with stunning graphics, realistic sound effects, and smooth
        gameplay. From roulette and blackjack to immersive live casino tables
        and high-RTP video slots, CASINO is designed to satisfy both new players
        and seasoned pros.
        <br /> At CASINO, new users are greeted with a generous welcome bonus
        and ongoing promotions, cashback offers, free spins, and VIP rewards for
        loyal players. Our platform supports multiple payment options, including
        credit cards, cryptocurrencies, e-wallets, and bank transfers, all
        processed with the highest level of security and privacy. Our 24/7
        customer support team ensures your questions are answered quickly —
        whenever you need assistance.
      </p>

      <div className="absolute bottom-[14px] left-1/2 transform -translate-x-1/2 max-[800px]:bottom-0 max-[800px]:relative max-[800px]:w-full">
        <div className="bg-freshBlue text-white flex items-center justify-center cursor-pointer h-[40px] w-[250px] max-[800px]:w-full rounded-[2px]">
          <h1>READ MORE</h1>
        </div>
      </div>
    </div>
  );
}
