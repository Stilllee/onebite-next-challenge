import { useEffect, useState } from "react";

import { useRouter } from "next/router";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="mb-5 flex gap-2" role="search">
      <input
        className="flex-1 rounded-md border-2 border-obGray bg-transparent p-3"
        type="search"
        placeholder="검색어를 입력하세요..."
        autoComplete="off"
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
      />
      <button className="w-20 rounded-md bg-obDarkGray" onClick={onSubmit}>
        검색
      </button>
    </div>
  );
}
