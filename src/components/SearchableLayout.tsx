import { ReactNode } from "react";
import SearchBar from "./SearchBar";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
}
