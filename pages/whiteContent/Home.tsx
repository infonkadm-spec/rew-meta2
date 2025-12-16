/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import MainPage from "./MainPage";
import { useState } from "react";

// ROUTES VERSION 1 (Comentado temporariamente)
// const RoutesV1: Record<number, any> = {
//   1: Page1,
//   2: Page2,
//   3: Page3,
//   4: Page4,
//   5: Page5,
//   6: Page6,
//   7: Page7,
// };

// Nova estrutura de rotas
const Routes: Record<number, any> = {
  0: MainPage,
  // 1: Page1,
  // 2: Page2,
  // 3: Page3,
  // 4: Page4,
  // 5: Page5,
  // 6: Page6,
  // 7: Page7,
};

export default function Home() {
  const [page, setPage] = useState(0); // Começando na página principal (0)
  const PageContent = Routes[page];

  return (
    <>
      <div className="min-h-screen bg-background">
        <PageContent
          page={page}
          setPage={setPage}
        />
        <footer className="w-full py-8 px-4" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-xs text-white/50">
            © 2025 by All rights reserved.<br></br>
            This site has no affiliation with YouTube or YouTube Inc. It is also neither sponsored nor endorsed by YouTube in any way. YOUTUBE is a registered trademark of YOUTUBE, Inc.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}