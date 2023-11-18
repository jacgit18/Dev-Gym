const airports: string[] = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ")

const routes: [string, string][] = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
]

// The graph
const adjacencyList: Map<string, string[]> = new Map()

// Add node
function addNode(airport: string): void {
  adjacencyList.set(airport, [])
}

// Add edge, undirected
function addEdge(origin: string, destination: string): void {
  adjacencyList.get(origin)!.push(destination)
  adjacencyList.get(destination)!.push(origin)
}

// Create the Graph
airports.forEach(addNode)
routes.forEach((route) => addEdge(...route))

function bfs(start: string): void {
  const visited: Set<string> = new Set()

  const queue: string[] = [start]

  while (queue.length > 0) {
    const airport: string = queue.shift()! // mutates the queue

    const destinations: string[] = adjacencyList.get(airport)!

    for (const destination of destinations) {
      if (destination === "BKK") {
        console.log(`BFS found Bangkok!`)
      }

      if (!visited.has(destination)) {
        visited.add(destination)
        queue.push(destination)
      }
    }
  }
}

bfs("PHX")

function dfs(start: string, visited: Set<string> = new Set()): void {
  console.log(start)

  visited.add(start)

  const destinations: string[] = adjacencyList.get(start)!

  for (const destination of destinations) {
    if (destination === "BKK") {
      console.log(`DFS found Bangkok`)
      return
    }

    if (!visited.has(destination)) {
      dfs(destination, visited)
    }
  }
}

// dfs("PHX")
