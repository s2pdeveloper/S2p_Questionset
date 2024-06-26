import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  routes: any = {
    registerPath: (seminarId) =>
      `http://localhost:2024/api/v1/website/student/${seminarId}`,
    getVisibleSetPath: (params) =>
      `http://localhost:2024/api/v1/website/student/getVisibleQuestionSet?id=${params.id}`,
    submitPath: `http://localhost:2024/api/v1/website/student/submitTest`,
  };

  constructor(private http: HttpClient) {}

  registerStudent(data: any, seminarId) {
    return this.http.post(this.routes.registerPath(seminarId), data);
  }

  getVisibleSet(params) {
    return this.http.get(this.routes.getVisibleSetPath(params));
  }

  submitTest(data: any) {
    return this.http.post(this.routes.submitPath, data);
  }
}
