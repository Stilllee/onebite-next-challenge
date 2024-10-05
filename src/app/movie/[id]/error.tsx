"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <>
      <p>오류가 발생했습니다.</p>
    </>
  );
}
