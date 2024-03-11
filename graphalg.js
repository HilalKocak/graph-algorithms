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
const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

deptFirstPrint(graph, 'a'); // abdfce and acebdf both valid