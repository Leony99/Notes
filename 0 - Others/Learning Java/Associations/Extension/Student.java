package LearningJava.Associations.Extension;

public class Student extends People {
    private int registration;
    private String course;

    public Student(String name, int age, String gender, int registration, String course) {
        super(name, age, gender);
        setRegistration(registration);
        setCourse(course);
    }

    public int getRegistration() {
        return this.registration;
    }
    public void setRegistration(int registration) {
        this.registration = registration;
    }

    public String getCourse() {
        return this.course;
    }
    public void setCourse(String course) {
        this.course = course;
    }

    public void cancelRegistration(){}
}