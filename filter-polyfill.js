
Array.prototype.myFilter = function(fn) {
    const arr = this;
    const output = [];
    arr.forEach((item, index) => {
        if(fn(item, index, this)){
            output.push(item);
        }
    });
    return output;
}


[1,2,3,4,5].myFilter(item =>  item !==  1);