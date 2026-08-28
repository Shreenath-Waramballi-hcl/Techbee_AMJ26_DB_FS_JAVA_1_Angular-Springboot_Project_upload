package student_feedback_system;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentFeedbackRepository
extends JpaRepository<StudentFeedback,Long>{

    boolean existsByUsn(String usn);
}
