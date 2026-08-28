import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFeedbackComponent,
    FeedbackListComponent,
    UpdateFeedbackComponent,
    FeedbackDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
