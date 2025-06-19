"use client";

import Image from "next/image";
import React, { useState } from "react";
import BitcoinIcon from "./icons/BitcoinIcon";
import EtheriumIcon from "./icons/EtheriumIcon";
import TetherIcon from "./icons/TetherIcon";
import BitcoinCashIcon from "./icons/BitcoinCashIcon";
import LitecoinIcon from "./icons/LitecoinIcon";
import UsdcIcon from "./icons/UsdcIcon";
import DogeIcon from "./icons/DogeIcon";
import RippleIcon from "./icons/RippleIcon";
import McIcon from "./icons/McIcon";

export default function Footer() {
  const [footerMenu, setFooterMenu] = useState([
    {
      id: 1,
      title: "Games",
      lists: [
        {
          id: 1,
          text: "Slots",
        },
        {
          id: 2,
          text: "Live Dealers",
        },
        {
          id: 3,
          text: "Table Games",
        },
        {
          id: 4,
          text: "Video Poker",
        },
        {
          id: 5,
          text: "Crash",
        },
      ],
    },
    {
      id: 2,
      title: "Promotions",
      lists: [
        {
          id: 1,
          text: "Welcome Bonus",
        },
        {
          id: 2,
          text: "Cash Back Deals",
        },
        {
          id: 3,
          text: "Weekly Cashback",
        },
        {
          id: 4,
          text: "Tournaments",
        },
        {
          id: 5,
          text: "VIP Club",
        },
      ],
    },
    {
      id: 3,
      title: "Banking",
      lists: [
        {
          id: 1,
          text: "Deposit Options",
        },
        {
          id: 2,
          text: "Withdraw Options",
        },
        {
          id: 3,
          text: "Refund Policy",
        },
        {
          id: 4,
          text: "Payment Security",
        },
        {
          id: 5,
          text: "AML Policy",
        },
      ],
    },
    {
      id: 4,
      title: "Casino",
      lists: [
        {
          id: 1,
          text: "Terms & Conditions",
        },
        {
          id: 2,
          text: "Privacy Policy",
        },
        {
          id: 3,
          text: "Bonus Terms",
        },
        {
          id: 4,
          text: "Affiliate Program",
        },
        {
          id: 5,
          text: "About CASINO",
        },
      ],
    },
    {
      id: 5,
      title: "Customer Care",
      lists: [
        {
          id: 1,
          text: "Live Chat",
        },
        {
          id: 2,
          text: "Phone Support",
        },
        {
          id: 3,
          text: "Email Support",
        },
        {
          id: 4,
          text: "Help Desk",
        },
        {
          id: 5,
          text: "Responsible Gaming",
        },
      ],
    },
  ]);
  return (
    <div className="bg-darkestBlue flex justify-center max-[800px]:pb-[60px]">
      <div className="w-[1200px] max-[1400px]:w-[80vw] max-[800px]:w-[100vw] shrink-0 flex flex-col gap-y-[20px] py-[30px] max-[800px]:px-[20px]">
        <div className="flex max-[800px]:flex-col max-[800px]:gap-y-[20px] justify-between w-full">
          <div className="flex flex-col gap-y-[10px]">
            <div className="w-[75px] h-[40px] rounded-[5px] bg-contentBgColor"></div>
            <p className="text-[14px] text-lightgrayText w-[300px]">
              Strike it rich at CASINO! Experience heart-pounding action with
              massive jackpots, fast payouts, and VIP treatment that keeps
              champions coming back. Join thousands of winners today - your
              fortune awaits!
            </p>
          </div>
          <hr className="border-contentBgColor w-full hidden max-[800px]:flex" />
          <div className="flex justify-between w-full max-[800px]:grid  max-[800px]:grid-cols-2  max-[800px]:gap-[20px]">
            {footerMenu.map((item: FooterSection) => (
              <div key={item.id} className="flex flex-col gap-y-[10px]">
                <h1 className="text-white">{item.title}</h1>
                <div className="flex flex-col gap-y-[5px]">
                  {item.lists.map((item1: MenuItem) => (
                    <p key={item1.id} className="text-lightgrayText text-[14px]">
                      {item1.text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <div className="w-full h-full flex flex-col gap-y-[13px]">
              <div className="relative h-[calc((100%-13px)/2)] w-full rounded-[5px] overflow-hidden">
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
              <div className="relative h-[calc((100%-13px)/2)] w-full rounded-[5px] overflow-hidden">
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
            </div>
          </div>
        </div>
        <hr className="border-contentBgColor" />
        <div className="flex items-center flex-wrap justify-center gap-[15px] text-custWhite">
          <div className="w-[45px] h-[45px] flex items-center justify-center">
            <BitcoinIcon className="w-[25px] h-[28px]" />
          </div>
          <div className="w-[45px] h-[45px] flex items-center justify-center">
            <EtheriumIcon className="w-[20px] h-[32px]" />
          </div>
          <div className="w-[45px] h-[45px] flex items-center justify-center">
            <TetherIcon className="w-[32px] h-[25px]" />
          </div>
          <div className="w-[45px] h-[45px] flex items-center justify-center">
            <BitcoinCashIcon className="w-[25px] h-[32px]" />
          </div>
          <div className="w-[45px] h-[45px] flex items-center justify-center">
            <LitecoinIcon className="w-[25px] h-[32px]" />
          </div>
          <div className="w-[45px] h-[45px] flex items-center justify-center">
            <UsdcIcon className="w-[35px] h-[34px]" />
          </div>
          <div className="w-[45px] h-[45px] flex items-center justify-center">
            <DogeIcon className="w-[23px] h-[27px]" />
          </div>
          <div className="w-[45px] h-[45px] flex items-center justify-center">
            <RippleIcon className="w-[30px] h-[28px]" />
          </div>
          <div className="relative h-[45px] w-[67px] shrink-0">
            <Image
              src="/images/visa_image.png"
              alt={""}
              sizes="500px"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-[65px] h-[45px] flex items-center justify-center">
            <McIcon className="w-[45px] h-[30px]" />
          </div>
          <div className="relative h-[45px] w-[67px] shrink-0">
            <Image
              src="/images/amex__image.png"
              alt={""}
              sizes="500px"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="relative h-[45px] w-[67px] shrink-0">
            <Image
              src="/images/diners_club_image.png"
              alt={""}
              sizes="500px"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="relative h-[45px] w-[67px] shrink-0">
            <Image
              src="/images/discover_image.png"
              alt={""}
              sizes="500px"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <hr className="border-contentBgColor" />
        <div className="flex flex-col items-center gap-y-[30px] relative">
          <div className="absolute right-0 top-0 z-1 h-[35px] w-[170px] max-[800px]:relative">
            <Image
              src="/images/legal_logos.png"
              alt={""}
              sizes="500px"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <hr className="border-contentBgColor w-full hidden max-[800px]:flex" />
          <p className="text-lightgrayText text-[14px] text-center">
            © 2025 <strong className="text-white">CASINO.COM.</strong> All
            Rights Reserved.
          </p>
          <h1 className="text-lightgrayText text-[14px] text-center">
            GAMBLING CAN BE ADDICTIVE. PLAY RESPONSIBLY!{" "}
          </h1>
          <p className="text-lightgrayText text-[14px] text-center">
            CASINO casino is operated by CASINO B.V., ensuring a secure and fair
            gaming environment for all players. We strictly adhere to all
            regulatory requirements to maintain transparency and fairness. Our
            commitment to integrity and ethical practices is at the core of our
            business. We employ advanced security measures, including SSL
            encryption and robust firewall systems, to protect your personal and
            financial information. Promoting responsible gaming is a priority at
            CASINO Casino. We provide tools and resources to help you gamble
            responsibly. We offer a variety of secure payment methods and ensure
            seamless transactions. All payment processes are encrypted and
            compliant with industry standards. Our customer support team is
            available 24/7 to assist you with any questions or issues you may
            have. Contact us via Live Chat, Email, or Phone for prompt and
            professional assistance.
          </p>
        </div>
      </div>
    </div>
  );
}
