"use client"
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useRef } from 'react'
import './style.css'
import {createSwapy} from 'swapy'


const DEFAULT = {
  '1': 'a',
  '3': 'c',
  '4': 'd',
  '2': null
}


function A() {
  return (
    <div className="item a" data-swapy-item="a">
      <div className="handle" data-swapy-handle></div>
      <div>A</div>
    </div>
  )
}

function C() {
  return (
    <div className="item c" data-swapy-item="c">
      <div>C</div>
    </div>
  )
}

function D() {
  return (
    <div className="item d" data-swapy-item="d">
      <div>D</div>
    </div>
  )
}

function getItemById(itemId: 'a' | 'c' | 'd' | null) {
  switch (itemId) {
    case 'a':
      return <A />
    case 'c':
      return <C />
    case 'd':
      return <D />
  }
}


function App() {
  const slotItems: Record<string, 'a' | 'c' | 'd' | null > = localStorage.getItem('slotItem') ? JSON.parse(localStorage.getItem('slotItem')!) : DEFAULT
  const swapMessage = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const container = document.querySelector('.container')!
    const swapy = createSwapy(container, {
      swapMode: 'hover',
    })
    swapy.onSwap(({ data }) => {
      console.log('swap', data);
      localStorage.setItem('slotItem', JSON.stringify(data.object))
    })

    swapy.onSwapEnd(({ data, hasChanged }) => {
      console.log(hasChanged);
      console.log('end', data);
      swapMessage.current!.innerText = `data.object: ${JSON.stringify(data.object)}`
    })

    swapy.onSwapStart(() => {
      console.log('start')
    })

    return () => {
      swapy.destroy()
    }
  }, [])

  return (
    <div className="container">
      <div className="mb-8">
        <p className="text-white" ref={swapMessage}></p>
      </div>
      <div className="slot a" data-swapy-slot="1">
        {getItemById(slotItems['1'] ?? null)}
      </div>
      <div className="second-row">
        <div className="slot b" data-swapy-slot="2">
          {getItemById(slotItems['2'] ?? null)}
        </div>
        <div className="slot c" data-swapy-slot="3">
          {getItemById(slotItems['3'] ?? null)}
        </div>
      </div>
      <div className="slot d" data-swapy-slot="4">
        {getItemById(slotItems['4'] ?? null)}
      </div> </div>
  )
}

export default App