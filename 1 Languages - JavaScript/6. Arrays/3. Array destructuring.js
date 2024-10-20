//Array destructuring

const a = [1, 2, 3, 4];
const b = [1, 2,[11, 12, 13], 3];

//Extract elements from array
let [x, y, , z] = a;
console.log(x, y, z);

//Extract elements from array inside an array
let [, ,[j, , k], ] = b;
console.log(j, k);

//Extract an undefined element
let [n1, , , n4, n5] = a;
console.log(n1, n4, n5);

//Extract and set a value to an undefined element
let [m1, , , m4, m5 = 10] = a;
console.log(m1, m4, m5);