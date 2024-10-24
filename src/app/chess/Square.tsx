import clsx from "clsx";
import { type ReactNode } from "react";

interface SquareProps {
  black?: boolean;
  children: ReactNode
}
export default function Square({ children, black }: SquareProps) {
  return (
    <div className={clsx(black ? "bg-black text-white" : "bg-white text-black", "w-full h-full flex items-center justify-center text-[300%]")}>
      {children}
    </div>
  );
}