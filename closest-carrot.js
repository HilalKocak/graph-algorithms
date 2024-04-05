// Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column. In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. The function should return a number representing the length of the shortest path from the starting position to a carrot. You may move up, down, left, or right, but cannot pass through walls (X). If there is no possible path to a carrot, then return -1.
// const grid = [
//     ['O', 'O', 'O', 'O', 'O'],
//     ['O', 'X', 'O', 'O', 'O'],
//     ['O', 'X', 'X', 'O', 'O'],
//     ['O', 'X', 'C', 'O', 'O'],
//     ['O', 'X', 'X', 'O', 'O'],
//     ['C', 'O', 'O', 'O', 'O'],
//   ];
  
//   closestCarrot(grid, 1, 2); // -> 4

const closestCarrot = (grid, startRow, startCol) => {
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let queue = [ [startRow, startCol, 0] ]
    let visited = new Set()
    while(queue.length > 0){
      let [r, c, distance] = queue.shift()
      
      for(let [dr, dc] of directions){
        let newRow = dr+r
        let newCol = dc+c
        if(newRow >= 0 && newRow < grid.length && newCol>=0 && newCol<grid[0].length && !visited.has(`${newRow},${newCol}`))
        {
          if(grid[newRow][newCol] === 'O'){
            visited.add(`${newRow},${newCol}`)
            queue.push([newRow, newCol, distance+1])
          
          }else if(grid[newRow][newCol] === 'C'){
            return distance+1 // we are adding the step where carrot is
          }
          
        }
      }
      
    }
    
    return -1
  };
  const grid = [
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'X', 'O', 'O', 'O'],
    ['O', 'X', 'X', 'O', 'O'],
    ['O', 'X', 'C', 'O', 'O'],
    ['O', 'X', 'X', 'O', 'O'],
    ['C', 'O', 'O', 'O', 'O'],
  ];
  
  console.log(closestCarrot(grid, 0, 0) )// -> 5