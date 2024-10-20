//Repetition structures

const numbers = [1, 2.3, 4.4, 6, 10, 11.3];
let count = 0;

//For loop
//For each (value of 'i' starting from 'zero'; while 'i < x'; do 'i++') and do {}
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//For in loop
//For each (value called 'n' in 'numbers') do
for (let n in numbers) {
    console.log(numbers[n]);
}

//While loop
//While (true) do {}
while (count <= 3) {
    console.log(count);
    count++;
}

//Do while loop
//Do {} at least once, while (true)
do {
    console.log(count);
    count++;
}
while (count <=3);