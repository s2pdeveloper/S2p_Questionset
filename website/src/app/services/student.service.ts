import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  routes : any = {
    registerPath : (seminarId) => `http://localhost:2024/api/v1/website/student/${seminarId}`
  }

  constructor(private http : HttpClient) { }

  registerStudent(data: any, seminarId){
    return this.http.post(this.routes.registerPath(seminarId), data);
  }
  getVisibleSet(){
    return this.http.get(``)
  }
}