"use client"
import { createSwapy } from 'swapy'
import { useEffect, useRef } from 'react'
import Board from '../components/Board';

const DEFAULT: Record<string, string> = {
  "1": "Create a drag and drop list",
  "2": "Add a new item",
  "3": "Remove an item",
  "4": "Update an item",
  "5": "Persist the list"
}

export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const todoItems: Record<string, string> = localStorage.getItem("todoItems")
    ? JSON.parse(localStorage.getItem("todoItems")!)
    : DEFAULT;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex h-full items-center justify-center gap-4">
        <Board items={todoItems} title='To-Do'/>
        <Board items={todoItems} title='In-Progess'/>
        <Board items={todoItems} title='Done'/>
        
        
      </div>
    </main>
  );
}