/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client"
import React from 'react';
import {useDraggable} from '@dnd-kit/core';

interface DraggableProps {
  children: React.ReactNode;
  id: string;
}

export default function Draggable(props: DraggableProps) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;


  return (
    <button className="size-48 flex justify-center items-center bg-red-100" ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}