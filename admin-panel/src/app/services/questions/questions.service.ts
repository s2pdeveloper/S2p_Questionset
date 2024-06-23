import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  routes: any = {
    getPath: (id, params) =>
      `question/questionSetQuestions/${id}?page=${params.page}&pageSize=${params.pageSize}&search=${params.search}`,
    createPath: (id) => `question/${id}`,
    getByIdPath: (id) => `question/${id}`,
    updatePath: (id) => `question/${id}`,
    deletePath: (id) => `question/${id}`,
  };

  constructor(private http: ApiService) {}

  getSetQuestions(id, params) {
    return this.http.get(this.routes.getPath(id, params));
  }

  createQuestion(data, id) {
    return this.http.post(this.routes.createPath(id), data);
  }

  updateQuestion(data, id) {
    return this.http.put(this.routes.updatePath(id), data);
  }

  getQuestionById(id) {
    return this.http.get(this.routes.getByIdPath(id));
  }

  deleteQuestionById(id) {
    return this.http.delete(this.routes.deletePath(id));
  }
}
