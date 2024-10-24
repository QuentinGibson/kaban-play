export default function observe(receive: ([posX, posY]: [number, number]) => [number, number]) {
  const randPos = () => Math.floor(Math.random() * 8);
  setInterval(() => receive([randPos(), randPos()]), 1000);
}