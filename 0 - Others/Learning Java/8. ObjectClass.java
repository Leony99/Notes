//Package declaration
package LearningJava.Structure;

//Imports declaration

//Class declaration
public class ObjectClass {
    //Attributes declarations
    private String name;
    private int age;

    //Special methods declarations
    public Class(String n, int a){
        this.name = n;
        this.age = a;
    }
    public String getName(){
        return this.name;
    }
    public void setName(String n){
        this.name = n;
    }
    public int getAge(){
        return this.age;
    }
    public void setAge(int a){
        this.age = a;
    }

    //Methods declaration
    public static void talk(){
        System.out.println("Blá Blá Blá!");
    }
}