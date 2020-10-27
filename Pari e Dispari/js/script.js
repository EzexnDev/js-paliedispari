var usr_choice = prompt("Scegli Pari o Dispari");
var usr_number = prompt("Scegli un numero tra 1 e 5");


function getRandom(min_numb,max_numb) {
    var random_numb = Math.floor(Math.random() * (max_numb - min_numb)) + min_numb;
    return random_numb
}


function isEven(number){
    return number%2==0;
}

var final_numb = parseInt(usr_number) + getRandom(1,5);
console.log(final_numb);
var result = isEven(final_numb);
if((usr_choice =='pari' && result) || (usr_choice =='dispari' && !result)){
    console.log("Hai vinto")
} else {
    console.log("Hai perso")
}
