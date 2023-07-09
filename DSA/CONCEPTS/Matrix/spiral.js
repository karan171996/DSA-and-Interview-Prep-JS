let matrix = [[1,2,3],[4,5,6],[7,8,9]]
let result = [];
let startColumn = 0;
let endColumn = matrix[0].length-1;
let startRow = 0;
let endRow =matrix.length-1;

while(startColumn <= endColumn && startRow <= endRow){
    for(let i =startColumn; i<=endColumn;i++){
        result.push(matrix[startRow][i])
    }
    startRow++;
    for(let i =startRow; i<=endRow;i++){
        result.push(matrix[i][endColumn])
    }
    endColumn--;
    if(startRow <= endRow){
        for(let i=endColumn;i>=startColumn;i--){
            result.push(matrix[endRow][i]);
        }
    }

    endRow--;
    if(startColumn <= endColumn){
    for(let i=endRow;i>=startRow;i--){
        result.push(matrix[i][startColumn]);
        }
    }

    startColumn++;
}
console.log('result', result);