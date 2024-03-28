//function to roll a dice 
//and get random no between 1 and 6

function dice(){
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}

dice();

console.log("---------------------");

//function with argument
// let name = prompt("enter name");

function printName(name){
    console.log(`your name is ${name}`);
}

printName("abc");

console.log("---------------------");

//function to get avg of 3 no

function avg(a,b,c){
    average = (a+b+c)/3;
    console.log(average);
}

avg(7,10,30);

console.log("---------------------");

// multiplication table of a number
function table(num){
    for(let i=1;i<=10;i++){     
        console.log(num*i);
    }
}

let num = prompt("enter a number");
table(num);

console.log("---------------------");
 
//to concat array of strings
let str = ["hi","hello","bye"];

function concat(str){
    let result="";
    
    for(let i=0;i<str.length;i++){
        result+=str[i];
    }

    return result;
}

console.log("---------------------");

//Arrow function

const sum = (a,b) => {
    console.log(a+b);
}