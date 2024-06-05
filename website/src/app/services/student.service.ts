import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }

  registerStudent(data: any, seminarId){
    return this.http.post(`http://localhost:2024/api/v1/website/student/${seminarId}`, data);
  }
}
