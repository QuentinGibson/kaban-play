import { useDrag } from "react-dnd";
import { ItemTypes } from "./Constants";

export default function usePieceDrag() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return {isDragging, drag}
}