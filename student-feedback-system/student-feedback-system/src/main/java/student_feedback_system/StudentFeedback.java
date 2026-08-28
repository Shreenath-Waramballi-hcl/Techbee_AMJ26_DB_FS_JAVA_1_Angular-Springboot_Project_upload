package student_feedback_system;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(
name="STUDENT_FEEDBACK",
uniqueConstraints={
@UniqueConstraint(columnNames="USN")
}
)
public class StudentFeedback {

@Id
@GeneratedValue(
strategy=
GenerationType.SEQUENCE,
generator="feedback_seq"
)
@SequenceGenerator(
name="feedback_seq",
sequenceName="FEEDBACK_SEQ",
allocationSize=1
)
private Long id;

@Column(nullable=false)
private String studentName;

@Column(nullable=false,unique=true)
private String usn;

@Column(nullable=false)
private String department;

@Column(nullable=false)
private String facultyName;

@Min(1)
@Max(5)
private Integer rating;

@Size(min=10)
private String feedback;

// getters setters


    public StudentFeedback() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id=id;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(
        String studentName) {
        this.studentName = studentName;
    }

    public String getUsn() {
        return usn;
    }

    public void setUsn(String usn) {
        this.usn = usn;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(
        String department) {
        this.department = department;
    }

    public String getFacultyName() {
        return facultyName;
    }

    public void setFacultyName(
        String facultyName) {
        this.facultyName = facultyName;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(
        String feedback) {
        this.feedback = feedback;
    }
}
