const favMovie = "avatar";

let mov = prompt("guess my fav movie");

while((mov != favMovie)){
    if(mov=="quit"){
        alert("you quit");
        break;
    }
    mov = prompt("wrong guess. guess again");
}

if(mov==favMovie){
    alert("Congrats!right guess");
}