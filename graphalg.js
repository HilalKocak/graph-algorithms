// const deptFirstPrint = (graph, source) => {
//     const stack = [ source ];

//     while ( stack.length > 0) {
//         const current = stack.pop();
//         console.log(current)
//         for(let neighbor of graph[current]){[
//             stack.push(neighbor)
//         ]}
//     }
// }
const deptFirstPrint = (graph, source) => {
    console.log(source);
    for(let neigbor of graph[source]){
        deptFirstPrint(graph, neigbor);
    }
}

const breadthFirstPrint = (graph, source) => {
    const queue = [source];
    while(queue.length > 0){
        const current = queue.shift();
        console.log(current)
        for(let neighbor of graph[current]){
            queue.push(neighbor)
        }
    }
    
}
const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}
console.log("-- DFS --")
deptFirstPrint(graph, 'a'); // abdfce and acebdf both valid
console.log("-- BFS --")
breadthFirstPrint(graph, 'a') // acbedf

console.log("-- hasPath Problem --")

const graphForHasPathProblem = {
    'f': ['g', 'i'],
    'g': ['h'],
    'h': [],
    'i': ['g', 'k'],
    'j': ['i'],
    'k': []
}
// hasPath Problem = Depth First Stack
const hasPath = (graph, src, dst, visited = new Set()) => {
    if(visited.has(src)) return false;
    visited.add(src)
    
    if(src === dst) return true;
    for(let neighbor of graph[src]){
        if(hasPath(graph, neighbor, dst, visited) === true){
            return true
        }
    }

    return false
}

// hasPath Problem = Breadth First Stack 
// const hasPath = (graph, src, dst) => {
//     const queue = [src]

//     while (queue.length > 0) {
//         const current = queue.shift();
//         if(current === dst) return true;
//         for(let neighbor of graph[current]){
//             queue.push(neighbor)
//         }
//     }

//     return false
// }

console.log('f to k hasPath? ', hasPath(graphForHasPathProblem, 'f', 'k'))

// Undirected path problem
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]
const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    console.log('built graph: ', graph)
    return hasPath(graph, nodeA, nodeB, new Set())
}
const buildGraph = (edges) => {
    const graph = {};
    for(let edge of edges){
        const [ a, b] = edge;
        if(!(a in graph)) graph[a] = []
        if(!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}
console.log('undirectedPath ',undirectedPath(edges, 'o', 'j'))
