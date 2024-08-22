import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  routes: any = {
    createPath: `/feedback/create`,
    getAllPath: (params) => `/feedback/getAll?page=${params.page}&pageSize=${params.pageSize}&search=${params.search}`,
    getByIdPath: (id) => `/feedback/getById/${id}`,
    updatePath: (id) => `/feedback/update/${id}`,
    deletePath: (id) => `/feedback/delete/${id}`,
  };
  constructor(private http: ApiService) {}

  getAllFeedback(params) {
    return this.http.get(this.routes.getAllPath(params));
  }

  getFeedbackById(id){
    return this.http.get(this.routes.getByIdPath(id));
  }

  createFeedback(data) {
    return this.http.post(this.routes.createPath, data);
  }

  updateFeedback(data, id) {
    return this.http.put(this.routes.updatePath(id), data);
  }

  deleteFeedback(id) {
    return this.http.delete(this.routes.deletePath(id));
  }
}
