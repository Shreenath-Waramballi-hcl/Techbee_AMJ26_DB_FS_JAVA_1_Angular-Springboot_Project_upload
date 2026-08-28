import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
selector: 'app-update-feedback',
templateUrl: './update-feedback.component.html',
styleUrls: ['./update-feedback.component.css']
})

export class UpdateFeedbackComponent
implements OnInit {

id!: number;

feedback: Feedback = new Feedback();

constructor(
private route: ActivatedRoute,
private router: Router,
private feedbackService: FeedbackService
) {}

ngOnInit(): void {

this.id =
this.route.snapshot.params['id'];

this.feedbackService
.getFeedback(this.id)
.subscribe((data:any) => {

this.feedback = data;

});

}

updateFeedback() {

this.feedbackService
.updateFeedback(
this.id,
this.feedback
)
.subscribe((data:any) => {

console.log(data);

this.gotoList();

});

}

onSubmit() {

this.updateFeedback();

}

gotoList() {

this.router.navigate(
['/feedbacks']
);

}

}