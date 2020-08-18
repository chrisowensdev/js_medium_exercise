// This is where my JS work will go ...

// 1. Madlib
function madlib(name, subject) {
    console.log(`${name}'s favorite subject in school is ${subject}`);
}

//madlib("Chris", "music");

// 2. Tip Calculator
function tipAmount(amount, service) {
    let tip;
    if (service === 'good') {
        tip = 0.2;
    } else if (service === 'fair') {
        tip = 0.15;
    } else if (service === 'bad') {
        tip = 0.1;
    } else {
        return 'Invalid';
    }
    console.log(amount * tip);
}

//tipAmount(100, 'good');

// 3. Tip Calculator 2
function totalAmount(amount, service) {
    let tip;
    if (service === 'good') {
        tip = 0.2;
    } else if (service === 'fair') {
        tip = 0.15;
    } else if (service === 'bad') {
        tip = 0.1;
    } else {
        return 'Invalid';
    }
    console.log(amount + amount * tip);
}

//totalAmount(100, 'good');

// 4a. Print Numbers (For Loop)
function printNumbersFor(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}
// printNumbersFor(1, 10);

// 4b. Print Numbers (While Loop)
function printNumbersWhile(start, end) {
    while (start <= end) {
        console.log(start);
        start++;
    }
}
// printNumbersWhile(1, 10);

// 5. Print a Square
function printSquare(num) {
    let row = 1;
    while (row <= num) {
        console.log('*'.repeat(num));
        row++;
    }
}
// printSquare(5)

// 6. Print a Box
function printBox(width, height) {
    let horizontalBorder = '-'.repeat(width);
    let space = ' '.repeat(width - 2);
    let verticalBorder = '|' + space + '|';
    console.log(`
    ${horizontalBorder}
    ${space.repeat(height - 2)}
    ${horizontalBorder}`);
}

// printBox(5, 5)

// 7. Print a banner
function printBanner(message) {
    console.log('-'.repeat(message.length + 4));
    console.log(`- ${message} -`);
    console.log('-'.repeat(message.length + 4));
}
//printBanner("Hello how are you");

// 8. Leetspeak
function leetspeak(word) {
    let replace = {
        A: '4',
        E: '3',
        G: '6',
        I: '1',
        O: '0',
        S: '5',
        T: '7',
    };
    word = word.toUpperCase();
    for (let i = 0; i < word.length; i++) {
        if (word[i] in replace) {
            // console.log(word[i].replace(replace.word[i]));
        }
    }
    // console.log(replace.
    //     "A")
    console.log(word);
}
leetspeak('another');

// 9. Long-long Vowels
function longLongVowels(word) {}
//longLongVowels(word)

// 10. Just the positives
function positiveNumbers(arr) {
    positive = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            positive.push(arr[i]);
        }
    }
    console.log(positive);
}
//positiveNumbers([-2, -1, 0, 1, 2])

// 11. Caesar Cipher
function ciper(phrase) {}
// cipher("Another phrase")

// 12. Caesar Cipher 2
function decipher(phrase) {}
// decipher("Another pharse")
