// A knight and a pawn are on a chess board. Can you figure out the minimum number of moves required for the knight to travel to the same position of the pawn? On a single move, the knight can move in an "L" shape; two spaces in any direction, then one space in a perpendicular direction. This means that on a single move, a knight has eight possible positions it can move to.

// Write a function, knightAttack, that takes in 5 arguments:

// n, kr, kc, pr, pc

// n = the length of the chess board
// kr = the starting row of the knight
// kc = the starting column of the knight
// pr = the row of the pawn
// pc = the column of the pawn
// The function should return a number representing the minimum number of moves required for the knight to land ontop of the pawn. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7. If it is not possible for the knight to attack the pawn, then return null.
const knightAttack = (n, kr, kc, pr, pc) => {
    const queue = [ [kr, kc, 0] ]
    const visited = new Set()
    visited.add(`${kr},${kc}`)
    while(queue.length > 0){
      const [r, c, step] = queue.shift()
      if(r === pr && c === pc){
        return step
      }
      
      const neighborPositions = getKnightPositions(n, r, c)
      for(let neighbor of neighborPositions){
        const [neighborRow, neighborCol] = neighbor
        const neighborKey = `${neighborRow},${neighborCol}`
        if(!visited.has(neighborKey)){
          visited.add(neighborKey)
          queue.push([neighborRow, neighborCol, step+1])
          
        }
        
      }
    }
    return null
  };
  
  const getKnightPositions = (n, kr, kc) => {
    const positions = [
      [kr+2, kc+1],
      [kr+2, kc-1],
      [kr-2, kc-1],
      [kr-2, kc+1],
      [kr-1, kc+2],
      [kr-1, kc-2],
      [kr+1, kc+2],
      [kr+1, kc-2] ]
    const validPositions = []
    for(let pos of positions){
      const [r, c] = pos
      if(0 <= r && r < n && 0<= c && c < n){
        validPositions.push(pos)
      }
    }
    
    return validPositions
      
  }

console.log(knightAttack(8, 1, 1, 2, 2)) // -> 2