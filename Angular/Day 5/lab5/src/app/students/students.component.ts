import { Component } from '@angular/core';
import { StudentsService } from '../Services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  public allStudents: any;

  constructor(myService: StudentsService) {
    myService.getAllStudents().subscribe({
      next: (data) => {
        this.allStudents = data;
      },
      error: (error) => {},
    });
  }
}
