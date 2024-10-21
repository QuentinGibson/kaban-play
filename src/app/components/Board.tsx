"use client"
import { useEffect, useRef, type FC } from "react";
import { createSwapy } from "swapy";

interface BoardProps {
  items: Record<string, string>;
  title: string
}
const Board: FC<BoardProps> = ({ items, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const swapy = createSwapy(container, {
      swapMode: "hover",
    });

    swapy.onSwap(({ data }) => {
      console.log("swap", data);
      localStorage.setItem("todoItems", JSON.stringify(data.object));
    });

    return () => {
      swapy.destroy();
    };
  }, []);
  return (
  <div className="flex w-full items-center justify-center gap-8">
    <div className="flex flex-col">
        <span className="w-full text-center text-3xl font-bold">{title}</span>
      <div ref={containerRef} className="bg-rounded min-h-full max-w-80 overflow-hidden bg-green-500">
        {items &&
          Object.keys(items).map((key) => {
            return (
              <div
                className="border-b border-black"
                data-swapy-slot={key}
                key={key}
              >
                <div
                  className="h-full w-full bg-indigo-500 px-4 py-6"
                  data-swapy-item={items[key]}
                >
                  <div><p>{items[key]!}</p></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  </div>
 )
};

export default Board;
