function reverseString(user_word) {
    user_word = user_word.toLowerCase()
    var reversed_string = user_word.split('').reverse().join('');

    if (user_word == reversed_string) {
        console.log("E Palindromo!")
    } else {
        console.log("Non e Palindromo!")
    }
    return reversedString

}

reverseString(prompt('Inserisci la parola per verificare se e Palindroma'));