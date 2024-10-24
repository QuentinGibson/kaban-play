"use client"
import clsx from "clsx";
import usePieceDrag from "./usePieceDrag";

interface KnightProps {
  black?: boolean;
}

export default function Knight({black = true}: KnightProps) {
  // const {isDragging, drag} = usePieceDrag()
  const chessPiece = black ? "♘" : "♞";

  return (
    <span className={clsx("")}>
      {chessPiece}
    </span>
  )
}