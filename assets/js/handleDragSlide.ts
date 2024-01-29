// slideHandler.ts
let isMouseDown = false;
let startX: number, scrollLeft: number;

export function handleMouseDown(e: React.MouseEvent, containerClassName: string): void {
  const container = document.querySelector(`.${containerClassName}`) as HTMLDivElement;
  if (!container) return;

  isMouseDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
}

export function handleMouseUp(): void {
  isMouseDown = false;
}

export function handleMouseLeave(): void {
  isMouseDown = false;
}

export function handleMouseMove(e: React.MouseEvent, containerClassName: string): void {
  const container = document.querySelector(`.${containerClassName}`) as HTMLDivElement;
  if (!container || !isMouseDown) return;

  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 1;
  container.scrollLeft = scrollLeft - walk;
}