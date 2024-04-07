// Write a function, semestersRequired, that takes in a number of courses (n) and a list of prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. Return the minimum number of semesters required to complete all n courses. There is no limit on how many courses you can take in a single semester, as long the prerequisites of a course are satisfied before taking it.

// Note that given prerequisite [A, B], you cannot take course A and course B concurrently in the same semester. You must take A in some semester before B.

// You can assume that it is possible to eventually complete all courses.


const semestersRequired = (numCourses, prereqs) => {
    const graph = buildGraph(numCourses, prereqs)
    
    const distance = {}
    for(let course in graph){
      if(graph[course].length === 0) distance[course] = 1
    }
    
    for(let course in graph){
      traverseDistance(graph, course, distance)
    }
    
    return Math.max(...Object.values(distance))
  };
  
  const traverseDistance = (graph, node, distance) => {
    if(node in distance) return distance[node]
    
    let maxDistance = 0
    for(let neighbor of graph[node]){
      const neighborDistance = traverseDistance(graph, neighbor, distance)
      if(neighborDistance > maxDistance) maxDistance = neighborDistance
    }
    distance[node] = 1 + maxDistance
    return distance[node]
  }
  
  const buildGraph = (numCourses, prereqs) =>{
    let graph = {}
    for(let i=0; i< numCourses; i++){
      graph[i] = []
    }
    for(let prereq of prereqs){
      const [a,b] =  prereq
      graph[a].push(b)
    }
    
    return graph
  }
  

const numCourses = 6;
const prereqs = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];

console.log(semestersRequired(numCourses, prereqs)) // -> 3