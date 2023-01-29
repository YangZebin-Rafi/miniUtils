// test
export function sum(a: number, b: number) {
  return a + b
}

// export function flattenArrayable<T>(array?: Nullable<Arrayable<T | Array<T>>>): Array<T> {
//   return toArray(array).flat(1) as Array<T>
// }

// generate random colors
// const generateRandomColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
export function generateRandomColor() {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
}

