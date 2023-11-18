// sorts only work with strings not numbers
//so you need to make finction

const Comparefunc = (a: number, b: number): number => a - b

const numbers: number[] = [34, 21, 1, 100, 42, -1, 23]

numbers.sort(Comparefunc)
// console.table(numbers)

interface Product {
  name: string
  price: number
}

const proder: Product[] = [
  { name: "lap", price: 100 },
  { name: "dap", price: 10 },
  { name: "cap", price: 1004 },
]

proder.sort((a: Product, b: Product): number => {
  return a.price - b.price
})

// console.log(proder)
