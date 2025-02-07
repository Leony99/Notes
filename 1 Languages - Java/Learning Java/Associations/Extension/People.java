package LearningJava.Associations.Extension;

public class People {
    private String name;
    private int age;
    private String gender;

    public People(String name, int age, String gender) {
        setName(name);
        setAge(age);
        setGender(gender);
    }

    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return this.age;
    }
    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return this.gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }

    public final void makeBirthday(){
        this.setAge(this.getAge() + 1);
    }
}