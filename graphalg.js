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

// hasPath Problem = Depth First Traversal
const graphForHasPathProblem = {
    'f': ['g', 'i'],
    'g': ['h'],
    'h': [],
    'i': ['g', 'k'],
    'j': ['i'],
    'k': []
}
const hasPath = (graph, src, dst) => {
    if(src === dst) return true;
    for(let neigbor of graph[src]){
        if(hasPath(graph, neigbor, dst) === true){
            return true
        }
    }

    return false
}

console.log('f to k hasPath? ', hasPath(graphForHasPathProblem, 'f', 'k'))