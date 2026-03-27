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
    getSeminarOverViewPath: (id) => `seminar/seminarOverView/${id}`,
    getSeminars: (params) =>
      `seminar?page=${params.page}&pageSize=${params.pageSize}&search=${params.search}`,
    getSeminarList: `seminar/list`,
    getStudentListById: (params) =>
      `seminar/getStudentBySeminar?id=${params.id}&page=${params.page}&pageSize=${params.pageSize}`,
    downloadExcelPath: (id) => `seminar/seminarStudentExcel/${id}`,
    getStudentDetailedResult: `result/getStudentDetailedResult`,
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

  getSeminarOverView(id) {
    return this.http.get(this.routes.getSeminarOverViewPath(id));
  }

  deleteSeminar(id) {
    return this.http.delete(this.routes.deletePath(id));
  }

  allSeminarList() {
    return this.http.get(this.routes.getSeminarList);
  }

  getAllSeminarStudents(params) {
    return this.http.get(this.routes.getStudentListById(params));
  }

  downloadExcel(id) {
    return this.http.get(this.routes.downloadExcelPath(id));
  }

  getStudentDetailedResult(payload) {
    return this.http.post(this.routes.getStudentDetailedResult, payload);
  }
}
