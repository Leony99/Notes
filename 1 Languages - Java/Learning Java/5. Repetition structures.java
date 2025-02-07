int[] numbers = {0, 2, 3, 6, 7, 8, 9};
int count = 0;

//For loop
//For each (value of 'i' starting from 'zero'; while 'i < x'; do 'i++') and do {}
for (int i = 0; i < numbers.length; i++) {
    System.out.print(numbers[i]);
}

//Foreach loop - Enhanced for
//For each (value called 'n' in 'numbers') do
for (int n : numbers){
    System.out.println(n);
}

//While loop
//While (true) do {}
while (count <= 3) {
    System.out.print(count);
    count++;
}

//Do while loop
//Do {} at least once, while (true)
do {
    System.out.print(count);
    count++;
}
while (count <=3);

//Break and continue
//Break - stop and get out of the loop
for (int i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        break;
    }
    System.out.print(numbers[i]);
}

//Continue - stop and get back on the loop
for (int i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        continue;
    }
    System.out.print(numbers[i]);
}