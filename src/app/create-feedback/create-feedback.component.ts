import { Component }
from '@angular/core';

import { Router }
from '@angular/router';

import { Feedback }
from '../feedback';

import { FeedbackService }
from '../feedback.service';

@Component({
selector:'app-create-feedback',
templateUrl:
'./create-feedback.component.html'
})

export class CreateFeedbackComponent{

feedback:Feedback =
new Feedback();

constructor(
private feedbackService:
FeedbackService,
private router:Router){}
setRating(star: number): void {
this.feedback.rating = star;
}

clearRating(): void {
this.feedback.rating = 0;
}
saveFeedback(){

 this.feedback.id = 0;

this.feedbackService
.createFeedback(this.feedback)
.subscribe((data: any)=>{

console.log(data);

this.router.navigate(
['/feedbacks']
);
});
}

onSubmit(){

this.saveFeedback();

}
}
