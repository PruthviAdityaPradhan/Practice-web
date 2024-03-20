const favMovie = "avatar";

let mov = prompt("guess my fav movie");

while( (mov != favMovie) && (mov!="quit") ){
    mov = prompt("wrong guess. guess again");
}

if(mov==favMovie){
    alert("right guess");
}