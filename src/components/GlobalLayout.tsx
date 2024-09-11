import Link from "next/link";
import { ReactNode } from "react";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-4xl px-5">
      <header className="py-5">
        <Link className="text-obRed text-xl font-bold" href="/">
          ONEBITE CINEMA
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
