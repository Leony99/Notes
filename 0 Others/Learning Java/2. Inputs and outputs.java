String name;
int age;

//Scanner
Scanner scan = new Scanner(System.in);
//Console input
name = scan.nextLine();
age = scan.nextInt();
//Console output
System.out.print("\nName: " + name + "\nAge: " + age);//Print - Just print
System.out.println("\nName: " + name + "\nAge: " + age);//Println - Print and insert a new line
System.out.printf("\nName: %s\nAge: %d", name, age);//Printf - Show the data in the formatted output

//JOptionPane
//Graphical input
name = JOptionPane.showInputDialog("Name: ");
age = Integer.parseInt(JOptionPane.showInputDialog("Age: "));
//Graphical output
JOptionPane.showMessageDialog(null, "Name: " + name + "\nAge: " + age);

//Escape characters in outputs
System.out.println("\t"); //Insert a tab in the text at this point
System.out.println("\b"); //Insert a backspace in the text at this point
System.out.println("\n"); //Insert a newline in the text at this point
System.out.println("\r"); //Insert a carriage return in the text at this point
System.out.println("\f"); //Insert a form feed in the text at this point
System.out.println("\""); //Insert a double quote character in the text at this point
System.out.println("\\"); //Insert a backslash character in the text at this point

//Format specifiers in outputs: %[flags][width][.precision]conversion-character
//String formatting
System.out.printf("%s", "Abcd");
System.out.printf("%S", "Abcd");
//Char formatting
System.out.printf("%c", 'a');
System.out.printf("%C", 'a');
//Boolean formatting
System.out.printf("%b", true);
System.out.printf("%B", true);
//Number formatting
//Integer formatting(Byte, Short, Int, Long)
System.out.printf("%d", 1000);
//Float and Double
System.out.printf("%f", 1000.00);

//Some flags
System.out.printf("%,d", 10000);//format our number with the thousands separator - '10,000'
System.out.printf("%-10s", "ada");//left-justify our output - 'ada       '