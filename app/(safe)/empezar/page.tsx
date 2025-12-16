/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import LogoV2 from "@/components/LogoV2";
import Page1 from "./version1/Page1";
import Page2 from "./version1/Page2";
import Page3 from "./version1/Page3";
import Page4 from "./version1/Page4";
import Page5 from "./version1/Page5";
import Page6 from "./version1/Page6";
import Modal from "@/components/Modal";
import Balance from "@/components/Balance";
import { rewardValues } from "@/utils/rewards";
import { useEffect, useState } from "react";

// ROUTES VERSION 1
const RoutesV1: Record<number, any> = {
  1: Page1,
  2: Page2,
  3: Page3,
  4: Page4,
  5: Page5,
  6: Page6,
};

export default function Page() {

  // SET COMPONENT STATES
  const [page, setPage] = useState(1);
  const [active, setActive] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  // SET PAGE CONTENT
  const PageContent = RoutesV1[page];
  const isInfoPage = page === 1 || page === 5 || page === 6;

  // PLAY SOUND
  const handlePlaySound = () => {
    const audio = new Audio('/songs/caching.mp3');
    audio.play();
  };

  // HANDLE CLICK
  const handleClick = () => {
    setActive(true);
    if (isInfoPage) {
      setTimeout(() => {
        setPage(page + 1);
        setActive(false);
      }, 750);
    } else {
      setTimeout(() => {
        setOpenModal(true);
        handlePlaySound();
      }, 100);
    };
  };

  // NEXT PAGE
  useEffect(() => {
    if (openModal) {
      setTimeout(() => {
        setPage(page + 1);
        setActive(false);
        setOpenModal(false);
      }, 2000);
    };
  }, [openModal, page])

  return (
    <div className="flex flex-col w-full max-w-xl gap-5 px-4 py-5 pb-10">
      {page !== 1 && (
        <div className="flex justify-between items-center">
          <LogoV2 />
          <Balance page={page} />
        </div>
      )}
      <PageContent
        active={active}
        handleClick={handleClick}
      />
      {openModal && <Modal value={rewardValues[page] || 47} />}
      {isInfoPage && (
        <div className="flex flex-col justify-center text-center gap-3 p-4 text-gray-400/70">
          <span className="text-sm">© 2025 YouTube Rewards</span>
          <span className="text-[10px]"><u>Privacy Policy</u> | <u>Terms of use</u></span>
        </div>
      )}
    </div>
  );
};