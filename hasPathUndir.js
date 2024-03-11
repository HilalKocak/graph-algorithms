console.log("-- hasPath Problem Solution for Undirected Graphs--")

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
console.log('undirectedPath ',undirectedPath(edges, 'o', 'j'))
