// Jump Game


const arr =[1,3,2,0,2,3];

function traverse(arr, item) {
    if(item === 0) return false;
    let checkValidData = false;
    for(let i =1; i<item;i++){
        checkValidData = traverse(arr, item[i]);
    }
}
traverse(arr , arr[0]);
