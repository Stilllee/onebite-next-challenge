import { ReactNode } from "react";
import SearchBar from "../components/SearchBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
}
