package LearningJava.Associations.Extension;

public class Professor extends People {
    private String discipline;
    private float salary;

    public Professor(String name, int age, String gender, String discipline, float salary) {
        super(name, age, gender);
        setDiscipline(discipline);
        setSalary(salary);
    }

    public String getDiscipline() {
        return this.discipline;
    }
    public void setDiscipline(String discipline) {
        this.discipline = discipline;
    }

    public float getSalary() {
        return this.salary;
    }
    public void setSalary(float salary) {
        this.salary = salary;
    }

    public void increaseSalary() {}
}