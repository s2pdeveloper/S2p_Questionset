import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';

@Injectable({
  providedIn: 'root',
})
export class QuestionSetService {
  constructor(private http: ApiService) {}

  getAllQuestionSet() {}

  createQuestionSet() {}
}
