//Print all possible paths from top left to bottom right of a mXn matrix

let m = 1;
let n = 3;

let mat = [[1,0,1]];

console.log(traverse(mat, m, n, 0, 0));

function traverse(mat, m, n, i , j){
    if(mat[i][j] === 0){
        return 0;
    }
    if(i === m-1){
        if(j < n -1){
            return traverse(mat, m, n, i, j+1);
        }
    }
    if(j === n-1){
        if(i < m -1){
            return traverse(mat, m, n, i+1, j);
        }
    }
    if(i === m-1 && j === n-1){
        return 1;
    }

    let count = traverse(mat, m, n, i, j+1) + traverse(mat, m, n, i+1, j);

    return count
}