int i = 4, j;
boolean c = false, d = true;

//Assignment operators
i += 6; //i = i + 6
i -= 6; //i = i - 6
i *= 3; //i = i * 3
i /= 3; //i = i / 3
i %= 2; //i = i % 2

//Arithmetic operators
//Basic arithmetic operators
j = i + 2;
j = i - 2;
j = i * 2;
j = i / 2;
j = i % 2; //Division remainder
//Increment operators
i++; //i = i+1 / post-increment
++i; //i = i+1 / pre-increment
//Decrement operators
i--; //i = i-1 / post-decrement
--i; //i = i-1 / pre-decrement

//Math class examples
System.out.println(Math.abs(-10)); //Positive
System.out.println(Math.max(3.4,5.3)); //Highest number
System.out.println(Math.min(3.4,5.3)); //Lowest number
System.out.println(Math.pow(5, 2)); //Power(exponent)
System.out.println(Math.sqrt(25)); //Square root
System.out.println(Math.PI); //Pi value

//Comparison operators
System.out.println(i > j); //higher
System.out.println(i >= j); //higher or equal
System.out.println(i < j); //lower
System.out.println(i <= j); //lower or equal
System.out.println(i == j); //equal
System.out.println(i != j); //not equal

//Logical operators
System.out.println(c && d); //c E d
System.out.println(c || d); //c OU d
System.out.println(!c && d); //Negação de c E d