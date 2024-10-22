"use client"
import React, { useState } from 'react';
import { DndContext, type DragEndEvent, type UniqueIdentifier } from '@dnd-kit/core';

import Droppable from './Droppable';
import Draggable from './Draggable';

export default function App() {
  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);
  const draggableMarkup = (
    <Draggable id="draggable">Drag me</Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="mb-8">
        {parent === null ? draggableMarkup : null}
      </div>
      <div className="flex gap-8">

        {containers.map((id) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
          <Droppable key={id} id={id}>
            {parent === id ? draggableMarkup : 'Drop here'}
          </Droppable>
        ))}
      </div>
    </DndContext>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
};