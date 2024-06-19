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
    getByIdPath: (id) => `questionSet/${id}`,
    updatePath: (id) => `questionSet/${id}`,
    deletePath: (id) => `questionSet/${id}`,
  };

  constructor(private http: ApiService) {}

  getAllQuestionSet(params) {
    return this.http.get(this.routes.getPath(params));
  }

  createQuestionSet(data, id) {
    return this.http.post(this.routes.createPath(id), data);
  }

  updateQuestionSet(data, id) {
    return this.http.put(this.routes.updatePath(id), data);
  }

  getQuestionSetById(id) {
    return this.http.get(this.routes.getByIdPath(id));
  }

  deleteSetById(id){
    return this.http.delete(this.routes.deletePath(id));
  }
}
