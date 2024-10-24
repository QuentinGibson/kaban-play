'use client'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { set } from 'zod';
import Knight from '~/app/chess/Knight';
import Square from '~/app/chess/Square';
import { canMoveKnight } from './lib/canMoveKnight';
import { useState } from 'react';
import { handleSquareClick } from './lib/handleSquareClick';

function renderSquare(i: number, knightPosition: [number, number], setKnightPosition: ([toX, toY] : [number, number]) => void) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const black = (x + y) % 2 === 1;
  const isKnightHere = knightPosition[0] === x && knightPosition[1] === y;
  const piece = isKnightHere ? <Knight black={black} /> : null;

  return (
    <div onClick={() => handleSquareClick([x,y], knightPosition, canMoveKnight, setKnightPosition)} key={i} className="size-[12.5%] flex justify-center items-center">
      <Square black={black}>{piece}</Square>
    </div>
  )
}


export default function Board() {
  const [knightPosition, setKnightPosition] = useState<[number, number]>([0, 0]);

  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition, setKnightPosition));
  }
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        </DndProvider>
      <div id="board" className='w-full h-full flex flex-wrap border border-black m-4'>
        {squares}
      </div>
    </>
  )
}
