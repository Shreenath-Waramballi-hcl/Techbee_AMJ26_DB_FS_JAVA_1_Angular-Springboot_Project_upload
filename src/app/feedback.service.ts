import { Injectable }
from '@angular/core';

import { HttpClient }
from '@angular/common/http';

import { Observable }
from 'rxjs';

@Injectable({
providedIn:'root'
})

export class FeedbackService{

private baseUrl=
'http://localhost:8081/api/v1/feedbacks';

constructor(
private http:HttpClient){}

getFeedbackList():
Observable<any>{

return this.http.get(
this.baseUrl);
}

getFeedback(id:number):
Observable<any>{

return this.http.get(
`${this.baseUrl}/${id}`);
}

createFeedback(obj:Object):
Observable<Object>{

return this.http.post(
this.baseUrl,obj);
}

updateFeedback(
id:number,
obj:any):Observable<Object>{

return this.http.put(
`${this.baseUrl}/${id}`,
obj);
}

deleteFeedback(id:number):
Observable<any>{

return this.http.delete(
`${this.baseUrl}/${id}`);
}
}
