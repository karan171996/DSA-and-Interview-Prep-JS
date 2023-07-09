function curry(fn){
	// returning the function to `curriedFunction` 
	// args are the one , which are passed in curriedFunction(1,2,3),
	return function curried(...args) {

		if(args.length >= fn.length){
			// We can use here any thing .bind, .apply, .call
			const newFunction = fn.bind(this, ...args);
			return newFunction();
		}else{
			console.log('args', args);
			console.log('fn', fn.length)
			return function(...args2){
				return curried.call(this, ...args, ...args2);
			}
		}
	}
}


const join = (a,b,c, d,e) => {
	return `${a}_${b}_${c}_${d}_${e}`
}

const curriedFunction = curry(join);

// curriedFunction(1)(2,3) === curry(join)(1)(2,3);

// Only this part curry(join) returns function curried(1) as one function [curried(1)]newFunction(2,3)

console.log(curriedFunction(1)(2,3)(4,5))
// console.log(curriedFunction(1,2,3));
