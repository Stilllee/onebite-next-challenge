import { ReactNode, Suspense } from "react";

import SearchBar from "../components/SearchBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={<p>로딩중...</p>}>
        <SearchBar />
      </Suspense>
      {children}
    </>
  );
}
