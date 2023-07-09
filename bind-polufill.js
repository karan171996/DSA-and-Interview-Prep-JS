const obj = {
    word: 'Hey',
}

const showWord = function(id, name){
    return `${this.word}.${id}.${name}`;
}

Function.prototype.myBind = function(obj, args){
    const func = this;
    console.log("🚀 ~ file: bind-polufill.js:11 ~ func:", func)
    console.log("🚀 ~ file: bind-polufill.js:13 ~ args:", args)
    return function(...args1){
        func.apply(obj, [args, args1])
    }
}

const data = showWord.myBind(obj, 1);
console.log(data('Karan'))