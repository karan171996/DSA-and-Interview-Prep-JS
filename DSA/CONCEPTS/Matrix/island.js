//Island

let grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
;
let count = 0;

    function traverseGrid(grid, i, j){
        if(grid[i][j] === '1'){
            grid[i][j] = '0';
        }else{
            return;
        }
        if(i < grid.length-1){
            traverseGrid(grid, i+1, j);
        }
        if(i > 0  && i< grid.length){
            traverseGrid(grid, i-1, j);
        }
        if(j < grid[0].length-1){
            traverseGrid(grid, i ,j+1);
        }
        if(j > 0 && j < grid[0].length){
            traverseGrid(grid, i ,j-1);
        }
    }

    for(let i =0; i<grid.length;i++){
        for(let j =0; j<grid[i].length;j++){
            if(grid[i][j] === '1'){
                count++;
                traverseGrid(grid, i ,j)
            }
        }
    }

    return count;