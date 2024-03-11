const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const deptFirstPrint = (graph, source) => {
    const stack = [ source ];

    while ( stack.length > 0) {
        const current = stack.pop();
        console.log(current)
        for(let neighbor of graph[current]){[
            stack.push(neighbor)
        ]}
    }
}

console.log("-- DFS --")
deptFirstPrint(graph, 'a'); 