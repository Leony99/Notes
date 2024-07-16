//Break and continue

const numbers = [1, 2.3, 4.4, 6, 10, 11.3];

//Break - stop and get out of the loop
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        break;
    }
    console.log(numbers[i]);
}

//Continue - stop and restart the loop
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        continue;
    }
    console.log(numbers[i]);
}