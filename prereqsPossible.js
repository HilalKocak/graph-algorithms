// Write a function, prereqsPossible, that takes in a number of courses (n) and prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. The function should return a boolean indicating whether or not it is possible to complete all courses.

const prereqsPossible = (numCourses, prereqs) => {
    const graph = buildGraph(numCourses, prereqs)
    const visiting = new Set()
    const visited = new Set()
    
    for(let node in graph){
      if(hasCycle(graph, node, visiting, visited) == true){
        return false
      }
    }
    
    return true
  };
  
  const hasCycle = (graph, node, visiting, visited) => {
    if(visiting.has(node)) return true
    visiting.add(node)
    
    for(let neighbor of graph[node]){
      if(hasCycle(graph, neighbor, visiting, visited) === true){
        return true
      }
    }
    
    visiting.delete(node)
    visited.add(node)

    return false
  }
  // n = numCourses
  // p = prereqs
  // Time O(n + p)
  // Space O(n + p + n) = O(p+n)
  const buildGraph  =(numCourses, prereqs) => {
    const graph = {}
    for(let course=0; course<numCourses; course++){
      graph[course] = []
    }
    
    for(let prereq of prereqs){
      const [ courseA, courseB ] = prereq
      graph[courseA].push(String(courseB))
    }
    
    return graph
  }

const numCourses = 6;
const prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
];
console.log(prereqsPossible(numCourses, prereqs) )// -> true