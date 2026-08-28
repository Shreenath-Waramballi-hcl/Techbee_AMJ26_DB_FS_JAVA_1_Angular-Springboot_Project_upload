import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../feedback';

@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

totalFeedbacks: number = 0;
averageRating: number = 0;
highestRating: number = 0;

constructor(
private feedbackService: FeedbackService
) {}

ngOnInit(): void {

this.feedbackService.getFeedbackList()
.subscribe((data: Feedback[]) => {

this.totalFeedbacks = data.length;

if (data.length > 0) {

let totalRating = 0;

data.forEach((feedback: Feedback) => {
totalRating += feedback.rating;
});

this.averageRating =
totalRating / data.length;

this.highestRating =
Math.max(
...data.map(
(feedback: Feedback) => feedback.rating
)
);

} else {

this.averageRating = 0;
this.highestRating = 0;

}

});

}

}
