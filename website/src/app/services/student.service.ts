import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environment/environment";

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  routes: any = {
    registerPath: (seminarId) =>
      `${environment.apiEndpoint}student/${seminarId}`,
    getVisibleSetPath: (params) =>
      `${environment.apiEndpoint}student/getVisibleQuestionSet?id=${params.id}`,
    submitPath: `${environment.apiEndpoint}student/submitTest`,
    rankedResultPath: `${environment.apiEndpoint}student/rankedResult`,
    getAllResultPath: `${environment.apiEndpoint}student/allResultOfStudent`,
    loginPath: `${environment.apiEndpoint}student/login`,
    otpPath: `${environment.apiEndpoint}student/Otplogin`
    
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

  getRankedResult(payload: any) {
    return this.http.post(this.routes.rankedResultPath, payload);
  }

  getAllResult(data: any) {
    return this.http.post(this.routes.getAllResultPath, data);
  }

  loginStudent(data: any) {
    return this.http.post(this.routes.loginPath, data);
  }

  otpLogin(data:any){
    return this.http.post(this.routes.otpPath, data);
  }
}
