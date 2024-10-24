
  export const handleSquareClick = (newPosition: [number, number], startPosition: [number,number], validateMove: (newPosition: [number, number], currentPosition: [number, number]) => boolean, setPosition: ([toX, toY] : [number, number]) => void) => {
    if (validateMove(startPosition, newPosition)) {
      setPosition(newPosition);
    }
  }
