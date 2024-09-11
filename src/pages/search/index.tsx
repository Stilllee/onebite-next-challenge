import { ReactNode } from "react";
import SearchableLayout from "@/components/SearchableLayout";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { q } = router.query;

  return <div>검색결과 : {q}</div>;
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
