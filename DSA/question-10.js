// bomb enemy
let count = 0;
const grid = [["W","W","W"],["0","0","0"],["E","E","E"]]

for(let i=0;i< grid.length;i++){
    for(let j=0;j<grid[i].length;j++){
        if(grid[i][j] === '0'){
            console.log('Math.max(count, traverseArea(grid, grid.length, grid[0].length, i, j))', Math.max(count, traverseArea(grid, grid.length, grid[0].length, i, j)));
            count = Math.max(count, traverseArea(grid, grid.length, grid[0].length, i, j));
        }
    }
}

function traverseArea(grid,row, column, i, j){
    let localCount = 0;
    const rowIndex = i;
    const columnIndex = j;
    //column Traverse

    //left check
    for(let k = j-1; k>=0;k--){
        if(grid[rowIndex][k] === 'E'){
            localCount++;
        }
        if(grid[rowIndex][k] === 'W'){
            break;
        }
    }
    //right Check
    for(let k = j+1; k<column; k++){
        if(grid[rowIndex][k] === 'E'){
            localCount++;
        }
        if(grid[rowIndex][k] === 'W'){
            break;
        }
    }

    //row Check

    //left check
    for(let k=i-1; k>=0;k--){
        if(grid[k][columnIndex] === 'E'){
            localCount++;
        }
        if(grid[k][columnIndex] === 'W'){
            break;
        }  
    }

    //right check
    for(let k=i+1; k<row;k++){
        if(grid[k][columnIndex] === 'E'){
            localCount++;
        }
        if(grid[k][columnIndex] === 'W'){
            break;
        }  
    }
    return localCount;
}

console.log(count);



