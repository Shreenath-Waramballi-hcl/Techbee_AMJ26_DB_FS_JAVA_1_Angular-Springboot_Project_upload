import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [

{
path:'',
redirectTo:'feedbacks',
pathMatch:'full'
},

{
path:'feedbacks',
component:FeedbackListComponent
},

{
path:'add',
component:CreateFeedbackComponent
},

{
path:'update/:id',
component:UpdateFeedbackComponent
},

{
path:'details/:id',
component:FeedbackDetailsComponent
},
{
path:'dashboard',
component:DashboardComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
