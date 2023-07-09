// Matrix make column and row zero


// let arr = [[1,1,1],[1,0,1],[1,1,1]];
let arr = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];

let rowLength = arr.length;
let columnLength = arr[0].length;




for(let i=0;i<rowLength;i++){
	for(let j=0;j<columnLength;j++){
		if(arr[i][j] === 0){
			markRowZero(arr, i, j);
			markColumnZero(arr, i, j);
		}
	}
}

function markRowZero(arr, i, j){
	for(let i=0;i<arr.length;i++){
		if(arr[i][j] !== 0){
			arr[i][j] = -1;
		}
	}
}

function markColumnZero(arr, i, j){
	for(let j =0; j< arr[0].length;j++){
		if(arr[i][j] !== 0){
			arr[i][j] = -1;
		}	
	}
}
console.log('before arr', arr)

for(let i =0; i< rowLength;i++){
	for(let j=0; j<columnLength;j++){
		if(arr[i][j] === -1){
			arr[i][j] = 0;
		}
	}
}


console.log('arr', arr);
