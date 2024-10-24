
export function canMoveKnight(toPosition: [number, number], knightPosition: [number, number]): boolean {
  const [x, y] = knightPosition
  const toX = toPosition[0]
  const toY = toPosition[1]
  const dx = toX - x
  const dy = toY - y

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}
