// Word Search I

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const word = "ABCCED";
const isOutOfbound = (board, row, col) => {
    return row < 0 || row >= board.length || col < 0 || col >= board[0].length;
}

const checkNeighbours = (board, word, row, col) => {
    // exit conditions
    if(!word.length) return true;
    if(isOutOfbound(board, row, col) || board[row][col] !== word[0]) return false;
    
    let currChar = board[row][col];
    let newWord = word.substr(1);
    
    board[row][col] = 0;
    const result = checkNeighbours(board, newWord, row+1, col) ||
                   checkNeighbours(board, newWord, row, col+1) ||
                   checkNeighbours(board, newWord, row -1, col) ||
                   checkNeighbours(board, newWord, row, col -1);
    
    board[row][col] = currChar;
    return result;
};

var exist = function(board, word) {
    for(let row = 0; row < board.length;row++){
        for(let col =0; col < board[0].length;col++){
            if(checkNeighbours(board, word, row, col)) return true;
        }
    }
    return false;
};
console.log(exist(board, word));
