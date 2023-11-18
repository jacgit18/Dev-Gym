// Linked List Node

class Noderrr {
  info: number
  priority: number
  prev: Noderrr | null
  next: Noderrr | null

  constructor() {
    this.info = 0
    this.priority = 0
    this.prev = null
    this.next = null
  }
}

let front: Noderrr | null
let back: Noderrr | null

function push(fr: Noderrr | null, rr: Noderrr | null, n: number, p: number): void {
  const news = new Noderrr()
  news.info = n
  news.priority = p

  if (fr === null) {
    fr = news
    rr = news
    news.next = null
  } else {
    if (p <= (fr as Noderrr).priority) {
      news.next = fr
      fr.prev = news.next
      fr = news
    } else if (p > (rr as Noderrr).priority) {
      news.next = null
      ;(rr as Noderrr).next = news
      news.prev = (rr as Noderrr).next
      rr = news
    } else {
      let start = (fr as Noderrr).next
      while (start && start.priority > p) {
        start = start.next
      }
      if (start) {
        start.prev!.next = news
        news.next = start.prev!
        news.prev = start.prev!.next
        start.prev = news.next
      }
    }
  }
  front = fr
  back = rr
}

function peek(fr: Noderrr | null): number {
  return fr ? fr.info : 0
}

function isEmpty(fr: Noderrr | null): boolean {
  return fr === null
}

function pop(fr: Noderrr | null, rr: Noderrr | null): number | undefined {
  const temp = fr
  const res = temp ? temp.info : undefined
  fr = temp ? temp.next : null
  if (fr === null) rr = null

  front = fr
  back = rr
  return res
}

// Driver code
front = null
back = null

push(front, back, 2, 3)
push(front, back, 3, 4)
push(front, back, 4, 5)
push(front, back, 5, 6)
push(front, back, 6, 7)
push(front, back, 1, 2)

console.log(front)
console.log(back)
console.log(pop(front, back))
console.log(peek(front))
