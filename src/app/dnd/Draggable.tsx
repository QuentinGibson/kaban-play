import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"
import { ReactNode } from "react"

interface DraggableProps {
  children: ReactNode
}

export default function Draggable({children}: DraggableProps) {
  const { active, listeners, setNodeRef, attributes, transform } = useDraggable({
    id: "droppable"
  })


  const style = { transform : CSS.Transform.toString(transform) }
  
  return (
    <button style={style} className="inline-block w-48 h-48 bg-green-500" ref={setNodeRef} {...listeners} {...attributes}>
      {children}
    </button>
  )
}