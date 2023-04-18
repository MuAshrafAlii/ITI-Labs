import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../Services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent {
  public id: any;
  public student: any;
  constructor(myRoute: ActivatedRoute, myService: StudentsService) {
    this.id = myRoute.snapshot.params['id'];
    myService.getStudentById(this.id).subscribe({
      next: (data) => {
        this.student = data;
      },
      error: (error) => {},
    });
  }
}
