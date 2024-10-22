/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useDroppable } from "@dnd-kit/core"
import clsx from 'clsx'
import { type ReactNode } from "react"

interface DroppableProps {
  children: ReactNode
  id: string
}

export default function Droppable({ children, id }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id
  })
  return (
    <div id={id} ref={setNodeRef} className={clsx("w-48 h-48 bg-blue-500", { "bg-green-500": isOver })}>
      {children}
    </div>
  )
}