//Arrow function

const sum = (a,b) => {
    console.log(a+b);
}


//implicit return

const mul = (a,b) => a*b ;

//setTimeout

console.log("hi there!");

setTimeout( () => {
    console.log("abcd");
},4000);

console.log("log after this");

//setInterval

let id = setInterval( () => {
    console.log("yo");
},2500);

console.log(id);
//to stop setInterval -> clearInterval(id);


