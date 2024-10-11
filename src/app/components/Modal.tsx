"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
    }
  }, []);

  const handleCloseModal = () => {
    router.back();
  };

  return createPortal(
    <dialog
      className="mt-5 w-4/5 max-w-xl rounded-md p-5 text-white backdrop:bg-[#000000b3]"
      style={{ backgroundColor: "black" }}
      ref={dialogRef}
      onClick={(e) => {
        if ((e.target as any).nodeName === "DIALOG") handleCloseModal();
      }}
      onClose={handleCloseModal}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement,
  );
}
