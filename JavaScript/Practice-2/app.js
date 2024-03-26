//function to roll a dice 
//and get random no between 1 and 6

function dice(){
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}

dice();

//function with argument
let name = prompt("enter name");

function printName(){
    console.log(`your name is ${name}`);
}

printName();