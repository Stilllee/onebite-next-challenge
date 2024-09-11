import "@/styles/globals.css";

import type { AppProps } from "next/app";
import GlobalLayout from "@/components/GlobalLayout";
import { NextPage } from "next";
import { ReactNode } from "react";
import localFont from "next/font/local";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <div className={pretendard.className}>
      <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
    </div>
  );
}
