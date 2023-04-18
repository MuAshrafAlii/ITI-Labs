import { Component } from '@angular/core';
import { StudentsService } from '../Services/students.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  constructor(private myService: StudentsService) {}

  addStudent(name: any, age: any, email: any, phone: any) {
    let newStudent = { name, age, email, phone };
    if (this.validationForm.valid) {
      this.myService.addNewStudent(newStudent).subscribe();
      alert('Student Added');
    }
  }

  validationForm = new FormGroup({
    name: new FormControl(null, Validators.minLength(3)),
    age: new FormControl(null, [Validators.min(20), Validators.max(40)]),
    email: new FormControl(null, Validators.email),
    phone: new FormControl(null, Validators.required),
  });

  get validName() {
    return this.validationForm.controls['name'].valid;
  }

  get validAge() {
    return this.validationForm.controls['age'].valid;
  }

  get validEmail() {
    return this.validationForm.controls['email'].valid;
  }

  get validPhone() {
    return this.validationForm.controls['phone'].valid;
  }
}
