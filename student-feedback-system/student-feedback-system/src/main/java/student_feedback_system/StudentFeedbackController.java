package student_feedback_system;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins="http://localhost:4200")
public class StudentFeedbackController {

    @Autowired
    private StudentFeedbackRepository repository;

    @GetMapping("/feedbacks")
    public List<StudentFeedback>
      getAllFeedbacks(){

        return repository.findAll();
    }

    @GetMapping("/feedbacks/{id}")
    public ResponseEntity<StudentFeedback>
      getFeedbackById(
      @PathVariable Long id){

        StudentFeedback feedback =
        repository.findById(id)
        .orElseThrow(() ->
        new ResourceNotFoundException(
        "Feedback Not Found"));

        return ResponseEntity.ok(feedback);
    }

    @PostMapping("/feedbacks")
    public StudentFeedback saveFeedback(
    @Valid
    @RequestBody StudentFeedback feedback){

    // Force INSERT
    feedback.setId(null);

    if(repository.existsByUsn(
    feedback.getUsn())) {

    throw new RuntimeException(
    "USN Already Exists");
    }

    return repository.save(feedback);
    }

    @PutMapping("/feedbacks/{id}")
    public ResponseEntity<StudentFeedback>
      updateFeedback(
      @PathVariable Long id,
      @RequestBody StudentFeedback details){

        StudentFeedback feedback =
        repository.findById(id)
        .orElseThrow(() ->
        new ResourceNotFoundException(
        "Feedback Not Found"));

        feedback.setStudentName(
          details.getStudentName());

        feedback.setUsn(
          details.getUsn());

        feedback.setDepartment(
          details.getDepartment());

        feedback.setFacultyName(
          details.getFacultyName());

        feedback.setRating(
          details.getRating());

        feedback.setFeedback(
          details.getFeedback());

        StudentFeedback updated =
        repository.save(feedback);

        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/feedbacks/{id}")
    public Map<String,Boolean>
      deleteFeedback(
      @PathVariable Long id){

        StudentFeedback feedback =
        repository.findById(id)
        .orElseThrow(() ->
        new ResourceNotFoundException(
        "Feedback Not Found"));

        repository.delete(feedback);

        Map<String,Boolean>
        response=new HashMap<>();

        response.put("deleted",
        Boolean.TRUE);

        return response;
    }
}
