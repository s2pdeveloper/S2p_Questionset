import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services';

@Injectable({
  providedIn: 'root',
})
export class QuestionSetService {
  routes: any = {
    createPath: (id) => `questionSet/${id}`,
    getPath: (params) =>
      `questionSet/getAll?page=${params.page}&pageSize=${params.pageSize}&search=${params.search}`,
    updatePath: (id) => `questionSet/${id}`
  };

  constructor(private http: ApiService) {}

  getAllQuestionSet(params) {
    return this.http.get(this.routes.getPath(params));
  }

  createQuestionSet(data, id) {
    return this.http.post(this.routes.createPath(id), data);
  }

  updateQuestionSet(data, id){
    return this.http.put(this.routes.updatePath(id), data);
  }
}
