
// This will work as  declaration done in bottom and moved to top

a =1;
console.log('a', a);
var a;

// this is will also work

hoistedFunction()

function hoistedFunction(){
	console.log('Hello World');
}

// Inside the local environment It worked

function doSomething(){
	x = 33;
	console.log('x', x);
	var x;
}
doSomething()


//*** It will not worked here ***

// Variable initalisation not working for hoisting only declartion will work

// var x;
// console.log('x', x);
// x = 3;

// Using the "use strict" will resolve the issue of hoisting

// "use strict"

// x = 23;
// var 23;

//Testing let and const
let data;
console.log('data', data);
data="Karan";