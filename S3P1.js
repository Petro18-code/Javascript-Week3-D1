/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1, num2) {
    if(num1 === num2) {
        return (num1 + num2) * 3
    } else {
        return num1 + num2
    }
}

console.log(crazySum(3, 3))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(numeroIntero) {
    return (numeroIntero > 20 && numeroIntero <= 100) || numeroIntero === 400 ? true : false
}
console.log(boundary(400))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(stringa) {
    return stringa.split("").reverse().join("");
}
console.log(reverseString("EPICODE"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(string) {
    let word = string.split(" ");
    for(i = 0; i < word.length; i++) {
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1)
    }
    return word.join(" ")
}

console.log(upperFirst("i love javascript"))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
    const finalArray = [];

    for(let i = 0; i < n; i++) {
        const random = Math.floor(Math.random() * 10)
        finalArray.push(random)
    }
    return finalArray
}

console.log(giveMeRandom(10))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    const areaRettangolo = l1 * l2
    return areaRettangolo
}

console.log("L'area del rettangolo e' : ", area(5, 6) )

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(num) {
    let differenza = Math.abs(num - 19)
    if (differenza > 19) {
        return differenza * 3
    } else {
        return differenza
    }
}

console.log("La differenza e': ", crazyDiff(40))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(str) {
    if(str.startsWith("code")) {
        return str
    } else {
        return "code " + str
    }
}

console.log(codify("code ciao"))
console.log(codify("ciao"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(number) {
    if(number <= 0) {
        return false
    }
    return number % 3 === 0 || number % 7 === 0
}

console.log(check3and7(7))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(str) {
    return str.slice(1, -1);
}

console.log(cutString("Hello World"))