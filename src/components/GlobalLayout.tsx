import Link from "next/link";
import { ReactNode } from "react";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-4xl px-5">
      <header className="py-5">
        <h1>
          <Link className="text-xl font-bold text-obRed" href="/">
            ONEBITE CINEMA
          </Link>
        </h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
