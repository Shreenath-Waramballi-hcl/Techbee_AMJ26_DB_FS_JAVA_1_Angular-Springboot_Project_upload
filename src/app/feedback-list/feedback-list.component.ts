import { Component,OnInit }
from '@angular/core';

import { Observable }
from 'rxjs';

import { Router }
from '@angular/router';

import { Feedback }
from '../feedback';

import { FeedbackService }
from '../feedback.service';

@Component({

selector:'app-feedback-list',
templateUrl:
'./feedback-list.component.html',
styleUrls:['./feedback-list.component.css']
})

export class FeedbackListComponent
implements OnInit{

feedbacks!:
Observable<Feedback[]>;

constructor(
private feedbackService:
FeedbackService,
private router:Router){}

ngOnInit(){

this.reloadData();
}

reloadData(){

this.feedbacks=
this.feedbackService.getFeedbackList();

}

deleteFeedback(id:number){

this.feedbackService
.deleteFeedback(id)
.subscribe((data: any)=>{
console.log(data);
this.reloadData();

});
}

details(id:number){

this.router.navigate(
['details',id]);

}
updateFeedback(id:number){

this.router.navigate([
'/update',
id
]);

}
}
