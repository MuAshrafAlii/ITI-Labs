import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private readonly base_url = 'http://localhost:3000/users';
  constructor(private readonly myClient: HttpClient) {}

  getAllStudents() {
    return this.myClient.get(this.base_url);
  }
  getStudentById(id: any) {
    return this.myClient.get(this.base_url + `/${id}`);
  }
  addNewStudent(newStudent: any) {
    return this.myClient.post(this.base_url, newStudent);
  }
}
