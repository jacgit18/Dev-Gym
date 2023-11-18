// benchmark-helper.ts
import Benchmark from "benchmark"

class BenchmarkHelper {
  static benchmarkFunction(func: (...args: any[]) => any, ...input: any[]) {
    const suite = new Benchmark.Suite()
    suite.add("Function", () => {
      func(...input)
    })
    suite.on("cycle", (event: Benchmark.Event) => {
      console.log(String(event.target))
    })
    suite.run()
  }
}

export default BenchmarkHelper
