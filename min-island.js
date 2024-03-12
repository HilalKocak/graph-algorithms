console.log("-- Find size of the minimum island --")
// dfs 

const minimumIsland = (grid) => {
    let minSize = Infinity
    const visited = new Set()
    for (let r=0; r<grid.length; r++) {
        for(let c=0; c<grid[0].length; c++) {
            const size = exploreSize(grid, r, c, visited)
            if(size > 0 && size < minSize){
                minSize = size
            }
        }
    }

    return minSize
}

const exploreSize = (grid, r, c, visited) => { // dfs
    const rowInBounds = 0 <= r  && r < grid.length
    const colInBounds = 0 <= c  && c < grid[0].length
    if(!rowInBounds ||!colInBounds) return 0

    if(grid[r][c] === 'W') return false // dont wanna count water

    const pos = r + ',' + c
    if(visited.has(pos)) return false
    visited.add(pos)
    let size = 1
    size += exploreSize(grid, r-1, c, visited)
    size += exploreSize(grid, r+1, c, visited)
    size += exploreSize(grid, r, c-1, visited)
    size += exploreSize(grid, r, c+1, visited)

    return size

}

const island = [  
    ['W', 'L', 'W', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'L', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W', 'W'],
    ['L', 'W', 'W', 'W', 'L', 'W'],
    ['L', 'L', 'W', 'W', 'L', 'L'],
    ['W', 'W', 'W', 'W', 'W', 'W'],
    ['L', 'L', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'L', 'L', 'W']
    ]// 2
    
    console.log('Min island size: ', minimumIsland(island))