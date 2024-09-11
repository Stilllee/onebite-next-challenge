import { ReactNode } from "react";
import SearchableLayout from "@/components/SearchableLayout";

export default function Home() {
  return <></>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
