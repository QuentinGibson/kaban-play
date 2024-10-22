"use client"
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import { useState } from "react"
import Draggable from "./Draggable"
import Droppable from "./Droppable"

export default function DragContext() {
  const [isDropped, setIsDropped] = useState(false)
  const draggableMarkup = (
    <Draggable>
      Drag Me
    </Draggable>
  )

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true)
    } 
    if (event.over && event.over.id !== "droppable") {
      setIsDropped(false)
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <Droppable>
        {isDropped ? draggableMarkup: null}
      </Droppable>
    </DndContext>

  )
}