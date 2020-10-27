var message = ''

function play(even_odd, user_numb) {

    even_odd = even_odd.toLowerCase();
    console.log(even_odd);
    var random_numb = Math.floor(Math.random() * (5 - 1)) + 1;
    console.log(random_numb);
    var final_value = parseInt(random_numb) + parseInt(user_numb);
    console.log(final_value);

    if (even_odd == 'pari') {
        if (final_value % 2 == 0) {
            message = "Hai Vinto";
        } else {
            message = "Hai Perso";
        }
    } else if (even_odd == 'dispari') {
        if (final_value % 2 == 1) {
            message = "Hai Vinto";
        } else {
            message = "Hai Perso";
        }
    } else {
        alert('Non hai inserito pari o dispari')
    }
    return message;
}

play(prompt("Pari o Dispari?"), prompt("Scegli un numero da 1 a 5"));
console.log(message);