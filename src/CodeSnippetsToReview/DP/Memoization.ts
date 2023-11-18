// Learn to cache
// function addTo80(n) {
//     return console.log(n + 80);
//   }

//   addTo80(5)

// let cache = {};
// function memoizeAddTo80(n) {
//   if (n in cache) {
//     return cache[n];
//   } else {
//     console.log('long time');
//     const answer = n + 80;
//     cache[n] = answer;
//     return console.log(answer);
//   }
// }

// console.log(1, memoizeAddTo80(6))
// // console.log(cache)
// // console.log('-----------')
// console.log(2, memoizeAddTo80(6))

// Let's make that better with no global scope. This is a closure in JavaScript.
function memoizeAddTo80() {
  let cache: { [key: number]: number } = {}
  return function (n: number): number {
    if (n in cache) {
      return cache[n]
    } else {
      console.log("long time")
      const answer: number = n + 80
      cache[n] = answer
      return answer
    }
  }
}

// const memoized: (n: number) => number = memoizeAddTo80()
// console.log(1, memoized(35))
// console.log(cache)
// console.log('-----------')
// console.log(2, memoized(10))
