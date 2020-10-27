function reverseString(user_word) {
    user_word = user_word.toLowerCase()
    /*var stringa_invertita = user_word.split('').reverse().join('');

    if (user_word == stringa_invertita) {
        console.log("E Palindromo!")
    } else {
        console.log("Non e Palindromo!")
    }*/
    var message = '';
    var str = "";
    var stringa_invertita = user_word;
    for (var reverse_index = stringa_invertita.length; reverse_index >= 0; reverse_index--) {
        str += stringa_invertita.charAt(reverse_index);
    }
    if (user_word == str) {
        message = "Palindroma";
    } else {
        message = "Non e' Palindroma";
    }
    console.log(message);
    return message;

}

reverseString(prompt('Inserisci la parola per verificare se e Palindroma'));