// This solution works for both positive as well as negative item.


const arr = [-2, -3, 4, -1, -2, 1,5,-3];
let msf = 0, meh=0;
for(let item in arr){
    meh = meh + arr[item];
    if(meh < arr[item]){
        meh = arr[item];
    }
    if(msf < meh){
        msf = meh;
    }
}

console.log('msf', msf);