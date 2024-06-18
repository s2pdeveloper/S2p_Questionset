import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root',
})
export class SeminarService {
  routes: any = {
    createPath: `seminar`,
    getByIdPath: (id) => `seminar/${id}`,
    updatePath: (id) => `seminar/${id}`,
    deletePath: (id) => `seminar/${id}`,
    getSeminars: (params) =>
      `seminar?page=${params.page}&pageSize=${params.pageSize}&search=${params.search}`,
    getSeminarList: `seminar/list`,
  };

  constructor(private http: ApiService) {}

  getAllSeminars(params) {
    return this.http.get(this.routes.getSeminars(params));
  }

  addNewSeminar(payload) {
    return this.http.post(this.routes.createPath, payload);
  }

  updateSeminar(id, payload) {
    return this.http.put(this.routes.updatePath(id), payload);
  }

  getSeminarById(id) {
    return this.http.get(this.routes.getByIdPath(id));
  }

  deleteSeminar(id) {
    return this.http.delete(this.routes.deletePath(id));
  }

  allSeminarList(){
    return this.http.get(this.routes.getSeminarList);
  }
}
