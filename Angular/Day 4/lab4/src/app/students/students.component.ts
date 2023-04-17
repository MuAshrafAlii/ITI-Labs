import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  allStudents = [
    {
      name: 'Muhammad',
      age: 25,
    },
    {
      name: 'Ahmed',
      age: 27,
    },
    {
      name: 'Omar',
      age: 24,
    },
    {
      name: 'Magdi',
      age: 30,
    },
  ];
}
