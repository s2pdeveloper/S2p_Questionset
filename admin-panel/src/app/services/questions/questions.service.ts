import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  routes: any = {
    getPath: (id) => `question/questionSetQuestions/${id}`
  }

  constructor(private http : ApiService) { }

  getSetQuestions(id){
    return this.http.get(this.routes.getPath(id))
  }
  
}
