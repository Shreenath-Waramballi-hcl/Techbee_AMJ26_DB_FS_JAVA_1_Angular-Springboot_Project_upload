package student_feedback_system;

public class ResourceNotFoundException
extends RuntimeException{

    public ResourceNotFoundException(
            String message){
        super(message);
    }
}
