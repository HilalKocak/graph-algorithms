console.log("-- hasPath Problem Solution for Directed Graphs--")
// You can run hasPath function with dfs or bfs aproaches. Uncommand if you want bfs, command dfs.
const graphForHasPathProblem = {
    'f': ['g', 'i'],
    'g': ['h'],
    'h': [],
    'i': ['g', 'k'],
    'j': ['i'],
    'k': []
}
// hasPath Problem = Depth First Stack
const hasPath = (graph, src, dst) => {
    if(src === dst) return true;
    for(let neighbor of graph[src]){
        if(hasPath(graph, neighbor, dst) === true){
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
