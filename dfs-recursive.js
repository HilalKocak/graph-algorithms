const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const deptFirstPrint = (graph, source) => {
    console.log(source);
    for(let neigbor of graph[source]){
        deptFirstPrint(graph, neigbor);
    }
}

console.log("-- DFS with recursive --")
deptFirstPrint(graph, 'a');