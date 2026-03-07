export function add(a: number, b: number): number {
  return a + b;
}

// Deliberate type error to fail CI
const result: string = add(1, 2);
