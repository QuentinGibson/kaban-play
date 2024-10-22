import { useDroppable } from "@dnd-kit/core"
import clsx from 'clsx'
import { ReactNode } from "react"

interface DroppableProps {
  children: ReactNode
}

export default function Droppable({ children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable"
  })
  return ( 
    <div ref={setNodeRef} className={clsx("w-48 h-48 bg-blue-500", {"bg-green-500": isOver})}>
        {children}
    </div>
   )
}