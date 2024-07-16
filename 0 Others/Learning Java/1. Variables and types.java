//Primitive Types
byte b = 23; //Wrapper Class:Byte - Size:1 Byte
short s = 3144; //Wrapper Class:Short - Size:2 Bytes
int i = 223321123; //Wrapper Class:Integer - Size:4 Bytes
long l = 322424423212L; //Wrapper Class:Long - Size:8 Bytes

float f = 12332.32f; //Wrapper Class:Float - Size:4 Bytes
double d = 32321.322; //Wrapper Class:Double - Size:8 Bytes

boolean B = true; //Wrapper Class:Boolean - Size:1 Bit

char c = 'e'; //Wrapper Class:Character - Size:1 Byte

//Reference Types or non-primitive Type(instance of a class)
//String
String S1 = new String("Leony");
String S2 = "1061534";
//Array
int[] numbers =  new int[3];
numbers[0] = 1;
numbers[1] = 4;
numbers[2] = 6;
int[] numbers2 = {1, 4, 6};
//Multidimensional Array
int[][] numbers3 = new int[2][3];
numbers3[0][0] = 1;
numbers3[0][1] = 4;
numbers3[0][2] = 6;
int[][] numbers4 = {{1, 4, 6}, {2, 3, 5}};

//Type casting
//Widening Casting (automatically) - converting a smaller type to a larger type size
l = b;
//Narrowing Casting (manually) - converting a larger type to a smaller size type
i = (int) d;

//String conversions
//To string
S1 = Integer.toString(i);
//To int
i = Integer.parseInt(S2);