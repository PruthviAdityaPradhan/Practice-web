//function to roll a dice 
//and get random no between 1 and 6

function dice(){
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}

dice();

//function with argument
// let name = prompt("enter name");

function printName(name){
    console.log(`your name is ${name}`);
}

printName("abc");

//function to get avg of 3 no

function avg(a,b,c){
    average = (a+b+c)/3;
    console.log(average);
}

avg(7,10,30);